/**
 * Xello Outbound Agent
 * Google Sheets command centre for prospect discovery, AI audits, approval-based outreach and API spend tracking.
 *
 * Paste this file into Extensions > Apps Script inside your Xello Outbound Agent Google Sheet.
 */

const CONFIG = {
  model: getProp_("OPENAI_MODEL", "gpt-5-mini"),
  dailySpendLimitGbp: Number(getProp_("DAILY_SPEND_LIMIT_GBP", "2.00")),
  senderName: getProp_("SENDER_NAME", "Sam at Xello Media"),
  calendlyUrl: getProp_("CALENDLY_URL", ""),
  areas: ["Brighton", "Hove", "Worthing", "Lewes", "Shoreham", "Eastbourne", "Crawley", "Haywards Heath", "Burgess Hill", "Horsham"],
  services: ["renovation company", "builder", "home extensions", "loft conversions", "kitchen renovation", "bathroom renovation", "design and build"],
};

const SHEETS = {
  prospects: "Prospects",
  audits: "AI Audits",
  drafts: "Outreach Drafts",
  approved: "Approved To Send",
  replies: "Replies",
  calls: "Calls Booked",
  clients: "Clients",
  spend: "API Spend",
  dnc: "Do Not Contact",
  settings: "Settings",
};

const HEADERS = {
  [SHEETS.prospects]: ["prospect_id", "company_name", "service_type", "area", "website", "instagram", "email", "phone", "source_url", "rating", "review_count", "lead_score", "status", "notes", "created_at", "updated_at"],
  [SHEETS.audits]: ["audit_id", "prospect_id", "company_name", "website_findings", "social_findings", "growth_opportunity", "score_reasoning", "created_at"],
  [SHEETS.drafts]: ["draft_id", "prospect_id", "company_name", "channel", "subject", "message", "follow_up", "approval_status", "send_status", "approved_at", "sent_at", "notes"],
  [SHEETS.approved]: ["draft_id", "prospect_id", "company_name", "channel", "subject", "message", "approved_at", "sent_at"],
  [SHEETS.replies]: ["reply_id", "prospect_id", "company_name", "channel", "reply_type", "summary", "next_action", "created_at"],
  [SHEETS.calls]: ["call_id", "prospect_id", "company_name", "contact_name", "call_date", "call_type", "outcome", "next_step", "deal_value", "created_at"],
  [SHEETS.clients]: ["client_id", "company_name", "monthly_retainer", "ad_spend", "start_date", "meta_account_status", "website_status", "lead_tracking_status", "notes"],
  [SHEETS.spend]: ["timestamp", "provider", "action", "model_or_api", "input_tokens", "output_tokens", "estimated_cost_gbp", "notes"],
  [SHEETS.dnc]: ["company_name", "email", "website", "reason", "created_at"],
  [SHEETS.settings]: ["key", "value", "notes"],
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Xello Agent")
    .addItem("Setup / repair tabs", "setupXelloSheets")
    .addSeparator()
    .addItem("Scan next prospects", "scanNextProspects")
    .addItem("Audit + draft next batch", "auditAndDraftNextBatch")
    .addItem("Send approved emails", "sendApprovedEmails")
    .addSeparator()
    .addItem("Log manual Instagram sends", "logManualInstagramSends")
    .addToUi();
}

function setupXelloSheets() {
  const ss = SpreadsheetApp.getActive();
  Object.keys(HEADERS).forEach((name) => {
    const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
    const headers = HEADERS[name];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    } else {
      const current = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
      if (current.join("|") !== headers.join("|")) {
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }
    }
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);
  });

  seedSettings_();
  SpreadsheetApp.getActive().toast("Xello Outbound Agent tabs are ready.");
}

function scanNextProspects() {
  requireSpendRoom_();
  const serpApiKey = getRequiredProp_("SERPAPI_KEY");
  const prospects = getSheet_(SHEETS.prospects);
  const existing = getExistingKeys_();
  let added = 0;

  for (const area of CONFIG.areas) {
    for (const service of CONFIG.services) {
      if (added >= 25) return finishScan_(added);
      const query = `${service} ${area} Sussex`;
      const url = `https://serpapi.com/search.json?engine=google_maps&q=${encodeURIComponent(query)}&type=search&api_key=${encodeURIComponent(serpApiKey)}`;
      const json = fetchJson_(url);
      logSpend_("SerpAPI", "prospect_scan", "google_maps", 0, 0, 0.01, query);

      const results = (json.local_results || []).slice(0, 8);
      results.forEach((r) => {
        const name = clean_(r.title);
        const website = clean_(r.website);
        const key = `${name}|${website}`.toLowerCase();
        if (!name || existing[key] || isDoNotContact_(name, website, "")) return;

        prospects.appendRow([
          makeId_("prospect"),
          name,
          service,
          area,
          website,
          "",
          "",
          clean_(r.phone),
          clean_(r.place_id_search || r.link),
          clean_(r.rating),
          clean_(r.reviews),
          "",
          "New",
          "Found by Xello local scanner",
          now_(),
          now_(),
        ]);
        existing[key] = true;
        added += 1;
      });
    }
  }

  finishScan_(added);
}

function auditAndDraftNextBatch() {
  requireSpendRoom_();
  const openAiKey = getRequiredProp_("OPENAI_API_KEY");
  const prospectsSheet = getSheet_(SHEETS.prospects);
  const draftsSheet = getSheet_(SHEETS.drafts);
  const auditsSheet = getSheet_(SHEETS.audits);
  const rows = getRows_(prospectsSheet);
  let processed = 0;

  rows.forEach(({ rowIndex, row }) => {
    if (processed >= 10) return;
    if (!["New", "Needs audit"].includes(row.status)) return;
    if (hasDraft_(row.prospect_id)) return;

    const prompt = buildAuditPrompt_(row);
    const result = callOpenAi_(openAiKey, prompt);
    const parsed = safeJson_(result.text);
    const score = Number(parsed.lead_score || 70);

    auditsSheet.appendRow([
      makeId_("audit"),
      row.prospect_id,
      row.company_name,
      parsed.website_findings || "",
      parsed.social_findings || "",
      parsed.growth_opportunity || "",
      parsed.score_reasoning || "",
      now_(),
    ]);

    draftsSheet.appendRow([
      makeId_("draft"),
      row.prospect_id,
      row.company_name,
      "Email",
      parsed.email_subject || `Quick growth audit for ${row.company_name}`,
      parsed.email_message || "",
      parsed.follow_up_email || "",
      "Needs review",
      "Not sent",
      "",
      "",
      "",
    ]);

    draftsSheet.appendRow([
      makeId_("draft"),
      row.prospect_id,
      row.company_name,
      "Instagram DM",
      "",
      parsed.instagram_dm || "",
      "",
      "Needs review",
      "Manual task",
      "",
      "",
      "",
    ]);

    prospectsSheet.getRange(rowIndex, 12).setValue(score);
    prospectsSheet.getRange(rowIndex, 13).setValue("Drafted");
    prospectsSheet.getRange(rowIndex, 16).setValue(now_());

    logSpend_("OpenAI", "audit_and_draft", CONFIG.model, result.inputTokens, result.outputTokens, estimateOpenAiCostGbp_(result.inputTokens, result.outputTokens), row.company_name);
    processed += 1;
  });

  SpreadsheetApp.getActive().toast(`Audited and drafted ${processed} prospects.`);
}

function sendApprovedEmails() {
  requireSpendRoom_();
  const draftsSheet = getSheet_(SHEETS.drafts);
  const approvedSheet = getSheet_(SHEETS.approved);
  const prospectsById = indexRows_(getSheet_(SHEETS.prospects), "prospect_id");
  const rows = getRows_(draftsSheet);
  let sent = 0;

  rows.forEach(({ rowIndex, row }) => {
    if (sent >= 20) return;
    if (row.channel !== "Email") return;
    if (row.approval_status !== "Approved" || row.send_status === "Sent") return;

    const prospect = prospectsById[row.prospect_id];
    if (!prospect || !prospect.email) {
      draftsSheet.getRange(rowIndex, 12).setValue("Missing email address");
      return;
    }
    if (isDoNotContact_(prospect.company_name, prospect.website, prospect.email)) {
      draftsSheet.getRange(rowIndex, 12).setValue("Blocked by Do Not Contact");
      return;
    }

    const body = addSignature_(row.message);
    GmailApp.sendEmail(prospect.email, row.subject, body, { name: CONFIG.senderName });

    draftsSheet.getRange(rowIndex, 9).setValue("Sent");
    draftsSheet.getRange(rowIndex, 10).setValue(row.approved_at || now_());
    draftsSheet.getRange(rowIndex, 11).setValue(now_());
    approvedSheet.appendRow([row.draft_id, row.prospect_id, row.company_name, row.channel, row.subject, body, row.approved_at || now_(), now_()]);
    sent += 1;
  });

  SpreadsheetApp.getActive().toast(`Sent ${sent} approved emails.`);
}

function logManualInstagramSends() {
  const draftsSheet = getSheet_(SHEETS.drafts);
  const rows = getRows_(draftsSheet);
  let logged = 0;

  rows.forEach(({ rowIndex, row }) => {
    if (row.channel !== "Instagram DM") return;
    if (row.approval_status === "Approved" && row.send_status === "Sent manually") {
      if (!row.sent_at) {
        draftsSheet.getRange(rowIndex, 11).setValue(now_());
        logged += 1;
      }
    }
  });

  SpreadsheetApp.getActive().toast(`Logged ${logged} Instagram sends.`);
}

function buildAuditPrompt_(row) {
  return `
You are Xello Media's outbound research agent. Write compliant, specific B2B outreach for a UK renovation growth agency.

Target company:
- Name: ${row.company_name}
- Service type: ${row.service_type}
- Area: ${row.area}
- Website: ${row.website || "unknown"}
- Phone: ${row.phone || "unknown"}
- Rating: ${row.rating || "unknown"}
- Reviews: ${row.review_count || "unknown"}

Xello offer:
- £1,500/month management plus client ad spend
- Website conversion improvements
- Meta ads for local homeowner enquiries
- Social media growth support
- Lead tracking and follow-up process
- Free growth audit as the first CTA

Return strict JSON only with these keys:
{
  "lead_score": number from 1-100,
  "website_findings": "short practical observation",
  "social_findings": "short practical observation even if unknown",
  "growth_opportunity": "why this company may benefit",
  "score_reasoning": "one sentence",
  "email_subject": "short subject",
  "email_message": "plain-text cold email under 120 words with opt-out style ending",
  "follow_up_email": "plain-text follow-up under 80 words",
  "instagram_dm": "friendly DM under 55 words"
}
Do not claim guaranteed results. Do not invent fake case studies. Do not say you inspected pages you cannot access.`;
}

function callOpenAi_(apiKey, prompt) {
  const payload = {
    model: CONFIG.model,
    input: [
      {
        role: "user",
        content: [{ type: "input_text", text: prompt }],
      },
    ],
    text: { format: { type: "json_object" } },
  };

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/responses", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: `Bearer ${apiKey}` },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  if (response.getResponseCode() >= 300) {
    throw new Error(`OpenAI error: ${response.getContentText()}`);
  }

  const json = JSON.parse(response.getContentText());
  const text = extractOpenAiText_(json);
  const usage = json.usage || {};
  return {
    text,
    inputTokens: Number(usage.input_tokens || 0),
    outputTokens: Number(usage.output_tokens || 0),
  };
}

function extractOpenAiText_(json) {
  if (json.output_text) return json.output_text;
  const output = json.output || [];
  for (const item of output) {
    const content = item.content || [];
    for (const c of content) {
      if (c.text) return c.text;
    }
  }
  return "{}";
}

function estimateOpenAiCostGbp_(inputTokens, outputTokens) {
  // gpt-5-mini standard pricing from OpenAI pricing page: $0.25 / 1M input, $2.00 / 1M output.
  const usd = (inputTokens / 1000000) * 0.25 + (outputTokens / 1000000) * 2.0;
  return Number((usd * 0.8).toFixed(5));
}

function requireSpendRoom_() {
  const todaySpend = getTodaySpend_();
  if (todaySpend >= CONFIG.dailySpendLimitGbp) {
    throw new Error(`Daily spend limit reached: £${todaySpend.toFixed(2)} / £${CONFIG.dailySpendLimitGbp.toFixed(2)}`);
  }
}

function getTodaySpend_() {
  const spendSheet = getSheet_(SHEETS.spend);
  return getRows_(spendSheet).reduce((total, item) => {
    const date = String(item.row.timestamp || "");
    if (date.slice(0, 10) === now_().slice(0, 10)) {
      return total + Number(item.row.estimated_cost_gbp || 0);
    }
    return total;
  }, 0);
}

function logSpend_(provider, action, modelOrApi, inputTokens, outputTokens, costGbp, notes) {
  getSheet_(SHEETS.spend).appendRow([now_(), provider, action, modelOrApi, inputTokens, outputTokens, costGbp, notes || ""]);
}

function seedSettings_() {
  const settings = getSheet_(SHEETS.settings);
  if (settings.getLastRow() > 1) return;
  settings.appendRow(["Target areas", CONFIG.areas.join(", "), "Edit CONFIG.areas in Apps Script for now."]);
  settings.appendRow(["Target services", CONFIG.services.join(", "), "Edit CONFIG.services in Apps Script for now."]);
  settings.appendRow(["Offer", "£1,500/month + client ad spend", "90-day minimum recommended."]);
  settings.appendRow(["Primary CTA", "Free growth audit", "Used in outreach drafts."]);
}

function finishScan_(added) {
  SpreadsheetApp.getActive().toast(`Added ${added} new prospects.`);
}

function getExistingKeys_() {
  const keys = {};
  getRows_(getSheet_(SHEETS.prospects)).forEach(({ row }) => {
    keys[`${row.company_name}|${row.website}`.toLowerCase()] = true;
  });
  return keys;
}

function hasDraft_(prospectId) {
  return getRows_(getSheet_(SHEETS.drafts)).some(({ row }) => row.prospect_id === prospectId);
}

function isDoNotContact_(company, website, email) {
  const needle = `${company}|${website}|${email}`.toLowerCase();
  return getRows_(getSheet_(SHEETS.dnc)).some(({ row }) => {
    const haystack = `${row.company_name}|${row.website}|${row.email}`.toLowerCase();
    return haystack && needle && (haystack.includes(company.toLowerCase()) || (email && haystack.includes(email.toLowerCase())));
  });
}

function addSignature_(message) {
  const booking = CONFIG.calendlyUrl ? `\n\nBook a time here: ${CONFIG.calendlyUrl}` : "";
  return `${message}${booking}\n\nSam\nXello Media\nsam@xellomedia.co.uk\n\nIf this is not relevant, no problem. Reply and I will not follow up.`;
}

function fetchJson_(url) {
  const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  if (response.getResponseCode() >= 300) {
    throw new Error(`Fetch failed: ${response.getContentText()}`);
  }
  return JSON.parse(response.getContentText());
}

function getRows_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0];
  return values.slice(1).map((row, i) => {
    const item = {};
    headers.forEach((header, index) => {
      item[header] = row[index];
    });
    return { rowIndex: i + 2, row: item };
  });
}

function indexRows_(sheet, key) {
  const index = {};
  getRows_(sheet).forEach(({ row }) => {
    index[row[key]] = row;
  });
  return index;
}

function getSheet_(name) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(name);
  if (!sheet) throw new Error(`Missing sheet: ${name}. Run setupXelloSheets first.`);
  return sheet;
}

function getRequiredProp_(key) {
  const value = getProp_(key, "");
  if (!value) throw new Error(`Missing script property: ${key}`);
  return value;
}

function getProp_(key, fallback) {
  return PropertiesService.getScriptProperties().getProperty(key) || fallback;
}

function makeId_(prefix) {
  return `${prefix}_${Utilities.getUuid().slice(0, 8)}`;
}

function safeJson_(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return {};
  }
}

function clean_(value) {
  return value === undefined || value === null ? "" : String(value).trim();
}

function now_() {
  return new Date().toISOString();
}
