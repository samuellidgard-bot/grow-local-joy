const defaultData = {
  prospects: [
    { company: "Brighton Build & Renovate", area: "Brighton", service: "Extensions", score: 91, status: "Warm Reply", nextAction: "Send audit summary" },
    { company: "Hove Kitchen Studio", area: "Hove", service: "Kitchens", score: 87, status: "Call Booked", nextAction: "Prepare call notes" },
    { company: "Worthing Loft Co.", area: "Worthing", service: "Lofts", score: 84, status: "AI Drafted", nextAction: "Approve email" },
    { company: "Lewes Design Build", area: "Lewes", service: "Full refurb", score: 82, status: "Contacted", nextAction: "Manual Instagram DM" },
    { company: "Shoreham Renovation Ltd", area: "Shoreham", service: "Bathrooms", score: 78, status: "New Prospect", nextAction: "Create AI audit" },
    { company: "Crawley Extensions", area: "Crawley", service: "Extensions", score: 74, status: "Proposal Sent", nextAction: "Follow up proposal" }
  ],
  drafts: [
    { channel: "Email", company: "Shoreham Renovation Ltd", subject: "Quick growth audit for Shoreham Renovation Ltd", status: "Needs review", message: "I noticed your bathroom renovation work around Shoreham. There may be room to turn more local homeowners into quote enquiries through a stronger website journey and Meta ads." },
    { channel: "Instagram", company: "Hove Kitchen Studio", subject: "DM: saw your recent kitchen projects", status: "Approved", message: "Hi, saw your kitchen work around Hove. We help renovation firms turn local homeowners into quote enquiries using website upgrades, Meta ads and lead tracking." },
    { channel: "Email", company: "Crawley Extensions", subject: "More local extension quote requests", status: "Needs edit", message: "I came across your extension work in Crawley and had a couple of ideas for improving your quote-request funnel." }
  ],
  outreachFeedback: [
    { company: "Example draft", channel: "Email", feedback: "Sounds real", lesson: "Keep first touches light, specific and easy to reply to.", createdAt: "Demo" },
    { company: "Example draft", channel: "Instagram", feedback: "Too salesy", lesson: "Reduce pitch language and ask one simple question instead.", createdAt: "Demo" }
  ],
  companyResearch: [
    { company: "Hove Kitchen Studio", hook: "Positioned around kitchen work in Hove with strong visual project potential.", painPoint: "Could turn more project visitors into quote enquiries.", opportunity: "Lead with website conversion and Meta retargeting.", angle: "Free growth audit focused on quote journey." },
    { company: "Worthing Loft Co.", hook: "Loft conversion firms usually have high-ticket projects and clear local demand.", painPoint: "Trust signals and follow-up speed can decide who gets the quote.", opportunity: "Audit landing page, proof and enquiry flow.", angle: "Free audit for more qualified loft enquiries." }
  ],
  websiteAudits: [
    { company: "Brackenborough Lakes Resort", url: "https://brackenboroughlakesresort.co.uk/lodge-holiday-homes-for-sale/", score: 78, scores: { cta: 72, mobile: 76, trust: 84, form: 68, speed: 74, offer: 92 }, status: "Needs Review", summary: "Strong lifestyle product and proof, but the page should make the main viewing/brochure action clearer and move lead capture higher.", wins: "Clear lodge pricing, strong setting, testimonials, product range and appointment route.", issues: "Too many competing CTAs, enquiry form too low, open day could be more visible, brochure form may fail if JavaScript blocks.", improvements: "Use one main CTA, add a short top form, split lifestyle vs investment buyers, add mobile sticky call/viewing button.", outreachAngle: "Compliment the strength of the lodge offer, then ask if they are trying to increase booked viewings from the page.", createdAt: "Demo" }
  ],
  socialAudits: [
    { company: "Hove Kitchen Studio", platform: "Instagram", score: 74, status: "Practice", strengths: "Visual service with strong before/after potential.", gaps: "Needs clearer profile CTA, more project proof and more local homeowner-facing hooks.", nextAction: "Plan Reels around design reveal, detail close-ups and homeowner problem/solution stories." }
  ],
  contentIdeas: [
    { company: "Hove Kitchen Studio", hook: "See how a tired kitchen becomes the room everyone gathers in.", filming: "Before/after walk-through, close-ups of finishes, owner explaining design choices.", adAngle: "Local Hove kitchen transformations with a clear quote CTA.", talkingPoints: "Craftsmanship, local homes, stress-free process, finished detail." },
    { company: "Worthing Loft Co.", hook: "Turn unused roof space into a proper bedroom, office or studio.", filming: "Drone exterior, stairs reveal, natural light shots, homeowner problem/solution story.", adAngle: "Worthing loft conversions for families needing more space.", talkingPoints: "Space, planning, value, minimal disruption." }
  ],
  contentBriefs: [
    { company: "Hove Kitchen Studio", title: "Kitchen transformation Reel", hook: "From tired kitchen to the room everyone gathers in.", format: "30-second Reel / Meta ad", scenes: "Before shot, detail close-ups, reveal, owner or fitter talking through one design decision.", cta: "Book a free kitchen quote conversation.", source: "Company Research Agent", status: "Needs Review" }
  ],
  xelloSocial: [
    { platform: "Instagram Reels", pillar: "Marketing education", hook: "3 reasons renovation companies lose leads from their website", format: "Talking-head Reel with captions", script: "Open with the problem, show 3 fixes, end with 'I’m testing this with local Brighton renovation firms.'", cta: "Follow for local marketing breakdowns", status: "Planned" },
    { platform: "TikTok", pillar: "Founder journey", hook: "I’m building a Brighton marketing agency from zero", format: "Day-in-the-life / behind the scenes", script: "Show outreach, research, filming kit and why local businesses need better lead tracking.", cta: "Comment 'audit' if you want me to review a local business", status: "Planned" },
    { platform: "Instagram Carousel", pillar: "Proof building", hook: "What a 14-day local lead test includes", format: "6-slide educational carousel", script: "Site visit, filmed ad, Meta test, tracking, review, next steps.", cta: "Save this if you run a local service business", status: "Planned" }
  ],
  socialCalendar: [
    { day: "Monday", platform: "Instagram Reel", focus: "Marketing education", task: "Film one practical tip for renovation companies, using captions and a clear example.", status: "Planned" },
    { day: "Wednesday", platform: "TikTok", focus: "Founder journey", task: "Show behind the scenes of building Xello: prospect research, CRM, filming kit or learning from calls.", status: "Planned" },
    { day: "Friday", platform: "Instagram Reel", focus: "Proof building", task: "Break down a website, advert or lead tracking improvement without naming private client data.", status: "Planned" },
    { day: "Sunday", platform: "Carousel", focus: "Authority", task: "Post a simple checklist or mini-guide local businesses can save.", status: "Planned" }
  ],
  contentPillars: [
    { pillar: "Marketing education", goal: "Show expertise with websites, Meta ads, lead tracking and follow-up systems.", examples: "3 website mistakes, what makes a good local ad, how to track leads properly." },
    { pillar: "Founder journey", goal: "Make Xello feel human, local and trustworthy while the company is still growing.", examples: "Building from Brighton, learning from calls, preparing filming equipment, honest wins and lessons." },
    { pillar: "Behind the scenes", goal: "Show the quality of the process and equipment before you have lots of public case studies.", examples: "Drone setup, filming checklist, CRM workflow, ad planning process." },
    { pillar: "Local proof", goal: "Build credibility around Brighton/Hove renovation marketing without inventing results.", examples: "Local market observations, anonymised audits, before/after creative concepts, test structure." }
  ],
  outreachTraining: [
    { rule: "First-touch opener", detail: "The first message should start a conversation: one real observation, one light compliment, one very brief line explaining that Xello helps local renovation companies improve online presence and enquiries, then one simple question.", owner: "Outreach Writer" },
    { rule: "Voice", detail: "Write like Sam: direct, friendly, local and human. No corporate agency fluff, no long pitch, no pressure.", owner: "Outreach Writer" },
    { rule: "Personalisation", detail: "Use the company research hook before writing. Mention one specific observation when available, but keep it natural and short.", owner: "Company Research Agent" },
    { rule: "Cold CTA", detail: "Ask a low-friction question or offer a quick chat only if it feels natural. Do not explain the whole offer in the first touch.", owner: "Sales" },
    { rule: "Proof Offer", detail: "Only after they reply, explain the capped 14-day local lead test: one site visit, one filmed advert, one Meta test, lead tracking and one review.", owner: "Sales" },
    { rule: "Trial Boundary", detail: "The company covers Meta ad spend. Never say Xello covers ad spend. The test is capped and does not include unlimited edits, full management or website rebuild work.", owner: "Operations" },
    { rule: "Retainer Timing", detail: "Only discuss the full retainer after the test has shown enough value or clear learning.", owner: "Sales" },
    { rule: "Compliance", detail: "No fake results, fake case studies, guaranteed outcomes or automatic sending.", owner: "Xello" }
  ],
  replies: [
    { company: "Hove Kitchen Studio", channel: "Email", type: "Warm question", summary: "Thanks Sam, appreciate that. Most of our work is referrals at the moment but we would like more consistent website or Instagram enquiries. What did you have in mind?", nextAction: "Explain 14-day test and ask for 10-minute call", status: "Warm Reply", createdAt: "Demo" },
    { company: "Brighton Build & Renovate", channel: "Instagram DM", type: "Interested", summary: "Cheers Sam. Instagram brings a few people in but nothing consistent. What would the process actually involve?", nextAction: "Explain 14-day test and ask for 10-minute call", status: "Follow Up", createdAt: "Demo" }
  ],
  replyResponses: [
    { company: "Hove Kitchen Studio", channel: "Email", type: "Interested", status: "Needs review", message: "Thanks for getting back to me. The idea would be a simple 14-day local lead test: I come to site, film one strong advert, help test it on Meta, track the enquiries and then review what happened with you. You would only cover the ad spend. Would you be open to a quick 10-minute call this week so I can explain it properly?", nextAction: "Ask for 10-minute call" },
    { company: "Brighton Build & Renovate", channel: "Instagram DM", type: "Warm question", status: "Needs review", message: "Yes, exactly. The idea is to keep it small first: one site visit, one filmed advert, one simple Meta test and clear lead tracking over 14 days. You would cover the ad spend, and we would review whether it brought in useful enquiries. Want to jump on a quick 10-minute call and I’ll explain it?", nextAction: "Send if approved" }
  ],
  calls: [
    { company: "Hove Kitchen Studio", contact: "Owner", date: "Next Tuesday", type: "Growth audit", outcome: "Booked", nextStep: "Prepare website and Meta audit notes", value: 1500, status: "Call Booked" }
  ],
  clients: [
    { company: "First client target", retainer: "£1,500/mo", status: "Not won yet", note: "Goal: close first 3 clients from audit calls." },
    { company: "Client delivery checklist", retainer: "Template", status: "Ready", note: "Meta access, website access, service areas, budget, lead tracking." },
    { company: "Reporting cadence", retainer: "Weekly", status: "Ready", note: "Leads, CPL, booked quotes, follow-up speed, next tests." }
  ],
  spend: [
    { item: "OpenAI audits + drafts", cost: 1.14, limit: "£10 starting balance" },
    { item: "Prospect search API", cost: 0.7, limit: "Keep batches small" },
    { item: "Email sending", cost: 0, limit: "Provider/inbox based" }
  ],
  agents: [
    { name: "Prospect Scanner", purpose: "Finds renovation companies across Brighton, Hove and Sussex.", status: "Running", currentTask: "Scanning builders and extension firms in Brighton", progress: 68, lastRun: "Today 09:20", nextRun: "Today 16:00", cost: 0.42, outputs: 37 },
    { name: "Company Research Agent", purpose: "Builds personalised hooks and pain points for each company before outreach is written.", status: "Queued", currentTask: "Waiting for new prospects to research", progress: 10, lastRun: "Not run yet", nextRun: "After prospect scan", cost: 0, outputs: 0 },
    { name: "Content Creation Agent", purpose: "Turns company research into advert hooks, filming plans and Meta content ideas.", status: "Queued", currentTask: "Waiting for researched companies", progress: 10, lastRun: "Not run yet", nextRun: "After company research", cost: 0, outputs: 0 },
    { name: "Xello Social Growth Agent", purpose: "Plans Instagram and TikTok content to grow Xello's credibility and following.", status: "Queued", currentTask: "Planning founder-led marketing content", progress: 10, lastRun: "Not run yet", nextRun: "Weekly", cost: 0, outputs: 0 },
    { name: "Website Audit Agent", purpose: "Checks prospect websites for conversion gaps and trust signals.", status: "Queued", currentTask: "Waiting for new prospect batch", progress: 20, lastRun: "Yesterday 17:10", nextRun: "After scan", cost: 0.31, outputs: 18 },
    { name: "Social Audit Agent", purpose: "Reviews Instagram activity and content opportunities.", status: "Idle", currentTask: "No pending social audits", progress: 0, lastRun: "Yesterday 15:40", nextRun: "Manual trigger", cost: 0.18, outputs: 12 },
    { name: "Outreach Writer", purpose: "Drafts personalised emails, follow-ups and Instagram DMs.", status: "Waiting Approval", currentTask: "42 drafts need review", progress: 100, lastRun: "Today 10:05", nextRun: "After approvals", cost: 0.56, outputs: 42 },
    { name: "Reply Triage Agent", purpose: "Categorises replies and suggests the next step.", status: "Complete", currentTask: "Tagged 8 warm replies", progress: 100, lastRun: "Today 11:30", nextRun: "Every morning", cost: 0.08, outputs: 14 },
    { name: "Reporting Agent", purpose: "Summarises pipeline, spend, booked calls and weekly priorities.", status: "Idle", currentTask: "Weekly report due Friday", progress: 0, lastRun: "Not run yet", nextRun: "Friday 09:00", cost: 0, outputs: 0 }
  ],
  agentTasks: [
    { task: "Find 25 new Brighton/Hove renovation prospects", agent: "Prospect Scanner", related: "Prospects", status: "Running", priority: "High", progress: 68, cost: 0.42, approval: "No" },
    { task: "Draft outreach for top 10 scored prospects", agent: "Outreach Writer", related: "Outreach Drafts", status: "Waiting Approval", priority: "High", progress: 100, cost: 0.56, approval: "Yes" },
    { task: "Audit websites for new kitchen and loft firms", agent: "Website Audit Agent", related: "AI Audits", status: "Queued", priority: "Medium", progress: 20, cost: 0.31, approval: "No" },
    { task: "Summarise warm replies and next steps", agent: "Reply Triage Agent", related: "Replies", status: "Complete", priority: "High", progress: 100, cost: 0.08, approval: "No" }
  ],
  agentLogs: [
    { time: "11:30", agent: "Reply Triage Agent", event: "Tagged 4 replies as warm and 2 as not now." },
    { time: "10:05", agent: "Outreach Writer", event: "Generated 42 drafts and moved them to approval queue." },
    { time: "09:20", agent: "Prospect Scanner", event: "Started Brighton/Hove scan for builders, lofts and extensions." },
    { time: "08:55", agent: "Spend Guardrail", event: "API spend below daily limit. Processing allowed." }
  ],
  agentOutputs: [
    { agent: "Website Audit Agent", company: "Brackenborough Lakes Resort", type: "Website audit", result: "78/100. Strong offer, clearer CTA and higher lead capture recommended.", nextAction: "Use audit as conversation opener or call prep.", approval: "No", status: "Needs Review", createdAt: "Demo" },
    { agent: "Content Creation Agent", company: "Hove Kitchen Studio", type: "Content brief", result: "Created a kitchen transformation Reel concept from company research.", nextAction: "Use as filming plan if prospect becomes a client.", approval: "No", status: "Needs Review", createdAt: "Demo" }
  ],
  memory: [
    { insight: "Kitchen and extension firms respond best to a website audit angle before Meta ads are mentioned.", source: "Warm replies", confidence: 78, action: "Lead with website conversion gaps." },
    { insight: "Brighton and Hove prospects need a local, personal tone. Generic agency language gets ignored.", source: "Outreach review", confidence: 72, action: "Mention exact town and service." },
    { insight: "Instagram DMs should stay short and manual-assisted to avoid account risk.", source: "Operating rule", confidence: 90, action: "Queue DMs for human sending." },
    { insight: "A free growth audit is easier to sell than a full retainer in the first message.", source: "Sales strategy", confidence: 86, action: "CTA remains free audit." }
  ],
  knowledge: [
    { title: "Entry Offer", detail: "Start with a capped 14-day local lead test: site visit, filmed advert, Meta campaign, lead tracking and review. Company covers ad spend.", owner: "Xello" },
    { title: "Retainer Path", detail: "After proof is created, pitch £1,500/month plus ad spend for website management, Meta ads, social growth, lead tracking and follow-up.", owner: "Xello" },
    { title: "Target Market", detail: "Renovation companies, builders, extensions, lofts, kitchens, bathrooms and design-build firms across Sussex.", owner: "Prospect Scanner" },
    { title: "Personalisation Layer", detail: "Company Research Agent creates hooks, pain points and outreach angles before the Outreach Writer drafts.", owner: "Company Research Agent" },
    { title: "Content Creation Layer", detail: "Content Creation Agent turns company research into filming angles, advert hooks and Meta content ideas.", owner: "Content Creation Agent" },
    { title: "Xello Social Growth", detail: "Xello Social Growth Agent plans Instagram and TikTok content to build credibility, followers and authority for the agency.", owner: "Xello Social Growth Agent" },
    { title: "Compliance Rule", detail: "No fake guarantees. Clear Xello identity. Respect do-not-contact and approval-first sending.", owner: "Compliance" },
    { title: "Sales CTA", detail: "First message starts a conversation with a compliment, one brief line explaining what Xello helps with and a simple question. The 14-day test is explained after they reply or on the call.", owner: "Outreach Writer" }
  ],
  playbooks: [
    { name: "Prospect Research", steps: "Find company, identify service, check area, score lead need, avoid poor-fit businesses.", agent: "Prospect Scanner" },
    { name: "Company Research", steps: "Check available website/social notes, create a safe personal hook, identify pain point, choose outreach angle.", agent: "Company Research Agent" },
    { name: "Content Creation", steps: "Use company research to choose what to film, what hook to open with and how to frame the 14-day test ad.", agent: "Content Creation Agent" },
    { name: "Xello Social Growth", steps: "Plan weekly Reels/TikToks around founder journey, marketing tips, local lead generation, behind-the-scenes and proof-building content.", agent: "Xello Social Growth Agent" },
    { name: "Website Audit", steps: "Check CTA clarity, quote form, mobile experience, trust signals, tracking and landing page quality.", agent: "Website Audit Agent" },
    { name: "Outreach Writing", steps: "Use one specific observation, a light compliment and one easy question. Avoid pitching the full offer until they reply.", agent: "Outreach Writer" },
    { name: "14-Day Lead Test", steps: "One filming visit, one edited advert, one Meta campaign, lead tracking and one results review. Company covers ad spend.", agent: "Sales" },
    { name: "Reply Handling", steps: "Classify reply, suggest next response, book audit if warm, suppress if not relevant.", agent: "Reply Triage Agent" },
    { name: "Client Onboarding", steps: "Get Meta access, website access, assets, budget, service areas, lead routing and reporting cadence.", agent: "Client Onboarding Agent" },
    { name: "Weekly Reporting", steps: "Summarise leads, cost, booked calls, client follow-up speed, risks and next tests.", agent: "Reporting Agent" }
  ],
  experiments: [
    { name: "Website audit first", hypothesis: "Lead with website conversion gaps instead of Meta ads to increase replies.", status: "Running", result: "8 warm replies from 96 sends", learning: "Keep testing with kitchen and extension firms." },
    { name: "Short Instagram DM", hypothesis: "Short local DMs get more replies than long audit pitches.", status: "Planned", result: "Not started", learning: "Run manually with 20 prospects." },
    { name: "Brighton vs Worthing", hypothesis: "Brighton/Hove firms have higher budget but more competition.", status: "Running", result: "Brighton has stronger lead scores", learning: "Prioritise high-ticket areas first." }
  ],
  delivery: [
    { client: "First Touch Innovations", stage: "14-day test", checklist: "Site visit booked, filming plan ready, Meta ad spend to be confirmed by client.", health: "Demo", adSpend: 100, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "To schedule", contentStatus: "Script planned", campaignStatus: "Not launched", nextReview: "After test", nextAction: "Confirm filming date and ad spend boundary" },
    { client: "New Client Template", stage: "Onboarding", checklist: "Meta access, website access, photos, testimonials, offer, ad budget, lead notifications.", health: "Ready", adSpend: 0, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "Not set", contentStatus: "Waiting", campaignStatus: "Waiting", nextReview: "Not set", nextAction: "Collect access and offer details" },
    { client: "Campaign Launch", stage: "Build", checklist: "Landing page, lead form, conversion tracking, campaign structure, first creatives.", health: "Template", adSpend: 0, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "Not needed", contentStatus: "Create first advert", campaignStatus: "Draft", nextReview: "Launch + 3 days", nextAction: "Build first campaign checklist" },
    { client: "Weekly Reporting", stage: "Retain", checklist: "Leads, CPL, booked quotes, follow-up speed, best ads, next actions.", health: "Template", adSpend: 0, leads: 0, cpl: 0, bookedCalls: 0, siteVisit: "Complete", contentStatus: "Ongoing", campaignStatus: "Optimising", nextReview: "Every Friday", nextAction: "Prepare client summary and retainer next steps" }
  ],
  testJourney: [
    { stage: "1. Prospect added", owner: "Prospect Scanner", status: "Complete", detail: "First Touch Innovations is tracked as the test company so the system can be tested safely." },
    { stage: "2. Company research", owner: "Company Research Agent", status: "Complete", detail: "Research creates a personalised hook, likely pain point and outreach angle." },
    { stage: "3. Outreach drafted", owner: "Outreach Writer", status: "Complete", detail: "Email/Instagram draft is created for review, but nothing sends automatically." },
    { stage: "4. Reply logged", owner: "Reply Triage Agent", status: "Complete", detail: "A demo reply shows how warm interest appears in the hub." },
    { stage: "5. Call booked", owner: "Sales", status: "Ready", detail: "The 10-minute call is used to introduce the 14-day test, not the full retainer." },
    { stage: "6. 14-day test", owner: "Delivery", status: "Planned", detail: "Site visit, filming, Meta test, lead tracking and review. Client covers ad spend." },
    { stage: "7. Retainer follow-up", owner: "Sales", status: "Planned", detail: "Only discuss the £1,500/month retainer after value or clear learning is proven." }
  ],
  demoProof: [
    { title: "Pipeline proof", detail: "The company moves through every CRM stage without needing real outreach." },
    { title: "Agent proof", detail: "Each AI agent has a clear job, input, output and approval boundary." },
    { title: "Delivery proof", detail: "The 14-day test has a visible checklist, budget boundary and review step." },
    { title: "Sales proof", detail: "The retainer is positioned after trust is built, not in the first cold message." }
  ],
  risks: [
    { issue: "GitHub/Vercel deployment friction", severity: "Medium", fix: "Keep standalone dashboard local until pushing flow is simple." },
    { issue: "Instagram automation risk", severity: "High", fix: "Use AI-drafted but human-sent DMs." },
    { issue: "OpenAI/API spend", severity: "Low", fix: "Batch prospects and stop at daily limit." },
    { issue: "Fake proof risk", severity: "High", fix: "Use concept visuals honestly and build real case studies from first clients." }
  ],
  finance: [
    { metric: "MRR", value: "£0", note: "First target is 3 clients = £4,500/mo." },
    { metric: "Pipeline", value: "£7,500/mo", note: "Based on booked/proposal opportunities." },
    { metric: "Tool/API Costs", value: "£1.84", note: "Early testing spend only." },
    { metric: "Target CAC", value: "< £300", note: "Keep prospecting and AI costs controlled." }
  ],
  ceoBrief: [
    { title: "This week", detail: "Prioritise approval of outreach drafts and book the first 10-minute intro calls." },
    { title: "Best opportunity", detail: "Kitchen, extension and loft firms with good project photos but weak quote journeys." },
    { title: "Biggest risk", detail: "Spending too long on systems before speaking to real prospects." },
    { title: "Recommended move", detail: "Run 25 prospects, approve 10 strong messages, book calls, then offer the capped 14-day lead test." }
  ]
};

const storageKey = "xello-crm-dashboard-data";
const apiUrlKey = "xello-crm-dashboard-api-url";
const activeButtonKeys = new Set();
const buttonFlashTimers = new Map();
let state = loadState();
let liveMode = Boolean(localStorage.getItem(apiUrlKey));

const agentDetails = {
  "Prospect Scanner": {
    purpose: "Finds renovation, building and home improvement companies across the target locations and turns them into structured CRM prospects.",
    responsibilities: [
      "Searches Brighton, Hove and surrounding areas for relevant companies.",
      "Captures company name, location, service, website and phone where available.",
      "Scores each lead so the team knows who is worth prioritising.",
      "Avoids duplicates and respects the Do Not Contact list."
    ],
    inputs: "Target areas, target services, Google Places data, existing Prospects and Do Not Contact rows.",
    outputs: "New Prospect rows with lead scores, source notes and next actions.",
    guardrails: "Adds prospects only. It does not contact anyone or send messages."
  },
  "Company Research Agent": {
    purpose: "Researches each prospect so the Outreach Writer can sound specific, local and human.",
    responsibilities: [
      "Turns raw prospect rows into useful context before writing.",
      "Creates a personalised hook, likely pain point and best outreach angle.",
      "Uses website notes, service, area and existing CRM notes when available.",
      "Feeds the Outreach Writer so messages avoid generic agency spam."
    ],
    inputs: "Prospect name, area, service, website, Instagram, notes, lead score and existing company research rows.",
    outputs: "Company Research rows with hook, pain point, opportunity and outreach angle.",
    guardrails: "Research only. It does not contact the company or invent proof."
  },
  "Content Creation Agent": {
    purpose: "Turns Company Research rows into practical content and ad ideas for each prospect or client.",
    responsibilities: [
      "Uses research hooks, pain points and opportunities to shape filming ideas.",
      "Creates advert hooks for the 14-day local lead test.",
      "Suggests what Sam should film on site with camera, drone and microphones.",
      "Keeps content specific to the company instead of generic renovation ads."
    ],
    inputs: "Company Research rows, service type, area, prospect notes, content performance and client goals.",
    outputs: "Filming angles, advert hooks, Meta ad ideas, talking points and content briefs.",
    guardrails: "Ideas only. It does not post content or run ads without human approval."
  },
  "Xello Social Growth Agent": {
    purpose: "Grows Xello Media's own Instagram and TikTok presence with credible founder-led marketing content.",
    responsibilities: [
      "Plans Reels, TikToks, carousels and short-form content ideas for Xello.",
      "Creates marketing tips that show Xello understands lead generation, websites, Meta ads and tracking.",
      "Turns Sam's founder story, local Brighton/Hove angle and filming equipment into trust-building content.",
      "Suggests hooks, scripts, CTAs and weekly posting plans."
    ],
    inputs: "Xello offer, target market, founder story, available equipment, trends/manual research notes and content performance.",
    outputs: "Xello Social Plan rows with platform, pillar, hook, format, script, CTA and status.",
    guardrails: "Planning only. It does not post, comment, DM or represent Xello publicly without human approval."
  },
  "Website Audit Agent": {
    purpose: "Reviews a prospect's website and identifies practical ways Xello could improve conversion into quote enquiries.",
    responsibilities: [
      "Checks whether the website has clear calls to action.",
      "Looks for weak trust signals, unclear offers and poor mobile journeys.",
      "Creates audit angles that can be used in outreach and sales calls.",
      "Flags website gaps that support the £1,500/month offer."
    ],
    inputs: "Prospect website, service type, location, notes and current pipeline stage.",
    outputs: "Audit notes, improvement ideas, sales angles and call preparation points.",
    guardrails: "No fake claims, no invented results and no guarantees."
  },
  "Social Audit Agent": {
    purpose: "Reviews Instagram and social presence to find content gaps, proof opportunities and DM angles.",
    responsibilities: [
      "Checks if the company posts recent project work.",
      "Looks for weak profile positioning or missing enquiry prompts.",
      "Identifies content ideas for renovation, roofing, kitchen and extension companies.",
      "Prepares short observations for manual-assisted Instagram outreach."
    ],
    inputs: "Instagram handle, company name, service, location and existing notes.",
    outputs: "Social audit notes, DM context, content opportunities and follow-up ideas.",
    guardrails: "Instagram outreach stays approval-first and human-sent."
  },
  "Outreach Writer": {
    purpose: "Writes personalised email and Instagram draft messages that offer a free growth audit.",
    responsibilities: [
      "Turns prospects into email and DM drafts.",
      "Keeps copy short, local and specific to the company.",
      "Uses Sam from Xello Media as the sender.",
      "Creates follow-up copy without claiming guaranteed results."
    ],
    inputs: "Prospect data, lead score, website/social notes, offer details and approval rules.",
    outputs: "Rows in Outreach Drafts for review, edit, approval or manual sending.",
    guardrails: "Only drafts messages. It does not send emails or DMs automatically."
  },
  "Reply Triage Agent": {
    purpose: "Classifies replies and tells you what the next best action should be.",
    responsibilities: [
      "Labels replies as interested, objection, not now, booked call or not suitable.",
      "Suggests the next follow-up or call action.",
      "Moves warm leads forward in the pipeline.",
      "Creates clean summaries so you do not lose context."
    ],
    inputs: "Replies, prospect history, outreach status and current pipeline stage.",
    outputs: "Reply rows, suggested next actions, call tasks and updated prospect statuses.",
    guardrails: "It can suggest replies, but sending stays approval-first."
  },
  "Reporting Agent": {
    purpose: "Summarises what is happening in the agency so you can see the business clearly each week.",
    responsibilities: [
      "Tracks prospects, drafts, replies, calls, clients and spend.",
      "Creates weekly CEO brief rows.",
      "Flags risks like API spend, weak follow-up or too many unreviewed drafts.",
      "Turns messy activity into simple decisions."
    ],
    inputs: "All CRM tabs, spend data, replies, calls, client rows and risks.",
    outputs: "CEO Brief rows, dashboard metrics, risk notes and weekly priorities.",
    guardrails: "Reports and recommends. It does not make financial commitments or send external messages."
  }
};

function loadState() {
  const saved = localStorage.getItem(storageKey);
  const data = saved ? safeParse(saved) : structuredClone(defaultData);
  const merged = { ...structuredClone(defaultData), ...data };
  merged.agents = mergeByName(merged.agents || [], defaultData.agents);
  merged.delivery = mergeByField(merged.delivery || [], defaultData.delivery, "client");
  merged.xelloSocial = mergeByField(merged.xelloSocial || [], defaultData.xelloSocial, "hook");
  merged.outreachFeedback = merged.outreachFeedback || defaultData.outreachFeedback;
  merged.replyResponses = merged.replyResponses || defaultData.replyResponses;
  merged.companyResearch = merged.companyResearch || defaultData.companyResearch;
  merged.websiteAudits = mergeByField(merged.websiteAudits || [], defaultData.websiteAudits, "url");
  merged.socialAudits = mergeByField(merged.socialAudits || [], defaultData.socialAudits, "company");
  merged.contentIdeas = merged.contentIdeas || defaultData.contentIdeas;
  merged.contentBriefs = mergeByField(merged.contentBriefs || [], defaultData.contentBriefs, "title");
  merged.agentOutputs = merged.agentOutputs || defaultData.agentOutputs;
  merged.socialCalendar = merged.socialCalendar || defaultData.socialCalendar;
  merged.contentPillars = merged.contentPillars || defaultData.contentPillars;
  merged.testJourney = merged.testJourney || defaultData.testJourney;
  merged.demoProof = merged.demoProof || defaultData.demoProof;
  merged.outreachTraining = merged.outreachTraining || defaultData.outreachTraining;
  return merged;
}

function safeParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return structuredClone(defaultData);
  }
}

function mergeByName(currentRows, defaultRows) {
  const rows = [...currentRows];
  const existing = new Set(rows.map((row) => row.name));
  defaultRows.forEach((row) => {
    if (!existing.has(row.name)) rows.push(row);
  });
  return rows;
}

function mergeByField(currentRows, defaultRows, field) {
  const rows = [...currentRows];
  const existing = new Set(rows.map((row) => row[field]));
  defaultRows.forEach((row) => {
    if (!existing.has(row[field])) rows.push(row);
  });
  return rows;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function displayDate() {
  return new Date().toLocaleString([], { dateStyle: "short", timeStyle: "short" });
}

function domainFromUrl(url = "") {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return String(url).replace(/^https?:\/\//, "").split("/")[0] || "website";
  }
}

function titleFromDomain(domain = "") {
  return domain
    .split(".")[0]
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getButtonContext(button) {
  const card = button.closest(".draft-card, .panel, .pipeline-card, .client-card, .spend-card, .metric-card, .feedback-card");
  const heading = card?.querySelector("h2, h3, strong, .label")?.textContent?.trim();
  return heading ? heading.toLowerCase().replace(/\s+/g, "-").slice(0, 80) : "";
}

function getButtonKey(button) {
  if (button.id) return `id:${button.id}`;

  const datasetParts = Object.entries(button.dataset)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}:${value}`)
    .join("|");

  const text = button.textContent.trim().toLowerCase().replace(/\s+/g, "-").slice(0, 80);
  const context = getButtonContext(button);
  return [context, datasetParts || text].filter(Boolean).join("::") || `button:${text}`;
}

function markButtonClicked(button) {
  if (!button) return;
  const key = getButtonKey(button);
  activeButtonKeys.add(key);
  button.classList.add("was-clicked", "click-flash");
  scheduleButtonReset(key, button);
}

function scheduleButtonReset(key, button, delay = 420) {
  if (!key) return;
  window.clearTimeout(buttonFlashTimers.get(key));
  const timer = window.setTimeout(() => {
    activeButtonKeys.delete(key);
    button?.classList.remove("was-clicked", "click-flash");
    applyClickedButtonStates();
    buttonFlashTimers.delete(key);
  }, delay);
  buttonFlashTimers.set(key, timer);
}

function applyClickedButtonStates() {
  document.querySelectorAll("button").forEach((button) => {
    const active = activeButtonKeys.has(getButtonKey(button));
    button.classList.toggle("was-clicked", active);
    button.classList.toggle("click-flash", active);
  });
}

function getApiUrl() {
  return localStorage.getItem(apiUrlKey) || "";
}

function saveApiUrl(url) {
  localStorage.setItem(apiUrlKey, url.trim());
  liveMode = false;
}

function setConnectionStatus(message, connected = false) {
  const bar = document.getElementById("connectionBar");
  const text = document.getElementById("connectionText");
  if (!bar || !text) return;
  bar.classList.toggle("connected", connected);
  text.textContent = message;
}

function buildActionUrl(action, params = {}) {
  const apiUrl = getApiUrl();
  const url = new URL(apiUrl);
  url.searchParams.set("action", action);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
  });
  return url;
}

function callSheetAction(action, params = {}, pendingMessage = "Working in Google Sheets...") {
  const apiUrl = getApiUrl();
  if (!apiUrl) {
    setConnectionStatus("Connect your Google Sheet before running dashboard actions.", false);
    openSheetDialog();
    return;
  }

  const callbackName = `xelloActionCallback_${Date.now()}`;
  const script = document.createElement("script");
  const url = buildActionUrl(action, params);
  url.searchParams.set("callback", callbackName);
  let finished = false;

  setConnectionStatus(pendingMessage, false);

  window[callbackName] = (payload) => {
    finished = true;
    try {
      if (!payload || payload.ok === false) throw new Error(payload?.message || "Google Sheets action failed.");
      applySheetPayload(payload.snapshot || payload);
      liveMode = true;
      saveState();
      renderAll();
      setConnectionStatus(payload.message || "Google Sheets updated.", true);
    } catch (error) {
      setConnectionStatus(`Action failed: ${error.message}`, false);
    } finally {
      delete window[callbackName];
      script.remove();
    }
  };

  script.onerror = () => {
    finished = true;
    setConnectionStatus("Action failed. Check the Apps Script deployment and access settings.", false);
    delete window[callbackName];
    script.remove();
  };

  setTimeout(() => {
    if (!finished) {
      setConnectionStatus("Still waiting for Google Sheets. Some AI actions can take a few minutes; leave this tab open.", false);
    }
  }, 120000);

  script.src = url.toString();
  document.body.appendChild(script);
}

function money(value) {
  return `£${Number(value).toFixed(2)}`;
}

function statusClass(status) {
  const lowered = String(status).toLowerCase();
  if (lowered.includes("approved") || lowered.includes("won") || lowered.includes("warm") || lowered.includes("booked") || lowered.includes("complete")) return "status hot";
  if (lowered.includes("review") || lowered.includes("edit") || lowered.includes("draft") || lowered.includes("approval") || lowered.includes("queued") || lowered.includes("running")) return "status warning";
  return "status";
}

const reviewStatuses = ["Needs Review", "Approved", "Used", "Archived"];
const statusCollections = new Set(["websiteAudits", "socialAudits", "contentBriefs", "agentOutputs"]);

function normaliseStatus(status, fallback = "Needs Review") {
  const raw = String(status || fallback).trim().toLowerCase();
  if (raw === "ready" || raw === "reviewed" || raw === "practice") return "Needs Review";
  const match = reviewStatuses.find((item) => item.toLowerCase() === raw);
  return match || fallback;
}

function getAuditScores(seed = "") {
  const source = String(seed || "xello").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const score = (offset, base = 72) => Math.max(45, Math.min(94, base + ((source + offset) % 18) - 6));
  return {
    cta: score(3, 72),
    mobile: score(11, 74),
    trust: score(19, 78),
    form: score(29, 68),
    speed: score(37, 73),
    offer: score(43, 80)
  };
}

function averageAuditScore(scores) {
  const values = Object.values(scores || {}).map(Number).filter((value) => Number.isFinite(value));
  if (!values.length) return 70;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function scoreGrid(scores = {}) {
  const labels = {
    cta: "CTA",
    mobile: "Mobile",
    trust: "Trust",
    form: "Lead Form",
    speed: "Speed",
    offer: "Offer"
  };
  return `
    <div class="score-grid">
      ${Object.entries(labels).map(([key, label]) => {
        const value = Number(scores[key] || 0);
        return `
          <div class="score-item">
            <span>${label}</span>
            <strong>${value || "?"}</strong>
            <div class="score-track"><span style="width:${Math.max(4, Math.min(100, value || 0))}%"></span></div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function statusButtons(collection, index, currentStatus) {
  if (!statusCollections.has(collection)) return "";
  const current = normaliseStatus(currentStatus);
  return `
    <div class="status-actions">
      ${reviewStatuses.map((status) => `
        <button class="status-button ${status === current ? "active" : ""}" data-status-collection="${collection}" data-status-index="${index}" data-status-value="${status}">${status}</button>
      `).join("")}
    </div>
  `;
}

function bindStatusButtons() {
  document.querySelectorAll("[data-status-collection]").forEach((button) => {
    button.addEventListener("click", () => {
      const collection = button.dataset.statusCollection;
      const index = Number(button.dataset.statusIndex);
      const status = button.dataset.statusValue;
      if (!statusCollections.has(collection) || !state[collection]?.[index]) return;
      state[collection][index].status = status;
      state[collection][index].updatedAt = displayDate();
      saveState();
      renderAll();
    });
  });
}

function calculateMetrics() {
  const prospects = state.prospects;
  const drafts = state.drafts;
  const sentStatuses = ["Contacted", "Warm Reply", "Call Booked", "Proposal Sent", "Won"];
  const replies = state.replies?.length || prospects.filter((lead) => ["Warm Reply", "Call Booked", "Proposal Sent", "Won"].includes(lead.status)).length;
  const calls = state.calls?.length || prospects.filter((lead) => lead.status === "Call Booked").length;
  const won = prospects.filter((lead) => lead.status === "Won").length;
  const pipelineValue = prospects.filter((lead) => ["Call Booked", "Proposal Sent", "Won"].includes(lead.status)).length * 1500;
  const apiSpend = state.spend.reduce((sum, item) => sum + Number(item.cost || 0), 0);

  return [
    { label: "Prospects", value: prospects.length, note: "Companies tracked", icon: "S" },
    { label: "AI drafts", value: drafts.filter((draft) => draft.status !== "Approved").length, note: "Need approval", icon: "A" },
    { label: "Outreach sent", value: prospects.filter((lead) => sentStatuses.includes(lead.status)).length, note: "Email + IG tasks", icon: "O" },
    { label: "Replies", value: replies, note: "Warm pipeline", icon: "R" },
    { label: "Calls booked", value: calls, note: "Audit calls", icon: "C" },
    { label: "Pipeline value", value: `£${(pipelineValue / 1000).toFixed(1)}k`, note: "Monthly retainer", icon: "P" },
    { label: "API spend", value: money(apiSpend), note: "Tracked budget", icon: "£" },
    { label: "Won clients", value: won, note: "Target: 3", icon: "W" }
  ];
}

function calculateAgentMetrics() {
  const active = state.agents.filter((agent) => ["Running", "Waiting Approval", "Queued"].includes(agent.status)).length;
  const approvals = state.agentTasks.filter((task) => task.approval === "Yes").length + state.drafts.filter((draft) => draft.status !== "Approved").length;
  const totalAgentCost = state.agents.reduce((sum, agent) => sum + Number(agent.cost || 0), 0);

  return [
    { label: "Active agents", value: active, note: "Live/queued", icon: "AI" },
    { label: "Tasks tracked", value: state.agentTasks.length, note: "Agent workload", icon: "T" },
    { label: "Needs approval", value: approvals, note: "Human review", icon: "!" },
    { label: "Agent spend", value: money(totalAgentCost), note: "AI/search costs", icon: "£" }
  ];
}

function calculateTodayMetrics() {
  const approvals = state.drafts.filter((draft) => draft.status !== "Approved").length;
  const warm = state.prospects.filter((lead) => ["Warm Reply", "Call Booked", "Proposal Sent"].includes(lead.status)).length;
  const researchNeeded = state.prospects.filter((lead) => ["New Prospect", "AI Drafted"].includes(lead.status)).length;
  const deliveryActions = state.delivery.filter((item) => item.nextAction && !String(item.health).toLowerCase().includes("complete")).length;
  const reviewOutputs = [
    ...(state.websiteAudits || []),
    ...(state.socialAudits || []),
    ...(state.contentBriefs || []),
    ...(state.agentOutputs || [])
  ].filter((item) => normaliseStatus(item.status) === "Needs Review").length;

  return [
    { label: "Review", value: approvals + reviewOutputs, note: "Drafts/outputs", icon: "R" },
    { label: "Warm leads", value: warm, note: "Follow up today", icon: "W" },
    { label: "Research", value: researchNeeded, note: "Need context", icon: "C" },
    { label: "Delivery", value: deliveryActions, note: "Client actions", icon: "D" }
  ];
}

function calculateDeliveryMetrics() {
  const rows = state.delivery || [];
  const leads = rows.reduce((sum, item) => sum + Number(item.leads || 0), 0);
  const bookedCalls = rows.reduce((sum, item) => sum + Number(item.bookedCalls || 0), 0);
  const adSpend = rows.reduce((sum, item) => sum + Number(item.adSpend || 0), 0);
  const activeTests = rows.filter((item) => String(item.stage || "").toLowerCase().includes("test") || String(item.campaignStatus || "").toLowerCase().includes("launch")).length;

  return [
    { label: "Active tests", value: activeTests, note: "14-day trials", icon: "T" },
    { label: "Client ad spend", value: money(adSpend), note: "Paid by client", icon: "£" },
    { label: "Leads", value: leads, note: "Tracked enquiries", icon: "L" },
    { label: "Booked calls", value: bookedCalls, note: "Quote/call outcomes", icon: "B" }
  ];
}

function calculateSocialMetrics() {
  const planned = (state.xelloSocial || []).filter((item) => item.status !== "Posted").length;
  const weekly = state.socialCalendar?.length || 0;
  const pillars = state.contentPillars?.length || 0;
  const reels = (state.xelloSocial || []).filter((item) => String(item.platform).toLowerCase().includes("reel") || String(item.platform).toLowerCase().includes("tiktok")).length;

  return [
    { label: "Ideas", value: planned, note: "Ready to film", icon: "I" },
    { label: "Weekly slots", value: weekly, note: "Posting rhythm", icon: "W" },
    { label: "Pillars", value: pillars, note: "Brand themes", icon: "P" },
    { label: "Video ideas", value: reels, note: "Reels/TikToks", icon: "V" }
  ];
}

function renderMetricCards(targetId, metrics) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = metrics
    .map((metric) => `
      <article class="metric-card">
        <div class="metric-top">
          <div class="metric-icon">${metric.icon}</div>
          <span class="metric-note">${metric.note}</span>
        </div>
        <p class="label">${metric.label}</p>
        <p class="metric-value">${metric.value}</p>
      </article>
    `)
    .join("");
}

function renderMetrics() {
  renderMetricCards("metricGrid", calculateMetrics());
  renderMetricCards("agentMetricGrid", calculateAgentMetrics());
  renderMetricCards("todayMetricGrid", calculateTodayMetrics());
  renderMetricCards("deliveryMetricGrid", calculateDeliveryMetrics());
  renderMetricCards("socialMetricGrid", calculateSocialMetrics());
}

function renderHotLeads() {
  const hot = [...state.prospects].sort((a, b) => b.score - a.score).slice(0, 5);
  document.getElementById("hotLeadsTable").innerHTML = hot
    .map((lead) => `
      <tr>
        <td><strong>${lead.company}</strong></td>
        <td>${lead.area}</td>
        <td>${lead.service}</td>
        <td><strong>${lead.score}</strong></td>
        <td><span class="${statusClass(lead.status)}">${lead.status}</span></td>
      </tr>
    `)
    .join("");
}

function renderProspects(filter = "") {
  const rows = state.prospects.filter((lead) => JSON.stringify(lead).toLowerCase().includes(filter.toLowerCase()));
  document.getElementById("prospectsTable").innerHTML = rows
    .map((lead) => `
      <tr>
        <td><strong>${lead.company}</strong></td>
        <td>${lead.area}</td>
        <td>${lead.service}</td>
        <td><strong>${lead.score}</strong></td>
        <td><span class="${statusClass(lead.status)}">${lead.status}</span></td>
        <td>${lead.nextAction}</td>
        <td><button class="small-button" data-open-profile="${escapeHtml(lead.company)}">Open</button></td>
      </tr>
    `)
    .join("");

  document.querySelectorAll("[data-open-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      showView("profiles");
      renderProfiles(button.dataset.openProfile);
    });
  });
}

function renderTasks() {
  const needsApproval = state.drafts.filter((draft) => draft.status !== "Approved").length;
  const igTasks = state.drafts.filter((draft) => draft.channel === "Instagram").length;
  const warm = state.prospects.filter((lead) => ["Warm Reply", "Call Booked"].includes(lead.status)).length;
  const tasks = [
    `Approve ${needsApproval} AI outreach drafts.`,
    `Send ${igTasks} manual Instagram DM tasks.`,
    `Follow up ${warm} warm opportunities.`,
    "Run the next 25-prospect scan.",
    "Check spend before the next AI batch."
  ];

  document.getElementById("taskList").innerHTML = tasks
    .map((task) => `
      <div class="task-item">
        <span class="task-check">✓</span>
        <span>${task}</span>
      </div>
    `)
    .join("");
}

function getTodayActions() {
  const approvals = state.drafts.filter((draft) => draft.status !== "Approved").length;
  const warmReplies = state.replies?.filter((reply) => ["Warm Reply", "Follow Up", "Interested"].includes(reply.status) || ["Interested", "Warm question"].includes(reply.type)).length || 0;
  const prospectsToResearch = state.prospects.filter((lead) => ["New Prospect", "AI Drafted"].includes(lead.status)).length;
  const auditsToReview = (state.websiteAudits || []).filter((item) => normaliseStatus(item.status) === "Needs Review").length;
  const briefsToReview = (state.contentBriefs || []).filter((item) => normaliseStatus(item.status) === "Needs Review").length;
  const outputsToReview = (state.agentOutputs || []).filter((item) => normaliseStatus(item.status) === "Needs Review").length;
  const socialIdeas = state.xelloSocial?.filter((item) => item.status !== "Posted").length || 0;
  const deliveryNext = state.delivery.find((item) => item.nextAction);

  return [
    {
      title: approvals ? `Review ${approvals} outreach draft${approvals === 1 ? "" : "s"}` : "Outreach approvals clear",
      owner: "Sam",
      priority: approvals ? "High" : "Low",
      detail: approvals ? "Approve, edit or mark do-not-send before any manual outreach." : "No outreach draft is waiting right now.",
      next: "Open Outreach"
    },
    {
      title: warmReplies ? `Follow up ${warmReplies} warm repl${warmReplies === 1 ? "y" : "ies"}` : "No warm replies waiting",
      owner: "Reply Triage Agent",
      priority: warmReplies ? "High" : "Medium",
      detail: warmReplies ? "Move warm conversations toward a 10-minute call." : "Use demo replies or real replies to test the workflow.",
      next: "Open Replies"
    },
    {
      title: auditsToReview ? `Review ${auditsToReview} website audit${auditsToReview === 1 ? "" : "s"}` : "Website audits clear",
      owner: "Website Audit Agent",
      priority: auditsToReview ? "High" : "Low",
      detail: auditsToReview ? "Approve useful findings, use them for call prep, or archive anything weak." : "Run a website audit from a company profile when you want a fresh angle.",
      next: "Open Website Audits"
    },
    {
      title: briefsToReview ? `Check ${briefsToReview} content brief${briefsToReview === 1 ? "" : "s"}` : "No content briefs waiting",
      owner: "Content Creation Agent",
      priority: briefsToReview ? "Medium" : "Low",
      detail: "Good briefs should clearly say what to film, why it matters and what the CTA is.",
      next: "Open Content Briefs"
    },
    {
      title: prospectsToResearch ? `Research ${prospectsToResearch} prospect${prospectsToResearch === 1 ? "" : "s"}` : "Prospect research is up to date",
      owner: "Company Research Agent",
      priority: prospectsToResearch ? "Medium" : "Low",
      detail: "Personalisation improves outreach quality and feeds the content creation agent.",
      next: "Run research"
    },
    {
      title: deliveryNext ? deliveryNext.nextAction : "Prepare first client delivery test",
      owner: "Delivery",
      priority: "High",
      detail: deliveryNext ? `${deliveryNext.client}: ${deliveryNext.stage}` : "Use First Touch Innovations as the safe dry-run client.",
      next: "Open Delivery"
    },
    {
      title: socialIdeas ? `Film or refine ${socialIdeas} Xello content idea${socialIdeas === 1 ? "" : "s"}` : "Generate Xello social ideas",
      owner: "Xello Social Growth Agent",
      priority: "Medium",
      detail: "Build credibility with founder-led marketing education and behind-the-scenes proof.",
      next: "Open Xello Social"
    },
    {
      title: outputsToReview ? `Tidy ${outputsToReview} agent output${outputsToReview === 1 ? "" : "s"}` : "Agent output log tidy",
      owner: "Operations",
      priority: outputsToReview ? "Medium" : "Low",
      detail: "Mark outputs as Approved, Used or Archived so the hub stays clean.",
      next: "Open Agent Outputs"
    }
  ];
}

function renderTodayActions() {
  const actionTarget = document.getElementById("todayActionList");
  const checklistTarget = document.getElementById("setupChecklist");
  if (!actionTarget || !checklistTarget) return;

  actionTarget.innerHTML = getTodayActions()
    .map((item) => `
      <article class="today-action-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.owner}</p>
            <h2>${item.title}</h2>
          </div>
          <span class="${item.priority === "High" ? "status warning" : "status"}">${item.priority}</span>
        </div>
        <p>${item.detail}</p>
        <span class="mini-stat">${item.next}</span>
      </article>
    `)
    .join("");

  const checklist = [
    { title: "Google Sheet connected", done: Boolean(getApiUrl()), detail: "Dashboard can sync real prospects, drafts and agent rows." },
    { title: "Prospect scanner tested", done: state.prospects.length > 0, detail: "At least one company is visible in the CRM." },
    { title: "Research layer working", done: (state.companyResearch || []).length > 0, detail: "Outreach can use specific company context." },
    { title: "Draft approval flow working", done: state.drafts.length > 0, detail: "Messages are created for review, not sent automatically." },
    { title: "Delivery tracker ready", done: (state.delivery || []).length > 0, detail: "Client trial work has stages, spend and next actions." },
    { title: "Xello social plan ready", done: (state.xelloSocial || []).length > 0, detail: "Your own brand growth has content ideas and weekly rhythm." }
  ];

  checklistTarget.innerHTML = checklist
    .map((item) => `
      <article class="setup-check-card ${item.done ? "complete" : ""}">
        <span class="task-check">${item.done ? "✓" : "!"}</span>
        <div>
          <strong>${item.title}</strong>
          <p>${item.detail}</p>
        </div>
      </article>
    `)
    .join("");
}

function groupByStage() {
  const stages = ["New Prospect", "AI Drafted", "Contacted", "Warm Reply", "Call Booked", "Proposal Sent", "Won"];
  return stages.map((stage) => ({
    stage,
    leads: state.prospects.filter((lead) => lead.status === stage)
  }));
}

function renderPipeline() {
  const grouped = groupByStage();
  document.getElementById("pipelineRow").innerHTML = grouped
    .slice(0, 6)
    .map((group) => `
      <article class="pipeline-card">
        <p>${group.stage}</p>
        <strong>${group.leads.length}</strong>
        <span>${group.leads.length * 1500 ? `£${(group.leads.length * 1500).toLocaleString()}/mo potential` : "Build pipeline"}</span>
      </article>
    `)
    .join("");

  document.getElementById("kanban").innerHTML = grouped
    .map((group) => `
      <div class="kanban-column">
        <p class="kanban-title">${group.stage}</p>
        ${group.leads.map((lead) => `
          <div class="kanban-card">
            <strong>${lead.company}</strong>
            <p>${lead.area} · ${lead.service}</p>
            <p>Next: ${lead.nextAction}</p>
          </div>
        `).join("") || `<p class="metric-note">No leads here yet.</p>`}
      </div>
    `)
    .join("");
}

function renderDrafts() {
  document.getElementById("draftList").innerHTML = state.drafts
    .map((draft, index) => `
      <article class="draft-card">
        <div class="panel-header">
          <div>
            <p class="label">${draft.channel}</p>
            <h2>${draft.company}</h2>
          </div>
          <span class="${statusClass(draft.status)}">${draft.status}</span>
        </div>
        <strong>${draft.subject}</strong>
        <p>${draft.message}</p>
        ${draft.feedback ? `<p class="feedback-note"><strong>Training mark:</strong> ${draft.feedback}</p>` : ""}
        <div class="feedback-actions" aria-label="Draft feedback options">
          <button class="feedback-button positive" data-draft-feedback="${index}" data-feedback="Sounds real">Sounds Real</button>
          <button class="feedback-button positive" data-draft-feedback="${index}" data-feedback="Good question">Good Question</button>
          <button class="feedback-button" data-draft-feedback="${index}" data-feedback="Too salesy">Too Salesy</button>
          <button class="feedback-button" data-draft-feedback="${index}" data-feedback="Too long">Too Long</button>
          <button class="feedback-button" data-draft-feedback="${index}" data-feedback="Not personal">Not Personal</button>
        </div>
        <div class="draft-actions">
          <button class="small-button approve" data-draft-status="${index}" data-status="Approved">Approve</button>
          <button class="small-button" data-draft-status="${index}" data-status="Needs edit">Needs Edit</button>
          <button class="small-button" data-draft-status="${index}" data-status="Sent manually">Sent</button>
          <button class="small-button danger" data-draft-status="${index}" data-status="Do not send">Do Not Send</button>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-draft-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.draftStatus);
      const status = button.dataset.status;
      const draft = state.drafts[index];
      draft.status = status;
      saveState();
      renderAll();
      if (draft.draftId) {
        callSheetAction("updateDraftStatus", { draft_id: draft.draftId, status }, `Updating ${draft.company} draft status...`);
      }
    });
  });

  document.querySelectorAll("[data-draft-feedback]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.draftFeedback);
      markDraftFeedback(index, button.dataset.feedback);
    });
  });
}

function refreshedOutreachDrafts() {
  const topProspects = state.prospects.length ? state.prospects.slice(0, 4) : defaultData.prospects.slice(0, 4);
  const templates = [
    {
      channel: "Instagram",
      subject: "Soft DM opener",
      message: (lead) => `Hi ${lead.company} team, I came across your work while looking at ${String(lead.service || "renovation").toLowerCase()} companies around ${lead.area || "Brighton"}. Really liked the quality of the projects you show. I help local renovation companies improve their online presence and enquiries. Do most of yours come through word of mouth, your website or Instagram?`
    },
    {
      channel: "Email",
      subject: "Quick question",
      message: (lead) => `Hi ${lead.company} team,\n\nI came across you while looking at ${String(lead.service || "renovation").toLowerCase()} companies around ${lead.area || "Brighton"}. I liked how clear your work looks from a homeowner's point of view.\n\nI help local renovation companies improve their online presence and turn more of that attention into enquiries. Quick question: do most of yours currently come through word of mouth, your website or Instagram?\n\nSam\nXello Media`
    },
    {
      channel: "Instagram",
      subject: "Project compliment DM",
      message: (lead) => `Hi, I was just looking at ${lead.company} and liked the style of your ${String(lead.service || "renovation").toLowerCase()} work. I help local renovation companies get more eyes on work like that online. Are most of your enquiries referral-based at the moment?`
    },
    {
      channel: "Email",
      subject: "Saw your work locally",
      message: (lead) => `Hi ${lead.company} team,\n\nI’m Sam from Xello Media, based around Brighton/Hove. I came across your company while looking at local renovation businesses and thought your work looked really solid.\n\nI help companies like yours improve their online presence and turn more local attention into enquiries. Out of interest, are you actively trying to get more enquiries online right now, or is most of it still referral-based?\n\nSam`
    }
  ];

  return topProspects.map((lead, index) => {
    const template = templates[index % templates.length];
    return {
      draftId: "",
      prospectId: lead.prospectId || "",
      channel: template.channel,
      company: lead.company || "Local renovation company",
      subject: template.subject,
      status: "Needs review",
      message: template.message(lead),
      feedback: ""
    };
  });
}

function refreshLocalOutreachExamples() {
  state.drafts = refreshedOutreachDrafts();
  state.outreachFeedback = state.outreachFeedback || [];
  state.outreachFeedback.unshift({
    company: "Outreach Writer",
    channel: "Training",
    feedback: "Examples refreshed",
    lesson: "Drafts now use a conversation-first opener: observation, compliment, one brief Xello context line and one easy question.",
    createdAt: new Date().toLocaleString([], { dateStyle: "short", timeStyle: "short" })
  });
  addAgentLog("Outreach Writer", "Refreshed local outreach examples with a brief Xello context line before the question.");
  saveState();
  renderAll();
}

function feedbackLesson(feedback) {
  const lessons = {
    "Sounds real": "Do more of this: natural tone, low-pressure opener and human wording.",
    "Good question": "Use this style again: one easy question that invites a reply.",
    "Too salesy": "Reduce pitch language. Start with observation, compliment and question.",
    "Too long": "Shorten the first touch. Keep email under 90 words and DM under 40 words.",
    "Not personal": "Add one specific observation from company research before drafting."
  };
  return lessons[feedback] || "Use this feedback to improve the next draft.";
}

function markDraftFeedback(index, feedback) {
  const draft = state.drafts[index];
  if (!draft || !feedback) return;
  const lesson = feedbackLesson(feedback);
  draft.feedback = feedback;
  state.outreachFeedback = state.outreachFeedback || [];
  state.outreachFeedback.unshift({
    draftId: draft.draftId || "",
    company: draft.company,
    channel: draft.channel,
    feedback,
    lesson,
    createdAt: new Date().toLocaleString([], { dateStyle: "short", timeStyle: "short" })
  });
  addAgentLog("Outreach Writer", `Feedback marked for ${draft.company}: ${feedback}.`);
  saveState();
  renderAll();

  if (draft.draftId) {
    callSheetAction("updateDraftFeedback", {
      draft_id: draft.draftId,
      company_name: draft.company,
      channel: draft.channel,
      feedback,
      lesson
    }, `Saving ${feedback} feedback for ${draft.company}...`);
  }
}

function renderAgents() {
  document.getElementById("agentGrid").innerHTML = state.agents
    .map((agent, index) => `
      <article class="agent-card">
        <div class="agent-top">
          <div>
            <p class="label">Agent</p>
            <h2>${agent.name}</h2>
          </div>
          <span class="${statusClass(agent.status)}">${agent.status}</span>
        </div>
        <p class="agent-purpose">${agent.purpose}</p>
        <div>
          <div class="agent-top">
            <span class="metric-note">${agent.currentTask}</span>
            <span class="metric-note">${agent.progress}%</span>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width: ${agent.progress}%"></div></div>
        </div>
        <div class="agent-meta">
          <div><span>Last run</span><strong>${agent.lastRun}</strong></div>
          <div><span>Next run</span><strong>${agent.nextRun}</strong></div>
          <div><span>Cost</span><strong>${money(agent.cost)}</strong></div>
          <div><span>Outputs</span><strong>${agent.outputs}</strong></div>
        </div>
        <div class="draft-actions">
          <button class="small-button" data-agent-detail="${index}">Details</button>
          <button class="small-button approve" data-agent-run="${index}">Run</button>
          <button class="small-button" data-agent-pause="${index}">Pause</button>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-agent-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      showAgentDetails(state.agents[Number(button.dataset.agentDetail)]);
    });
  });

  document.querySelectorAll("[data-agent-run]").forEach((button) => {
    button.addEventListener("click", () => {
      const agent = state.agents[Number(button.dataset.agentRun)];
      agent.status = "Running";
      agent.progress = Math.min(100, Math.max(agent.progress, 15) + 10);
      addAgentLog(agent.name, `${agent.name} was manually started from the dashboard.`);
      saveState();
      renderAll();
    });
  });

  document.querySelectorAll("[data-agent-pause]").forEach((button) => {
    button.addEventListener("click", () => {
      const agent = state.agents[Number(button.dataset.agentPause)];
      agent.status = "Idle";
      agent.currentTask = "Paused by team";
      addAgentLog(agent.name, `${agent.name} was paused.`);
      saveState();
      renderAll();
    });
  });
}

function showAgentDetails(agent) {
  const detail = agentDetails[agent.name] || {
    purpose: agent.purpose || "This agent supports the Xello operating system.",
    responsibilities: ["Track the relevant work in the CRM.", "Keep activity organised.", "Help move the business forward."],
    inputs: "CRM data and task context.",
    outputs: "Tracked tasks, status updates and recommendations.",
    guardrails: "Approval-first. No real outbound messages are sent automatically."
  };

  document.getElementById("agentDialogLabel").textContent = agent.status || "AI agent";
  document.getElementById("agentDialogTitle").textContent = agent.name;
  document.getElementById("agentDetailGrid").innerHTML = `
    <section class="agent-detail-section">
      <p class="label">Purpose</p>
      <p>${detail.purpose}</p>
    </section>
    <section class="agent-detail-section">
      <p class="label">Responsibilities</p>
      <ul>
        ${detail.responsibilities.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
    <section class="agent-detail-section">
      <p class="label">Inputs</p>
      <p>${detail.inputs}</p>
    </section>
    <section class="agent-detail-section">
      <p class="label">Outputs</p>
      <p>${detail.outputs}</p>
    </section>
    <section class="agent-detail-section">
      <p class="label">Guardrails</p>
      <p>${detail.guardrails}</p>
    </section>
    <section class="agent-detail-section">
      <p class="label">Current State</p>
      <p>${agent.currentTask || "No current task."}</p>
    </section>
  `;
  document.getElementById("agentDialog").showModal();
}

function renderAgentTasks() {
  document.getElementById("agentTaskTable").innerHTML = state.agentTasks
    .map((task) => `
      <article class="agent-task-card">
        <div class="agent-task-head">
          <div>
            <p class="label">${task.agent}</p>
            <h2>${task.task}</h2>
            <p>${task.related}</p>
          </div>
          <span class="${statusClass(task.status)}">${task.status}</span>
        </div>
        <div>
          <div class="agent-top">
            <span class="metric-note">Progress</span>
            <span class="metric-note">${task.progress}%</span>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width: ${task.progress}%"></div></div>
        </div>
        <div class="agent-task-footer">
          <span class="pill">Priority: ${task.priority}</span>
          <span class="pill">Cost: ${money(task.cost)}</span>
          <span class="${task.approval === "Yes" ? "pill warning" : "pill"}">Approval: ${task.approval}</span>
        </div>
        ${task.taskId && task.approval === "Yes" && task.status !== "Complete" ? `
          <div class="draft-actions">
            <button class="small-button approve" data-approve-task="${task.taskId}">Approve Task</button>
          </div>
        ` : ""}
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-approve-task]").forEach((button) => {
    button.addEventListener("click", () => {
      callSheetAction("approveTask", { task_id: button.dataset.approveTask }, "Approving agent task in Google Sheets...");
    });
  });
}

function renderApprovals() {
  const approvals = [
    ...state.drafts.filter((draft) => draft.status !== "Approved").map((draft) => ({
      title: `${draft.channel} draft for ${draft.company}`,
      description: draft.subject,
      status: draft.status
    })),
    ...state.agentTasks.filter((task) => task.approval === "Yes").map((task) => ({
      title: task.task,
      description: `${task.agent} needs approval before this can move forward.`,
      status: task.status
    }))
  ].slice(0, 6);

  document.getElementById("approvalList").innerHTML = approvals
    .map((item) => `
      <article class="approval-card">
        <div class="approval-head">
          <div>
            <strong>${item.title}</strong>
            <p>${item.description}</p>
          </div>
          <span class="${statusClass(item.status)}">${item.status}</span>
        </div>
      </article>
    `)
    .join("") || `<p class="metric-note">No approvals waiting.</p>`;
}

function renderAgentLogs() {
  document.getElementById("agentLogList").innerHTML = state.agentLogs
    .slice(0, 8)
    .map((log) => `
      <article class="log-card">
        <div class="log-head">
          <div>
            <strong>${log.agent}</strong>
            <p>${log.event}</p>
          </div>
          <span class="pill">${log.time}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderReplies() {
  const replies = state.replies || [];
  const calls = state.calls || [];

  document.getElementById("replyList").innerHTML = replies
    .map((reply) => `
      <article class="reply-card">
        <div class="card-title-row">
          <div>
            <p class="label">${reply.channel}</p>
            <h2>${reply.company}</h2>
          </div>
          <span class="${statusClass(reply.status)}">${reply.status}</span>
        </div>
        <p><strong>${reply.type}</strong></p>
        <p>${reply.summary}</p>
        <p class="metric-note">Next: ${reply.nextAction}</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No replies logged yet.</p>`;

  document.getElementById("callList").innerHTML = calls
    .map((call) => `
      <article class="call-card">
        <div class="card-title-row">
          <div>
            <p class="label">${call.type}</p>
            <h2>${call.company}</h2>
          </div>
          <span class="${statusClass(call.status)}">${call.status}</span>
        </div>
        <p><strong>${call.date}</strong> with ${call.contact}</p>
        <p>${call.nextStep}</p>
        <p class="metric-note">Estimated value: ${money(call.value || 0)}/mo</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No calls booked yet.</p>`;
}

function renderReplyResponses() {
  const target = document.getElementById("replyResponseList");
  if (!target) return;
  target.innerHTML = (state.replyResponses || [])
    .map((response, index) => `
      <article class="reply-card">
        <div class="card-title-row">
          <div>
            <p class="label">${response.channel || "Reply"}</p>
            <h2>${response.company}</h2>
          </div>
          <span class="${statusClass(response.status || "Needs review")}">${response.status || "Needs review"}</span>
        </div>
        <p><strong>${response.type || "Suggested response"}</strong></p>
        <p>${response.message}</p>
        <p class="metric-note">Next: ${response.nextAction || "Ask for a 10-minute call"}</p>
        <div class="draft-actions">
          <button class="small-button approve" data-reply-response-status="${index}" data-status="Approved">Approve</button>
          <button class="small-button" data-reply-response-status="${index}" data-status="Needs edit">Needs Edit</button>
          <button class="small-button" data-reply-response-status="${index}" data-status="Sent manually">Sent</button>
        </div>
      </article>
    `)
    .join("") || `<p class="metric-note">No suggested responses yet. Click Triage Replies to draft next-step replies.</p>`;

  document.querySelectorAll("[data-reply-response-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const response = state.replyResponses[Number(button.dataset.replyResponseStatus)];
      response.status = button.dataset.status;
      saveState();
      renderAll();
    });
  });
}

function createLocalReplyResponse(reply) {
  const replyText = `${reply.type || ""} ${reply.summary || ""} ${reply.status || ""}`.toLowerCase();
  const isMaybeLater = replyText.includes("later") || replyText.includes("busy") || replyText.includes("not now");
  const isQuestion = replyText.includes("question") || replyText.includes("include") || replyText.includes("process") || replyText.includes("what did you have in mind") || replyText.includes("what would");
  const isReferralLed = replyText.includes("referral") || replyText.includes("word of mouth") || replyText.includes("recommendation");
  const isAdConcern = replyText.includes("tried ads") || replyText.includes("ads before") || replyText.includes("didn") || replyText.includes("waste");
  const base = isMaybeLater
    ? `No worries at all, thanks for getting back to me. The idea is very simple and capped, so it would not turn into a big commitment: a 14-day local lead test where I come to site, film one strong advert, help test it on Meta, track any enquiries and then review what happened with you. You would only cover the ad spend. Would it be worth a quick 10-minute call when things calm down so I can explain it properly?`
    : isAdConcern
      ? `Completely understand. A lot of local companies have tried ads without proper tracking or strong enough creative, so they never really know what worked. My idea is a small 14-day test: I come to site, film one proper advert, run a simple Meta test, track the enquiries and then review it with you. You would only cover the ad spend, and there are no guarantees or long commitment. Would you be open to a quick 10-minute call so I can explain how I would structure it?`
      : isReferralLed
        ? `That makes sense, referrals are usually the strongest source for renovation companies. What I would be testing is whether we can turn that same trust into more consistent online enquiries. The simple version is a 14-day local lead test: one site visit, one filmed advert, one Meta campaign, lead tracking and a review at the end. You would only cover the ad spend. Would you be open to a quick 10-minute call so I can explain it properly?`
        : isQuestion
          ? `Yes, of course. The test would be kept deliberately simple: I come to site, film one strong advert, help test it on Meta, track any enquiries and then review what happened with you after 14 days. You would only cover the ad spend, so it is not a big commitment upfront. Would you be open to a quick 10-minute call so I can walk you through it?`
          : `Thanks for getting back to me. The next step would be a simple 14-day local lead test: one site visit, one filmed advert, one Meta campaign, lead tracking and one review at the end. You would only cover the ad spend. Would you be open to a quick 10-minute call this week so I can explain it properly?`;

  return {
    replyId: reply.replyId || "",
    company: reply.company,
    channel: reply.channel,
    type: reply.type || "Reply",
    status: "Needs review",
    message: base,
    nextAction: "Review response and ask for 10-minute call"
  };
}

function triageLocalReplies() {
  const replies = state.replies || [];
  state.replyResponses = state.replyResponses || [];
  replies.forEach((reply) => {
    if (state.replyResponses.some((response) => response.company === reply.company && response.channel === reply.channel)) return;
    state.replyResponses.unshift(createLocalReplyResponse(reply));
  });
  state.agents = state.agents.map((agent) =>
    agent.name === "Reply Triage Agent"
      ? { ...agent, status: "Waiting Approval", currentTask: `Drafted ${state.replyResponses.length} suggested response(s)`, progress: 100, lastRun: "Just now", outputs: state.replyResponses.length }
      : agent
  );
  addAgentLog("Reply Triage Agent", "Created suggested replies explaining the 14-day test and asking for a 10-minute call.");
  saveState();
  renderAll();
}

function practiceReplies() {
  const prospects = (state.prospects?.length ? state.prospects : defaultData.prospects).slice(0, 4);
  const scenarios = [
    {
      channel: "Email",
      type: "Warm question",
      summary: (lead) => `Thanks Sam, appreciate the message. Most of our work is referrals at the moment, but we would like more consistent website or Instagram enquiries. What did you have in mind?`,
      status: "Warm Reply"
    },
    {
      channel: "Instagram DM",
      type: "Process question",
      summary: (lead) => `Cheers Sam. Instagram brings a few people in, but nothing consistent. What would the process actually involve?`,
      status: "Follow Up"
    },
    {
      channel: "Email",
      type: "Ad concern",
      summary: (lead) => `Hi Sam, thanks for reaching out. We have tried ads before and did not get much back from them, so we are a bit cautious. What would you do differently?`,
      status: "Warm Reply"
    },
    {
      channel: "Instagram DM",
      type: "Busy but open",
      summary: (lead) => `Thanks for the message. We are pretty busy right now, but open to hearing the idea if it is simple.`,
      status: "Follow Up"
    }
  ];

  return prospects.map((lead, index) => {
    const scenario = scenarios[index % scenarios.length];
    return {
      replyId: `practice_${Date.now()}_${index}`,
      prospectId: lead.prospectId || "",
      company: lead.company || "Local renovation company",
      channel: scenario.channel,
      type: scenario.type,
      summary: scenario.summary(lead),
      nextAction: "Reply with 14-day test outline and ask for 10-minute call",
      status: scenario.status,
      createdAt: "Practice"
    };
  });
}

function runPracticeReplyFlow() {
  state.replies = practiceReplies();
  state.replyResponses = state.replies.map(createLocalReplyResponse);
  state.agents = state.agents.map((agent) =>
    agent.name === "Reply Triage Agent"
      ? { ...agent, status: "Waiting Approval", currentTask: `Practised ${state.replyResponses.length} reply response(s)`, progress: 100, lastRun: "Just now", outputs: state.replyResponses.length }
      : agent
  );
  addAgentLog("Reply Triage Agent", "Practice flow created fake company replies and drafted 14-day test call responses.");
  saveState();
  renderAll();
}

function renderMasterApprovals() {
  const approvals = [
    ...state.drafts.filter((draft) => draft.status !== "Approved").map((draft) => ({
      title: `${draft.channel} draft for ${draft.company}`,
      description: draft.message,
      status: draft.status,
      owner: "Outreach Writer"
    })),
    ...state.agentTasks.filter((task) => task.approval === "Yes").map((task) => ({
      title: task.task,
      description: `${task.agent} needs approval before this moves forward.`,
      status: task.status,
      owner: task.agent
    })),
    { title: "Run next prospect batch", description: "Approve another 25-prospect scan before using more search/API budget.", status: "Needs review", owner: "Prospect Scanner" },
    { title: "Launch first experiment", description: "Test website audit first vs Meta ads first messaging.", status: "Needs review", owner: "Learning Loop" }
  ];

  document.getElementById("masterApprovalList").innerHTML = approvals
    .map((item) => `
      <article class="approval-card">
        <div class="approval-head">
          <div>
            <p class="label">${item.owner}</p>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
          </div>
          <span class="${statusClass(item.status)}">${item.status}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderMemory() {
  document.getElementById("memoryList").innerHTML = state.memory
    .map((item) => `
      <article class="memory-card">
        <div class="card-title-row">
          <strong>${item.insight}</strong>
          <span class="mini-stat">${item.confidence}%</span>
        </div>
        <p>Source: ${item.source}</p>
        <p>Next action: ${item.action}</p>
        <div class="confidence-bar"><div class="confidence-fill" style="width: ${item.confidence}%"></div></div>
      </article>
    `)
    .join("");
}

function renderKnowledge() {
  document.getElementById("knowledgeList").innerHTML = state.knowledge
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.title}</strong>
          <span class="mini-stat">${item.owner}</span>
        </div>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");
}

function renderCompanyResearch() {
  const target = document.getElementById("researchList");
  if (!target) return;
  target.innerHTML = (state.companyResearch || [])
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.company}</strong>
          <span class="${statusClass(item.status || "Research complete")}">${item.status || "Research complete"}</span>
        </div>
        <p><strong>Hook:</strong> ${item.hook || "Needs research."}</p>
        <p><strong>Pain point:</strong> ${item.painPoint || "Not identified yet."}</p>
        <p><strong>Opportunity:</strong> ${item.opportunity || "Not identified yet."}</p>
        <p><strong>Outreach angle:</strong> ${item.angle || "Use a free growth audit angle."}</p>
        ${item.websiteNotes ? `<p class="metric-note">Website: ${item.websiteNotes}</p>` : ""}
        ${item.instagramNotes ? `<p class="metric-note">Instagram: ${item.instagramNotes}</p>` : ""}
      </article>
    `)
    .join("") || `<p class="metric-note">No company research yet. Click Research Prospects after syncing your sheet.</p>`;
}

function getCompanyBundle(company) {
  return {
    prospect: state.prospects.find((item) => item.company === company),
    research: (state.companyResearch || []).find((item) => item.company === company),
    websiteAudit: (state.websiteAudits || []).find((item) => item.company === company),
    socialAudit: (state.socialAudits || []).find((item) => item.company === company),
    drafts: (state.drafts || []).filter((item) => item.company === company),
    replies: (state.replies || []).filter((item) => item.company === company),
    calls: (state.calls || []).filter((item) => item.company === company),
    content: (state.contentIdeas || []).filter((item) => item.company === company),
    briefs: (state.contentBriefs || []).filter((item) => item.company === company)
  };
}

function renderProfiles(focusCompany = "") {
  const target = document.getElementById("profileGrid");
  if (!target) return;
  const companies = [...new Set([
    focusCompany,
    ...state.prospects.map((item) => item.company),
    ...(state.companyResearch || []).map((item) => item.company),
    ...(state.websiteAudits || []).map((item) => item.company)
  ].filter(Boolean))];

  target.innerHTML = companies
    .map((company) => {
      const bundle = getCompanyBundle(company);
      const lead = bundle.prospect || {};
      return `
        <article class="profile-card ${company === focusCompany ? "featured-profile" : ""}">
          <div class="card-title-row">
            <div>
              <p class="label">${lead.area || "Tracked company"}</p>
              <h2>${company}</h2>
            </div>
            <span class="${statusClass(lead.status || "Profile")}">${lead.status || "Profile"}</span>
          </div>
          <div class="profile-facts">
            <span>Service <strong>${lead.service || "Not set"}</strong></span>
            <span>Lead score <strong>${lead.score || "?"}</strong></span>
            <span>Drafts <strong>${bundle.drafts.length}</strong></span>
            <span>Replies <strong>${bundle.replies.length}</strong></span>
          </div>
          <p><strong>Research hook:</strong> ${bundle.research?.hook || "No research hook yet."}</p>
          <p><strong>Website audit:</strong> ${bundle.websiteAudit ? `${bundle.websiteAudit.score}/100 - ${bundle.websiteAudit.summary}` : "No website audit yet."}</p>
          <p><strong>Social audit:</strong> ${bundle.socialAudit ? `${bundle.socialAudit.score}/100 - ${bundle.socialAudit.gaps}` : "No social audit yet."}</p>
          <p><strong>Content idea:</strong> ${bundle.content[0]?.hook || bundle.briefs[0]?.hook || "No content idea yet."}</p>
          <p class="metric-note">Next action: ${lead.nextAction || bundle.websiteAudit?.outreachAngle || "Add next action."}</p>
          <div class="profile-action-grid">
            <button class="small-button approve" data-profile-action="outreach" data-profile-company="${escapeHtml(company)}">Create Outreach Draft</button>
            <button class="small-button" data-profile-action="audit" data-profile-company="${escapeHtml(company)}">Run Website Audit</button>
            <button class="small-button" data-profile-action="brief" data-profile-company="${escapeHtml(company)}">Generate Content Brief</button>
            <button class="small-button" data-profile-action="call" data-profile-company="${escapeHtml(company)}">Mark Call Booked</button>
            <button class="small-button" data-profile-action="test" data-profile-company="${escapeHtml(company)}">Move To Client Test</button>
          </div>
        </article>
      `;
    })
    .join("") || `<p class="metric-note">No company profiles yet. Add a prospect first.</p>`;

  target.querySelectorAll("[data-profile-action]").forEach((button) => {
    button.addEventListener("click", () => runProfileAction(button.dataset.profileAction, button.dataset.profileCompany));
  });
}

function leadForCompany(company) {
  return state.prospects.find((item) => item.company === company) || {};
}

function ensureProfileResearch(company) {
  const lead = leadForCompany(company);
  const existing = (state.companyResearch || []).find((item) => item.company === company);
  if (existing) return existing;
  upsertLocalResearch(company, {
    hook: `${company} looks like a local ${lead.service || "home improvement"} business with strong visual proof potential.`,
    painPoint: "They may be relying on referrals or existing channels instead of a tracked enquiry system.",
    opportunity: "Use a sharper website journey, a local filmed advert and clear lead tracking.",
    angle: "Start with one genuine compliment, then ask where their best enquiries come from right now.",
    websiteNotes: "No deep website audit yet. Run the audit action when a website URL is available.",
    instagramNotes: "No deep social audit yet.",
    status: "Profile research created"
  });
  return (state.companyResearch || []).find((item) => item.company === company);
}

function createProfileOutreachDraft(company) {
  const lead = leadForCompany(company);
  const research = ensureProfileResearch(company);
  const service = lead.service || "renovation work";
  const area = lead.area || "Brighton and Hove";
  state.drafts.unshift({
    channel: "Instagram",
    company,
    subject: `DM: ${company}`,
    status: "Needs review",
    message: `Hi ${company} team, I came across your ${service} work around ${area} and liked how clear/local it feels. I run Xello Media and help local renovation companies improve their online presence and enquiry flow. Out of interest, do most of your enquiries come from referrals, the website or Instagram at the moment?`
  });
  addAgentOutput({
    agent: "Outreach Writer",
    company,
    type: "Outreach draft",
    result: `Created a short conversation-first Instagram DM using this hook: ${research?.hook || "local company observation"}`,
    nextAction: "Review the draft before sending anything manually.",
    approval: "Yes",
    status: "Needs Review"
  });
  addAgentLog("Outreach Writer", `Created a profile outreach draft for ${company}.`);
  saveState();
  renderAll();
  showView("outreach");
}

function runProfileWebsiteAudit(company) {
  const lead = leadForCompany(company);
  const existingAudit = (state.websiteAudits || []).find((item) => item.company === company);
  const website = lead.website || existingAudit?.url || "";
  const scores = getAuditScores(`${company}-${website}`);
  const score = averageAuditScore(scores);
  const audit = {
    company,
    url: website,
    score,
    scores,
    status: "Needs Review",
    summary: website
      ? "Audit created from the profile action. Review the CTA clarity, mobile journey, trust proof and enquiry route before using this in outreach."
      : "No website is stored for this company yet, so this is a planning audit. Add the website URL to the prospect row for a stronger live audit.",
    wins: "The business has a clear local service and visual proof potential that can support stronger ads and website trust.",
    issues: "The system needs a confirmed website URL before the audit can be fully specific.",
    improvements: "Add the website URL, check the top CTA, form position, mobile call button, proof placement and whether enquiries are tracked.",
    outreachAngle: `Ask ${company} how their online enquiries are currently tracked, then offer to send one practical conversion idea.`,
    createdAt: displayDate()
  };
  state.websiteAudits = [audit, ...(state.websiteAudits || []).filter((item) => item.company !== company)];
  upsertLocalResearch(company, {
    websiteNotes: audit.summary,
    hook: `${company} has enough visible local service context to open with a light website/enquiry question.`,
    painPoint: "Online enquiry tracking and conversion clarity may not be fully optimised.",
    opportunity: "Tighten website CTA, proof and tracking before scaling paid ads.",
    angle: audit.outreachAngle,
    status: "Website audit complete"
  });
  addAgentOutput({
    agent: "Website Audit Agent",
    company,
    type: "Website audit",
    result: `${score}/100. ${audit.summary}`,
    nextAction: "Review the score categories, then approve or archive the audit.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Website Audit Agent", `Ran a profile website audit for ${company}.`);
  saveState();
  renderAll();
  showView("website-audits");
}

function generateProfileContentBrief(company) {
  const lead = leadForCompany(company);
  const research = ensureProfileResearch(company);
  const service = lead.service || "local renovation";
  const brief = {
    company,
    title: `${company} proof-led advert brief`,
    hook: research?.hook || `Show why ${company} is trusted for ${service}.`,
    format: "30-second Reel / Meta ad test",
    scenes: buildFilmingIdea(research || lead),
    cta: "Ask viewers to enquire or book a quick call/viewing/quote conversation.",
    source: "Company Profile Action",
    status: "Needs Review",
    createdAt: displayDate()
  };
  state.contentBriefs = [brief, ...(state.contentBriefs || []).filter((item) => item.company !== company || item.title !== brief.title)];
  addAgentOutput({
    agent: "Content Creation Agent",
    company,
    type: "Content brief",
    result: `Created a proof-led advert brief for ${company}.`,
    nextAction: "Review the scenes and approve before using it for filming.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Content Creation Agent", `Generated a profile content brief for ${company}.`);
  saveState();
  renderAll();
  showView("content-briefs");
}

function markProfileCallBooked(company) {
  const lead = leadForCompany(company);
  if (lead.company) {
    lead.status = "Call Booked";
    lead.nextAction = "Prepare 10-minute call notes and 14-day test explanation";
  }
  state.calls.unshift({
    company,
    contact: "Owner / decision maker",
    date: "To confirm",
    type: "10-minute intro call",
    outcome: "Booked from CRM action",
    nextStep: "Explain the capped 14-day local lead test and confirm ad spend is paid by the company.",
    value: 1500,
    status: "Call Booked",
    createdAt: displayDate()
  });
  addAgentOutput({
    agent: "Reply Triage Agent",
    company,
    type: "Call booked",
    result: "Moved this company into call preparation mode.",
    nextAction: "Prepare short call notes and avoid pitching the retainer too early.",
    approval: "No",
    status: "Used"
  });
  saveState();
  renderAll();
  showView("calls");
}

function moveProfileToClientTest(company) {
  const lead = leadForCompany(company);
  if (lead.company) {
    lead.status = "Proposal Sent";
    lead.nextAction = "Confirm test boundaries, filming date and ad spend";
  }
  const existing = state.delivery.find((item) => item.client === company);
  const delivery = {
    client: company,
    stage: "14-day local lead test",
    checklist: "Site visit, one filmed advert, Meta campaign, lead tracking and results review.",
    health: "Needs setup",
    adSpend: 100,
    leads: 0,
    cpl: 0,
    bookedCalls: 0,
    siteVisit: "To schedule",
    contentStatus: "Brief needed",
    campaignStatus: "Awaiting client ad spend",
    nextReview: "After test launches",
    nextAction: "Confirm filming date, service area, ad budget and lead routing"
  };
  if (existing) Object.assign(existing, delivery);
  else state.delivery.unshift(delivery);
  addAgentOutput({
    agent: "Operations Agent",
    company,
    type: "Client test setup",
    result: "Moved the company into a 14-day test delivery workflow.",
    nextAction: "Confirm boundaries before doing unpaid work.",
    approval: "No",
    status: "Needs Review"
  });
  saveState();
  renderAll();
  showView("delivery");
}

function runProfileAction(action, company) {
  if (!company) return;
  if (action === "outreach") return createProfileOutreachDraft(company);
  if (action === "audit") return runProfileWebsiteAudit(company);
  if (action === "brief") return generateProfileContentBrief(company);
  if (action === "call") return markProfileCallBooked(company);
  if (action === "test") return moveProfileToClientTest(company);
}

function renderWebsiteAudits() {
  const target = document.getElementById("websiteAuditList");
  if (!target) return;
  target.innerHTML = (state.websiteAudits || [])
    .map((item, index) => {
      const scores = item.scores || getAuditScores(`${item.company}-${item.url}`);
      const score = Number(item.score || averageAuditScore(scores));
      return `
      <article class="knowledge-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.url ? domainFromUrl(item.url) : "Website audit"}</p>
            <h2>${item.company}</h2>
          </div>
          <span class="${statusClass(item.status || "Needs Review")}">${score}/100</span>
        </div>
        ${scoreGrid(scores)}
        <p>${item.summary}</p>
        <p><strong>What works:</strong> ${item.wins}</p>
        <p><strong>Issues:</strong> ${item.issues}</p>
        <p><strong>Improvements:</strong> ${item.improvements}</p>
        <p><strong>Outreach angle:</strong> ${item.outreachAngle}</p>
        <p class="metric-note">${item.createdAt || ""}</p>
        ${statusButtons("websiteAudits", index, item.status)}
      </article>
    `;
    })
    .join("") || `<p class="metric-note">No website audits yet. Paste a URL and create one.</p>`;
}

function renderSocialAudits() {
  const target = document.getElementById("socialAuditList");
  if (!target) return;
  target.innerHTML = (state.socialAudits || [])
    .map((item, index) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.platform || "Social"}</p>
            <h2>${item.company}</h2>
          </div>
          <span class="${statusClass(item.status || "Needs Review")}">${item.score}/100</span>
        </div>
        <p><strong>Strengths:</strong> ${item.strengths}</p>
        <p><strong>Gaps:</strong> ${item.gaps}</p>
        <p><strong>Next action:</strong> ${item.nextAction}</p>
        ${statusButtons("socialAudits", index, item.status)}
      </article>
    `)
    .join("") || `<p class="metric-note">No social audits yet. Generate practice audits from your current prospects.</p>`;
}

function renderContentIdeas() {
  const target = document.getElementById("contentIdeaList");
  if (!target) return;
  target.innerHTML = (state.contentIdeas || [])
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.company}</strong>
          <span class="mini-stat">Content Creation Agent</span>
        </div>
        <p><strong>Ad hook:</strong> ${item.hook}</p>
        <p><strong>What to film:</strong> ${item.filming}</p>
        <p><strong>Meta angle:</strong> ${item.adAngle}</p>
        <p><strong>Talking points:</strong> ${item.talkingPoints}</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No content ideas yet. Sync company research first.</p>`;
}

function renderContentBriefs() {
  const target = document.getElementById("contentBriefList");
  if (!target) return;
  target.innerHTML = (state.contentBriefs || [])
    .map((item, index) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.company}</p>
            <h2>${item.title}</h2>
          </div>
          <span class="${statusClass(item.status || "Needs Review")}">${normaliseStatus(item.status)}</span>
        </div>
        <p><strong>Hook:</strong> ${item.hook}</p>
        <p><strong>Format:</strong> ${item.format}</p>
        <p><strong>Scenes:</strong> ${item.scenes}</p>
        <p><strong>CTA:</strong> ${item.cta}</p>
        <p class="metric-note">Source: ${item.source || "Content Creation Agent"}</p>
        ${statusButtons("contentBriefs", index, item.status)}
      </article>
    `)
    .join("") || `<p class="metric-note">No content briefs yet. Generate briefs from company research.</p>`;
}

function renderAgentOutputs() {
  const target = document.getElementById("agentOutputList");
  if (!target) return;
  target.innerHTML = (state.agentOutputs || [])
    .slice(0, 40)
    .map((item, index) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.agent}</p>
            <h2>${item.company}</h2>
          </div>
          <span class="${statusClass(item.status || "Needs Review")}">${normaliseStatus(item.status)}</span>
        </div>
        <p class="mini-stat">${item.type}</p>
        <p>${item.result}</p>
        <p><strong>Next action:</strong> ${item.nextAction}</p>
        <p class="metric-note">${item.createdAt || ""} · Approval needed: ${item.approval || "No"}</p>
        ${statusButtons("agentOutputs", index, item.status)}
      </article>
    `)
    .join("") || `<p class="metric-note">No agent outputs yet. Run an audit or practice agent action.</p>`;
}

function renderXelloSocial() {
  const target = document.getElementById("xelloSocialList");
  if (!target) return;
  target.innerHTML = (state.xelloSocial || [])
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.hook}</strong>
          <span class="${statusClass(item.status || "Planned")}">${item.status || "Planned"}</span>
        </div>
        <p><strong>Platform:</strong> ${item.platform}</p>
        <p><strong>Pillar:</strong> ${item.pillar}</p>
        <p><strong>Format:</strong> ${item.format}</p>
        <p><strong>Script:</strong> ${item.script}</p>
        <p><strong>CTA:</strong> ${item.cta}</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No Xello social plan yet. Generate a plan to create content ideas.</p>`;
}

function renderSocialCalendar() {
  const calendarTarget = document.getElementById("socialCalendarList");
  const pillarTarget = document.getElementById("pillarList");
  if (!calendarTarget || !pillarTarget) return;

  calendarTarget.innerHTML = (state.socialCalendar || defaultData.socialCalendar)
    .map((item) => `
      <article class="social-calendar-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.day}</p>
            <h2>${item.platform}</h2>
          </div>
          <span class="${statusClass(item.status || "Planned")}">${item.status || "Planned"}</span>
        </div>
        <p><strong>${item.focus}</strong></p>
        <p>${item.task}</p>
      </article>
    `)
    .join("");

  pillarTarget.innerHTML = (state.contentPillars || defaultData.contentPillars)
    .map((item) => `
      <article class="pillar-card">
        <p class="label">${item.pillar}</p>
        <h2>${item.goal}</h2>
        <p>${item.examples}</p>
      </article>
    `)
    .join("");
}

function renderOutreachVoice() {
  const target = document.getElementById("voiceList");
  if (!target) return;
  target.innerHTML = (state.outreachTraining || [])
    .map((item) => `
      <article class="knowledge-card">
        <div class="card-title-row">
          <strong>${item.rule}</strong>
          <span class="mini-stat">${item.owner}</span>
        </div>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");
}

function renderOutreachFeedback() {
  const target = document.getElementById("outreachFeedbackList");
  if (!target) return;
  target.innerHTML = (state.outreachFeedback || [])
    .slice(0, 12)
    .map((item) => `
      <article class="feedback-card">
        <div class="card-title-row">
          <div>
            <p class="label">${item.channel || "Draft"}</p>
            <h2>${item.company || "Outreach draft"}</h2>
          </div>
          <span class="${["Sounds real", "Good question"].includes(item.feedback) ? "status hot" : "status warning"}">${item.feedback}</span>
        </div>
        <p>${item.lesson}</p>
        <p class="metric-note">${item.createdAt || ""}</p>
      </article>
    `)
    .join("") || `<p class="metric-note">No feedback yet. Use the buttons on each draft to train the Outreach Writer.</p>`;
}

function renderPlaybooks() {
  document.getElementById("playbookGrid").innerHTML = state.playbooks
    .map((item) => `
      <article class="playbook-card">
        <div class="card-title-row">
          <strong>${item.name}</strong>
          <span class="mini-stat">${item.agent}</span>
        </div>
        <p>${item.steps}</p>
      </article>
    `)
    .join("");
}

function renderExperiments() {
  document.getElementById("experimentGrid").innerHTML = state.experiments
    .map((item) => `
      <article class="experiment-card">
        <div class="card-title-row">
          <strong>${item.name}</strong>
          <span class="${statusClass(item.status)}">${item.status}</span>
        </div>
        <p><strong>Hypothesis:</strong> ${item.hypothesis}</p>
        <p><strong>Result:</strong> ${item.result}</p>
        <p><strong>Learning:</strong> ${item.learning}</p>
      </article>
    `)
    .join("");
}

function renderDelivery() {
  document.getElementById("deliveryGrid").innerHTML = state.delivery
    .map((item) => `
      <article class="delivery-card">
        <div class="card-title-row">
          <strong>${item.client}</strong>
          <span class="${statusClass(item.health)}">${item.health}</span>
        </div>
        <p class="label">${item.stage}</p>
        <p>${item.checklist}</p>
        <div class="delivery-stats">
          <span>Ad spend: <strong>${money(item.adSpend || 0)}</strong></span>
          <span>Leads: <strong>${item.leads || 0}</strong></span>
          <span>CPL: <strong>${money(item.cpl || 0)}</strong></span>
          <span>Booked: <strong>${item.bookedCalls || 0}</strong></span>
        </div>
        <p><strong>Site visit:</strong> ${item.siteVisit || "Not set"}</p>
        <p><strong>Content:</strong> ${item.contentStatus || "Not set"}</p>
        <p><strong>Campaign:</strong> ${item.campaignStatus || "Not set"}</p>
        <p><strong>Next review:</strong> ${item.nextReview || "Not set"}</p>
        <p class="metric-note">Next action: ${item.nextAction || "Add next action"}</p>
      </article>
    `)
    .join("");

  const workflowTarget = document.getElementById("deliveryWorkflow");
  if (!workflowTarget) return;
  const workflow = [
    { step: "1. Confirm trial boundary", detail: "Client covers Meta ad spend. Xello provides one capped site visit, one filmed advert, one campaign and one review." },
    { step: "2. Prepare filming plan", detail: "Use company research to decide what makes the business stand out and what homeowner problem the advert should solve." },
    { step: "3. Film on site", detail: "Capture owner/team clips, service proof, finished details, process shots, vertical Reels and optional drone footage." },
    { step: "4. Launch simple Meta test", detail: "Use one clear offer, local targeting, lead form or landing page, and clean tracking back into the CRM." },
    { step: "5. Review results", detail: "Report spend, leads, CPL, booked quotes, follow-up speed and whether a retainer makes sense." }
  ];
  workflowTarget.innerHTML = workflow
    .map((item) => `
      <article class="workflow-card">
        <strong>${item.step}</strong>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");
}

function renderTestJourney() {
  const journeyTarget = document.getElementById("journeyTimeline");
  const proofTarget = document.getElementById("demoProofGrid");
  if (!journeyTarget || !proofTarget) return;

  journeyTarget.innerHTML = (state.testJourney || defaultData.testJourney)
    .map((item) => `
      <article class="journey-card">
        <div class="journey-marker"></div>
        <div>
          <div class="card-title-row">
            <div>
              <p class="label">${item.owner}</p>
              <h2>${item.stage}</h2>
            </div>
            <span class="${statusClass(item.status)}">${item.status}</span>
          </div>
          <p>${item.detail}</p>
        </div>
      </article>
    `)
    .join("");

  proofTarget.innerHTML = (state.demoProof || defaultData.demoProof)
    .map((item) => `
      <article class="knowledge-card">
        <p class="label">${item.title}</p>
        <p>${item.detail}</p>
      </article>
    `)
    .join("");
}

function calculateFinanceMetrics() {
  return [
    { label: "MRR", value: "£0", note: "Current", icon: "M" },
    { label: "3-client target", value: "£4.5k", note: "Monthly", icon: "3" },
    { label: "Pipeline", value: "£7.5k", note: "Potential", icon: "P" },
    { label: "Tool spend", value: money(state.spend.reduce((sum, item) => sum + Number(item.cost || 0), 0)), note: "Tracked", icon: "£" }
  ];
}

function renderFinance() {
  renderMetricCards("financeMetricGrid", calculateFinanceMetrics());
  document.getElementById("financeList").innerHTML = state.finance
    .map((item) => `
      <article class="finance-card">
        <div class="card-title-row">
          <strong>${item.metric}</strong>
          <span class="mini-stat">${item.value}</span>
        </div>
        <p>${item.note}</p>
      </article>
    `)
    .join("");
}

function renderRisks() {
  document.getElementById("riskList").innerHTML = state.risks
    .map((item) => `
      <article class="risk-card">
        <div class="card-title-row">
          <strong>${item.issue}</strong>
          <span class="${item.severity === "High" ? "status warning" : "status"}">${item.severity}</span>
        </div>
        <p>${item.fix}</p>
      </article>
    `)
    .join("");
}

function renderCeoBrief() {
  document.getElementById("ceoGrid").innerHTML = state.ceoBrief
    .map((item) => `
      <article class="ceo-card">
        <p class="label">${item.title}</p>
        <h2>${item.detail}</h2>
      </article>
    `)
    .join("");
}

function renderClients() {
  document.getElementById("clientGrid").innerHTML = state.clients
    .map((client) => `
      <article class="client-card">
        <p class="label">${client.status}</p>
        <h2>${client.company}</h2>
        <strong>${client.retainer}</strong>
        <span>${client.note}</span>
      </article>
    `)
    .join("");
}

function renderSpend() {
  document.getElementById("spendList").innerHTML = state.spend
    .map((item) => `
      <article class="spend-card">
        <p>${item.item}</p>
        <strong>${money(item.cost)}</strong>
        <span>${item.limit}</span>
      </article>
    `)
    .join("");
}

function addAgentLog(agent, event) {
  state.agentLogs = state.agentLogs || [];
  state.agentLogs.unshift({
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    agent,
    event
  });
}

function addAgentOutput(output) {
  state.agentOutputs = state.agentOutputs || [];
  state.agentOutputs.unshift({
    createdAt: displayDate(),
    approval: "No",
    ...output
  });
}

function createLocalWebsiteAudit(companyInput, urlInput) {
  const safeUrl = String(urlInput || "").trim();
  if (!safeUrl) return;
  const domain = domainFromUrl(safeUrl);
  const company = String(companyInput || "").trim() || titleFromDomain(domain);
  const service = domain.includes("resort") || domain.includes("lodge") ? "holiday lodge / resort sales" : "local service business";
  const scores = getAuditScores(`${company}-${safeUrl}`);
  const score = averageAuditScore(scores);
  const audit = {
    company,
    url: safeUrl,
    score,
    scores,
    status: "Needs Review",
    summary: `The page has a clear ${service} offer, but could convert more visitors if the CTA, enquiry form and proof journey were tightened.`,
    wins: "Clear product/service positioning, useful visual proof potential and enough information to create a strong trust-led advert.",
    issues: "Main action is not focused enough, enquiry capture may appear too late, visitor types are not separated, and proof/urgency could be closer to the top.",
    improvements: "Use one primary CTA, add a short above-the-fold enquiry form, create a sticky mobile call/viewing button, split buyer intent, and repeat proof near the CTA.",
    outreachAngle: `Compliment ${company}'s offer, mention one conversion idea, then ask if they are trying to increase tracked enquiries from the website.`,
    createdAt: displayDate()
  };

  state.websiteAudits = [audit, ...(state.websiteAudits || []).filter((item) => item.url !== safeUrl)];
  upsertLocalResearch(company, {
    websiteNotes: audit.summary,
    hook: `${company} has a strong visible offer but could likely turn more website visitors into enquiries with a clearer journey.`,
    painPoint: "Website interest may be leaking because the next step is not focused enough.",
    opportunity: "Improve CTA clarity, form position, proof placement and mobile action buttons.",
    angle: audit.outreachAngle,
    status: "Website audit complete"
  });
  addAgentOutput({
    agent: "Website Audit Agent",
    company,
    type: "Website audit",
    result: `${audit.score}/100. ${audit.summary}`,
    nextAction: "Use this as outreach context or call preparation.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Website Audit Agent", `Created website audit output for ${company}.`);
  saveState();
  renderAll();
  showView("website-audits");
}

function generateLocalSocialAudits() {
  const prospects = state.prospects.slice(0, 5);
  state.socialAudits = prospects.map((lead) => ({
    company: lead.company,
    platform: "Instagram",
    score: Math.max(62, Math.min(86, Number(lead.score || 70) - 10)),
    status: "Needs Review",
    strengths: `${lead.service || "Local service"} businesses usually have strong visual proof potential if project work is shown clearly.`,
    gaps: "Needs a clearer profile CTA, more recent proof, more before/after storytelling and more local homeowner-facing captions.",
    nextAction: "Create 3 Reel ideas: project reveal, problem/solution story and founder/team trust clip."
  }));
  addAgentOutput({
    agent: "Social Audit Agent",
    company: "Prospect batch",
    type: "Social audits",
    result: `Created ${state.socialAudits.length} practice social audit outputs.`,
    nextAction: "Use the gaps to improve DM context and content plans.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Social Audit Agent", `Generated ${state.socialAudits.length} practice social audits.`);
  saveState();
  renderAll();
  showView("social-audits");
}

function generateContentBriefsFromResearch() {
  const researchRows = (state.companyResearch || []).slice(0, 8);
  state.contentBriefs = researchRows.map((item) => ({
    company: item.company,
    title: `${item.company} advert/content brief`,
    hook: item.hook || `Show what makes ${item.company} worth enquiring with.`,
    format: "30-second Reel / Meta ad concept",
    scenes: buildFilmingIdea(item),
    cta: "Ask viewers to enquire, book a viewing, request a quote or arrange a 10-minute call.",
    source: "Company Research Agent",
    status: "Needs Review"
  }));
  addAgentOutput({
    agent: "Content Creation Agent",
    company: "Research batch",
    type: "Content briefs",
    result: `Created ${state.contentBriefs.length} content brief(s) from company research.`,
    nextAction: "Use briefs for filming plans, client calls and Meta test concepts.",
    approval: "No",
    status: "Needs Review"
  });
  addAgentLog("Content Creation Agent", `Generated ${state.contentBriefs.length} content briefs from research.`);
  saveState();
  renderAll();
  showView("content-briefs");
}

function upsertLocalResearch(company, updates) {
  state.companyResearch = state.companyResearch || [];
  const index = state.companyResearch.findIndex((item) => item.company === company);
  const base = {
    company,
    hook: "",
    painPoint: "",
    opportunity: "",
    angle: "",
    websiteNotes: "",
    instagramNotes: "",
    status: "Practice complete"
  };
  if (index === -1) {
    state.companyResearch.unshift({ ...base, ...updates });
  } else {
    state.companyResearch[index] = { ...base, ...state.companyResearch[index], ...updates };
  }
}

function addOrUpdateAgentTask(task) {
  state.agentTasks = state.agentTasks || [];
  const index = state.agentTasks.findIndex((item) => item.task === task.task && item.agent === task.agent);
  if (index === -1) {
    state.agentTasks.unshift(task);
  } else {
    state.agentTasks[index] = { ...state.agentTasks[index], ...task };
  }
}

function runAllAgentsPractice() {
  const practiceProspects = [
    { company: "Brighton Heritage Renovations", area: "Brighton", service: "Period renovations", score: 92, status: "New Prospect", nextAction: "Research and draft soft opener" },
    { company: "Hove Loft & Extension Co", area: "Hove", service: "Loft conversions", score: 88, status: "New Prospect", nextAction: "Research and plan filming angle" }
  ];

  practiceProspects.forEach((lead) => {
    if (!state.prospects.some((item) => item.company === lead.company)) {
      state.prospects.unshift(lead);
    }
  });

  const activeProspects = state.prospects.slice(0, 4);
  activeProspects.forEach((lead) => {
    upsertLocalResearch(lead.company, {
      hook: `Local ${lead.service || "renovation"} company around ${lead.area || "Brighton"} with work homeowners would want to see clearly online.`,
      painPoint: "Likely relies on referrals or scattered online attention rather than a tracked enquiry journey.",
      opportunity: "Use stronger online presence, clearer project proof and simple lead tracking to create better conversations.",
      angle: "Open with a compliment, one Xello context line and a question about where enquiries come from.",
      websiteNotes: "Practice website audit: check CTA clarity, mobile enquiry flow, trust proof, project examples and tracking.",
      instagramNotes: "Practice social audit: look for recent project proof, before/after posts, enquiry prompts and local trust signals.",
      status: "Practice research complete"
    });
  });

  state.contentIdeas = activeProspects.map((lead) => ({
    company: lead.company,
    hook: `From hidden project quality to local homeowner enquiries`,
    filming: `Film a short project walkthrough for ${lead.service || "renovation"} work: exterior/context shot, details, finished result and Sam explaining the homeowner problem.`,
    adAngle: `Local ${lead.area || "Brighton"} homeowners looking for trustworthy ${String(lead.service || "renovation").toLowerCase()} help.`,
    talkingPoints: "Show workmanship, local trust, simple enquiry CTA, and avoid any guaranteed results."
  }));

  state.drafts = refreshedOutreachDrafts();
  state.replies = practiceReplies();
  state.replyResponses = state.replies.map(createLocalReplyResponse);

  state.xelloSocial = [
    {
      platform: "Instagram Reels",
      pillar: "Marketing education",
      hook: "Why renovation companies should track every enquiry source",
      format: "Talking-head Reel with captions and CRM screen recording",
      script: "Open with the problem, show word of mouth vs website vs Instagram, explain why tracking matters before scaling ads.",
      cta: "Follow Xello Media for practical local marketing breakdowns",
      status: "Practice planned"
    },
    {
      platform: "TikTok",
      pillar: "Founder journey",
      hook: "Building a Brighton marketing agency from zero, one local company at a time",
      format: "Behind-the-scenes video",
      script: "Show research, CRM, camera kit and how Sam prepares a 14-day local lead test.",
      cta: "Comment a local business I should audit next",
      status: "Practice planned"
    },
    ...(state.xelloSocial || []).slice(0, 4)
  ];

  state.ceoBrief = [
    { title: "Practice run result", detail: "All core agents completed a safe local dry run: scanner, research, website/social audit, content, outreach, reply triage, Xello social and reporting." },
    { title: "Best next action", detail: "Paste and redeploy the latest Apps Script, then run the live cycle in small batches so API spend stays controlled." },
    { title: "Main risk", detail: "The system should still stay approval-first. No emails, DMs, posts or ads should go out automatically." }
  ];

  state.memory = [
    {
      insight: "Practice run confirmed the strongest workflow is research first, then outreach, then reply triage into a 10-minute call.",
      source: "Agent practice run",
      confidence: 85,
      action: "Keep first touch light and explain the 14-day test only after a reply."
    },
    ...(state.memory || []).slice(0, 6)
  ];

  [
    ["Prospect Scanner", "Complete", `Practice scanned ${practiceProspects.length} local prospects`, 100],
    ["Company Research Agent", "Complete", `Practice researched ${activeProspects.length} companies`, 100],
    ["Website Audit Agent", "Complete", `Practice audited ${activeProspects.length} website journeys`, 100],
    ["Social Audit Agent", "Complete", `Practice audited ${activeProspects.length} social profiles`, 100],
    ["Content Creation Agent", "Complete", `Practice generated ${state.contentIdeas.length} content idea(s)`, 100],
    ["Outreach Writer", "Waiting Approval", `Practice generated ${state.drafts.length} outreach draft(s)`, 100],
    ["Reply Triage Agent", "Waiting Approval", `Practice drafted ${state.replyResponses.length} response(s)`, 100],
    ["Xello Social Growth Agent", "Complete", "Practice planned Xello social posts", 100],
    ["Reporting Agent", "Complete", "Practice generated CEO brief", 100]
  ].forEach(([name, status, currentTask, progress]) => {
    state.agents = state.agents.map((agent) =>
      agent.name === name
        ? { ...agent, status, currentTask, progress, lastRun: "Just now", outputs: Math.max(Number(agent.outputs || 0), 1) }
        : agent
    );
  });

  [
    { task: "Practice scan local renovation prospects", agent: "Prospect Scanner", related: "Prospects", status: "Complete", priority: "High", progress: 100, cost: 0, approval: "No" },
    { task: "Practice research and audit handoff", agent: "Company Research Agent", related: "Company Research", status: "Complete", priority: "High", progress: 100, cost: 0, approval: "No" },
    { task: "Practice content creation from research", agent: "Content Creation Agent", related: "Content", status: "Complete", priority: "Medium", progress: 100, cost: 0, approval: "No" },
    { task: "Practice outreach approval flow", agent: "Outreach Writer", related: "Outreach Drafts", status: "Waiting Approval", priority: "High", progress: 100, cost: 0, approval: "Yes" },
    { task: "Practice reply triage into 10-minute call", agent: "Reply Triage Agent", related: "Reply Responses", status: "Waiting Approval", priority: "High", progress: 100, cost: 0, approval: "Yes" },
    { task: "Practice CEO reporting", agent: "Reporting Agent", related: "CEO Brief", status: "Complete", priority: "Medium", progress: 100, cost: 0, approval: "No" }
  ].forEach(addOrUpdateAgentTask);

  addAgentLog("System", "Practice ran every AI agent locally without sending messages, posting content or spending API credits.");
  saveState();
  renderAll();
}

function addLocalDemoReplies() {
  const replyProspects = state.prospects.filter((lead) => lead.status !== "Test Prospect").slice(0, 2);
  if (!replyProspects.length) return;

  state.replies = state.replies || [];
  state.calls = state.calls || [];

  replyProspects.forEach((lead, index) => {
    if (state.replies.some((reply) => reply.company === lead.company)) return;
    const isFirst = index === 0;
    state.replies.unshift({
      company: lead.company,
      channel: isFirst ? "Email" : "Instagram DM",
      type: isFirst ? "Warm question" : "Process question",
      summary: isFirst
        ? `Demo reply: ${lead.company} said most of their work comes from referrals, but they would like more consistent website or Instagram enquiries and asked what you had in mind.`
        : `Demo reply: ${lead.company} said Instagram brings in a few people but nothing consistent, and asked what the process would involve.`,
      nextAction: "Explain 14-day test and ask for 10-minute call",
      status: isFirst ? "Warm Reply" : "Follow Up",
      createdAt: "Demo"
    });
  });

  const callLead = replyProspects[0];
  if (callLead && !state.calls.some((call) => call.company === callLead.company)) {
    state.calls.unshift({
      company: callLead.company,
      contact: "Owner",
      date: "Next week",
      type: "10-minute intro call",
      outcome: "Demo booked call",
      nextStep: "Explain the 14-day local lead test and confirm ad spend boundary",
      value: 1500,
      status: "Call Booked"
    });
  }

  state.prospects = state.prospects.map((lead) => {
    if (callLead && lead.company === callLead.company) {
      return { ...lead, status: "Call Booked", nextAction: "Explain 14-day test on 10-minute call" };
    }
    if (replyProspects[1] && lead.company === replyProspects[1].company) {
      return { ...lead, status: "Warm Reply", nextAction: "Send 14-day test outline" };
    }
    return lead;
  });

  addAgentLog("Reply Triage Agent", "Added demo replies and moved prospects into warm/call stages.");
  saveState();
  renderAll();
}

function runLocalDemoJourney() {
  const company = "First Touch Innovations";

  if (!state.prospects.some((lead) => lead.company === company)) {
    state.prospects.unshift({
      company,
      area: "Brighton",
      service: "Home renovation",
      score: 95,
      status: "Call Booked",
      nextAction: "Prepare 14-day test call"
    });
  } else {
    state.prospects = state.prospects.map((lead) =>
      lead.company === company ? { ...lead, status: "Call Booked", nextAction: "Prepare 14-day test call" } : lead
    );
  }

  if (!state.companyResearch.some((row) => row.company === company)) {
    state.companyResearch.unshift({
      company,
      hook: "Local Brighton renovation company with strong before/after content potential.",
      painPoint: "Could turn more local interest into tracked quote enquiries with clearer ads and lead follow-up.",
      opportunity: "Use Sam's on-site filming setup to create a credible local Meta advert.",
      angle: "Open with a friendly local 10-minute chat, then explain the capped 14-day test.",
      status: "Research complete"
    });
  }

  if (!state.drafts.some((draft) => draft.company === company)) {
    state.drafts.unshift({
      channel: "Email",
      company,
      subject: "Quick local marketing idea for First Touch Innovations",
      status: "Approved",
      message: "Hi First Touch Innovations team, I’m Sam from Xello Media. I’m based around Brighton/Hove, studied Digital Marketing at Falmouth University and I’m looking to work with local renovation companies. I had a couple of ideas around filming a proper local advert and tracking enquiries from Meta. Would you be open to a quick 10-minute chat?"
    });
  }

  if (!state.replies.some((reply) => reply.company === company)) {
    state.replies.unshift({
      company,
      channel: "Email",
      type: "Interested",
      summary: "Demo reply: they like the idea and are open to a short call to understand the 14-day test.",
      nextAction: "Book 10-minute call and explain client covers Meta ad spend.",
      status: "Warm Reply",
      createdAt: "Demo"
    });
  }

  if (!state.calls.some((call) => call.company === company)) {
    state.calls.unshift({
      company,
      contact: "Owner",
      date: "This week",
      type: "10-minute intro call",
      outcome: "Demo booked",
      nextStep: "Pitch capped 14-day lead test and confirm site visit date.",
      value: 1500,
      status: "Call Booked"
    });
  }

  const existingDelivery = state.delivery.find((item) => item.client === company);
  if (existingDelivery) {
    Object.assign(existingDelivery, {
      stage: "14-day test",
      health: "Demo",
      adSpend: existingDelivery.adSpend || 100,
      siteVisit: existingDelivery.siteVisit || "To schedule",
      contentStatus: "Filming plan ready",
      campaignStatus: "Awaiting ad spend confirmation",
      nextReview: "After 14-day test",
      nextAction: "Confirm filming date, ad spend and lead routing"
    });
  } else {
    state.delivery.unshift({
      client: company,
      stage: "14-day test",
      checklist: "Site visit, filmed advert, Meta test, lead tracking and results review.",
      health: "Demo",
      adSpend: 100,
      leads: 0,
      cpl: 0,
      bookedCalls: 0,
      siteVisit: "To schedule",
      contentStatus: "Filming plan ready",
      campaignStatus: "Awaiting ad spend confirmation",
      nextReview: "After 14-day test",
      nextAction: "Confirm filming date, ad spend and lead routing"
    });
  }

  state.testJourney = defaultData.testJourney.map((item) => ({
    ...item,
    status: ["6. 14-day test", "7. Retainer follow-up"].includes(item.stage) ? item.status : "Complete"
  }));

  addAgentLog("System", "Ran a full safe demo journey for First Touch Innovations.");
  saveState();
  renderAll();
}

function renderAll() {
  renderMetrics();
  renderHotLeads();
  renderProspects(document.getElementById("prospectSearch")?.value || "");
  renderProfiles();
  renderCompanyResearch();
  renderWebsiteAudits();
  renderSocialAudits();
  renderContentIdeas();
  renderContentBriefs();
  renderXelloSocial();
  renderSocialCalendar();
  renderTodayActions();
  renderTasks();
  renderPipeline();
  renderDrafts();
  renderAgents();
  renderAgentTasks();
  renderAgentOutputs();
  renderApprovals();
  renderAgentLogs();
  renderReplies();
  renderReplyResponses();
  renderMasterApprovals();
  renderMemory();
  renderKnowledge();
  renderOutreachVoice();
  renderOutreachFeedback();
  renderPlaybooks();
  renderExperiments();
  renderDelivery();
  renderTestJourney();
  renderFinance();
  renderRisks();
  renderCeoBrief();
  renderClients();
  renderSpend();
  updateConnectionBar();
  bindStatusButtons();
  applyClickedButtonStates();
}

function updateConnectionBar() {
  const url = getApiUrl();
  if (url && liveMode) {
    setConnectionStatus("Connected to Google Sheets. Dashboard is showing live sheet data when synced.", true);
  } else if (url) {
    setConnectionStatus("Google Sheet URL saved. Click Sync Sheet to load live data.", false);
  } else {
    setConnectionStatus("Using local demo data. Connect your Google Sheet to show live business data.", false);
  }
}

function loadLiveSheetData() {
  const url = getApiUrl();
  if (!url) {
    setConnectionStatus("Paste your Google Sheets Web App URL first, then save it.", false);
    openSheetDialog();
    return;
  }

  const callbackName = `xelloSheetCallback_${Date.now()}`;
  const script = document.createElement("script");
  const separator = url.includes("?") ? "&" : "?";
  script.src = `${url}${separator}callback=${callbackName}`;

  setConnectionStatus("Syncing live Google Sheets data...", false);

  window[callbackName] = (payload) => {
    try {
      applySheetPayload(payload);
      liveMode = true;
      saveState();
      renderAll();
      setConnectionStatus(`Connected to Google Sheets. Last synced ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`, true);
    } catch (error) {
      setConnectionStatus(`Sync failed: ${error.message}`, false);
    } finally {
      delete window[callbackName];
      script.remove();
    }
  };

  script.onerror = () => {
    setConnectionStatus("Sync failed. Check the Web App URL and deployment access.", false);
    delete window[callbackName];
    script.remove();
  };

  document.body.appendChild(script);
}

function applySheetPayload(payload) {
  const sheets = payload && payload.sheets;
  if (!sheets) throw new Error("No sheets data returned");

  state.prospects = mapProspects(sheets["Prospects"] || []);
  state.companyResearch = mapCompanyResearch(sheets["Company Research"] || []);
  state.websiteAudits = mapWebsiteAudits(sheets["Website Audits"] || []);
  state.socialAudits = mapSocialAudits(sheets["Social Audits"] || []);
  state.contentIdeas = mapContentIdeas(sheets["Content"] || [], state.companyResearch);
  state.contentBriefs = mapContentBriefs(sheets["Content Briefs"] || []);
  state.xelloSocial = mapXelloSocial(sheets["Xello Social Plan"] || []);
  state.outreachFeedback = mapOutreachFeedback(sheets["Outreach Feedback"] || []);
  state.socialCalendar = state.socialCalendar || defaultData.socialCalendar;
  state.contentPillars = state.contentPillars || defaultData.contentPillars;
  state.drafts = mapDrafts(sheets["Outreach Drafts"] || []);
  state.replies = mapReplies(sheets["Replies"] || []);
  state.replyResponses = mapReplyResponses(sheets["Reply Responses"] || []);
  state.calls = mapCalls(sheets["Calls"] || []);
  state.clients = mapClients(sheets["Clients"] || []);
  state.spend = mapSpend(sheets["Spend"] || []);
  state.agents = mapAgents(sheets["AI Agents"] || []);
  state.agentTasks = mapAgentTasks(sheets["Agent Tasks"] || []);
  state.agentLogs = mapAgentLogs(sheets["CEO Brief"] || [], sheets["Risks"] || []);
  state.agentOutputs = mapAgentOutputs(sheets["Agent Outputs"] || []);
  state.memory = mapMemory(sheets["Agent Memory"] || []);
  state.knowledge = state.knowledge || defaultData.knowledge;
  state.outreachTraining = mapOutreachTraining(sheets["Outreach Training"] || [], sheets["Settings"] || []);
  state.playbooks = state.playbooks || defaultData.playbooks;
  state.experiments = mapExperiments(sheets["Experiments"] || []);
  state.delivery = mapDelivery(sheets["Clients"] || []);
  state.testJourney = state.testJourney || defaultData.testJourney;
  state.demoProof = state.demoProof || defaultData.demoProof;
  state.risks = mapRisks(sheets["Risks"] || []);
  state.finance = mapFinance(sheets["Finances"] || []);
  state.ceoBrief = mapCeoBrief(sheets["CEO Brief"] || []);
}

function mapProspects(rows) {
  return rows.map((row) => ({
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unnamed prospect",
    area: row.area || "",
    service: row.service || "",
    score: Number(row.lead_score || 50),
    status: row.status || "New Prospect",
    nextAction: row.next_action || "",
    website: row.website || "",
    instagram: row.instagram || "",
    email: row.email || "",
    phone: row.phone || "",
    source: row.source || "",
    notes: row.notes || ""
  }));
}

function mapCompanyResearch(rows) {
  if (!rows.length) return defaultData.companyResearch;
  return rows.map((row) => ({
    researchId: row.research_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unknown company",
    websiteNotes: row.website_notes || "",
    instagramNotes: row.instagram_notes || "",
    hook: row.personalised_hook || "",
    painPoint: row.pain_point || "",
    opportunity: row.opportunity || "",
    angle: row.outreach_angle || "",
    status: row.status || "Research complete"
  }));
}

function mapWebsiteAudits(rows) {
  if (!rows.length) return state.websiteAudits || defaultData.websiteAudits;
  return rows.slice(-80).reverse().map((row) => {
    const scores = {
      cta: Number(row.cta_score || 0),
      mobile: Number(row.mobile_score || 0),
      trust: Number(row.trust_score || 0),
      form: Number(row.form_score || 0),
      speed: Number(row.speed_score || 0),
      offer: Number(row.offer_score || 0)
    };
    const generatedScores = Object.values(scores).some(Boolean) ? scores : getAuditScores(`${row.company_name || ""}-${row.website || ""}`);
    return {
      auditId: row.audit_id || "",
      prospectId: row.prospect_id || "",
      company: row.company_name || "Website audit",
      url: row.website || "",
      score: Number(row.overall_score || averageAuditScore(generatedScores)),
      scores: generatedScores,
      status: normaliseStatus(row.status),
      summary: row.summary || "",
      wins: row.wins || "",
      issues: row.issues || "",
      improvements: row.improvements || "",
      outreachAngle: row.outreach_angle || "",
      createdAt: row.created_at || ""
    };
  });
}

function mapSocialAudits(rows) {
  if (!rows.length) return state.socialAudits || defaultData.socialAudits;
  return rows.slice(-80).reverse().map((row) => ({
    auditId: row.social_audit_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Social audit",
    platform: row.platform || "Instagram",
    score: Number(row.score || 70),
    strengths: row.strengths || "",
    gaps: row.gaps || "",
    nextAction: row.next_action || "",
    status: normaliseStatus(row.status),
    createdAt: row.created_at || ""
  }));
}

function mapContentBriefs(rows) {
  if (!rows.length) return state.contentBriefs || defaultData.contentBriefs;
  return rows.slice(-80).reverse().map((row) => ({
    briefId: row.brief_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Content brief",
    title: row.title || "Untitled brief",
    hook: row.hook || "",
    format: row.format || "",
    scenes: row.scenes || "",
    cta: row.cta || "",
    source: row.source || "Content Creation Agent",
    status: normaliseStatus(row.status),
    createdAt: row.created_at || ""
  }));
}

function mapAgentOutputs(rows) {
  if (!rows.length) return state.agentOutputs || defaultData.agentOutputs;
  return rows.slice(-80).reverse().map((row) => ({
    outputId: row.output_id || "",
    agent: row.agent_name || "AI Agent",
    company: row.company_name || "System",
    type: row.output_type || "Output",
    result: row.result || "",
    nextAction: row.next_action || "",
    approval: row.approval_required || "No",
    status: normaliseStatus(row.status),
    createdAt: row.created_at || ""
  }));
}

function mapContentIdeas(rows, researchRows = []) {
  if (rows.length) {
    return rows.map((row) => ({
      company: row.company_name || "Content item",
      hook: row.hook || row.title || "Content hook needed",
      filming: row.notes || row.caption || "Film a clear before/after or project walkthrough.",
      adAngle: row.platform ? `${row.platform} content idea` : "Meta ad test angle",
      talkingPoints: row.caption || row.performance || "Local proof, quality, process and clear enquiry CTA."
    }));
  }

  const researchIdeas = (researchRows || []).slice(0, 8).map((item) => ({
    company: item.company,
    hook: item.hook || `Show what makes ${item.company} stand out locally.`,
    filming: buildFilmingIdea(item),
    adAngle: item.angle || "Use a local homeowner problem/solution angle.",
    talkingPoints: [item.painPoint, item.opportunity].filter(Boolean).join(" ") || "Trust, local expertise, project quality and a simple quote CTA."
  }));

  return researchIdeas.length ? researchIdeas : defaultData.contentIdeas;
}

function buildFilmingIdea(item) {
  const service = String(item.angle || item.opportunity || "").toLowerCase();
  if (service.includes("loft")) return "Drone exterior, stairs reveal, natural light shots, storage/space transformation and owner voiceover.";
  if (service.includes("extension")) return "Drone exterior, before/after walkthrough, structure-to-finish shots and a simple homeowner problem/solution story.";
  if (service.includes("kitchen")) return "Close-ups of finishes, cabinet details, worktop reveal, family-use angle and short owner explanation.";
  if (service.includes("roof")) return "Drone roof inspection style, problem area, repair process, safety/trust angle and clear call-to-action.";
  return "Project walkthrough, team at work, finished details, local trust proof and a short direct-to-camera explanation.";
}

function mapXelloSocial(rows) {
  if (!rows.length) return defaultData.xelloSocial;
  return rows.map((row) => ({
    platform: row.platform || "Instagram Reels",
    pillar: row.content_pillar || row.pillar || "Marketing education",
    hook: row.hook || row.title || "Social content idea",
    format: row.format || "Short-form video",
    script: row.script || row.caption || "",
    cta: row.cta || "Follow Xello Media for local marketing ideas",
    status: row.status || "Planned"
  }));
}

function mapDrafts(rows) {
  return rows.map((row) => ({
    draftId: row.draft_id || "",
    prospectId: row.prospect_id || "",
    channel: row.channel || "Email",
    company: row.company_name || "Unknown company",
    subject: row.subject || "No subject",
    status: row.status || "Needs review",
    message: row.message || row.follow_up || ""
  }));
}

function mapOutreachFeedback(rows) {
  if (!rows.length) return state.outreachFeedback || defaultData.outreachFeedback;
  return rows.slice(-40).reverse().map((row) => ({
    feedbackId: row.feedback_id || "",
    draftId: row.draft_id || "",
    company: row.company_name || "Outreach draft",
    channel: row.channel || "Draft",
    feedback: row.feedback || "Feedback",
    lesson: row.lesson || row.notes || "",
    createdAt: row.created_at || ""
  }));
}

function mapReplies(rows) {
  if (!rows.length) return defaultData.replies;
  return rows.map((row) => ({
    replyId: row.reply_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unknown company",
    channel: row.channel || "Email",
    type: row.reply_type || "Reply",
    summary: row.summary || "",
    nextAction: row.next_action || "",
    status: row.status || "Logged",
    createdAt: row.created_at || ""
  }));
}

function mapReplyResponses(rows) {
  if (!rows.length) return state.replyResponses || defaultData.replyResponses;
  return rows.slice(-40).reverse().map((row) => ({
    responseId: row.response_id || "",
    replyId: row.reply_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unknown company",
    channel: row.channel || "Email",
    type: row.reply_type || "Suggested response",
    status: row.status || "Needs review",
    message: row.response_message || "",
    nextAction: row.call_cta || "Ask for 10-minute call",
    createdAt: row.created_at || ""
  }));
}

function mapCalls(rows) {
  if (!rows.length) return defaultData.calls;
  return rows.map((row) => ({
    callId: row.call_id || "",
    prospectId: row.prospect_id || "",
    company: row.company_name || "Unknown company",
    contact: row.contact_name || "Contact",
    date: row.call_date || "",
    type: row.call_type || "Call",
    outcome: row.outcome || "",
    nextStep: row.next_step || "",
    value: Number(row.estimated_value || 0),
    status: row.status || "Logged",
    createdAt: row.created_at || ""
  }));
}

function mapClients(rows) {
  if (!rows.length) return defaultData.clients;
  return rows.map((row) => ({
    company: row.company_name || "Unnamed client",
    retainer: row.monthly_retainer ? `£${Number(row.monthly_retainer).toLocaleString()}/mo` : "No retainer set",
    status: row.status || "Tracked",
    note: row.notes || `Meta: ${row.meta_access || "unknown"} · Website: ${row.website_access || "unknown"}`
  }));
}

function mapSpend(rows) {
  if (!rows.length) return defaultData.spend;
  return rows.map((row) => ({
    item: `${row.provider || "Tool"} - ${row.action || "usage"}`,
    cost: Number(row.cost_gbp || 0),
    limit: row.notes || row.model_or_api || ""
  }));
}

function mapAgents(rows) {
  if (!rows.length) return defaultData.agents;
  const mapped = rows.map((row) => ({
    name: row.agent_name || "Unnamed Agent",
    purpose: row.purpose || "",
    status: row.status || "Idle",
    currentTask: row.current_task || "",
    progress: Number(row.progress || 0),
    lastRun: row.last_run || "",
    nextRun: row.next_run || "",
    cost: Number(row.cost_gbp || 0),
    outputs: Number(row.outputs || 0)
  }));
  const existingNames = new Set(mapped.map((agent) => agent.name));
  defaultData.agents.forEach((agent) => {
    if (!existingNames.has(agent.name)) mapped.push(agent);
  });
  return mapped;
}

function mapAgentTasks(rows) {
  if (!rows.length) return defaultData.agentTasks;
  return rows.map((row) => ({
    taskId: row.task_id || "",
    task: row.task || "Untitled task",
    agent: row.agent_name || "Unknown agent",
    related: row.related_sheet || "",
    status: row.status || "Queued",
    priority: row.priority || "Medium",
    progress: Number(row.progress || 0),
    cost: Number(row.cost_gbp || 0),
    approval: row.approval_required || "No"
  }));
}

function mapMemory(rows) {
  if (!rows.length) return defaultData.memory;
  return rows.map((row) => ({
    insight: row.insight || "",
    source: row.source || "",
    confidence: Number(row.confidence || 50),
    action: row.recommended_action || ""
  }));
}

function mapOutreachTraining(rows, settingsRows = []) {
  if (rows.length) {
    return rows.map((row) => ({
      rule: row.rule || "Rule",
      detail: row.detail || "",
      owner: row.owner || "Xello"
    }));
  }
  const settings = settingsRows.map((row) => ({
    rule: row.key || "Setting",
    detail: row.value || row.notes || "",
    owner: "Settings"
  }));
  return settings.length ? settings : defaultData.outreachTraining;
}

function mapExperiments(rows) {
  if (!rows.length) return defaultData.experiments;
  return rows.map((row) => ({
    name: row.name || "Untitled experiment",
    hypothesis: row.hypothesis || "",
    status: row.status || "Planned",
    result: row.result || "No result yet",
    learning: row.learning || ""
  }));
}

function mapDelivery(rows) {
  if (!rows.length) return defaultData.delivery;
  return rows.map((row) => ({
    client: row.company_name || "Unnamed client",
    stage: row.status || "Client",
    checklist: `Meta: ${row.meta_access || "not set"}, Website: ${row.website_access || "not set"}, Tracking: ${row.lead_tracking || "not set"}, Report: ${row.weekly_report || "not set"}`,
    health: row.status || "Tracked",
    adSpend: Number(row.ad_spend || row.ad_budget || 0),
    leads: Number(row.leads || row.leads_generated || 0),
    cpl: Number(row.cpl || row.cost_per_lead || 0),
    bookedCalls: Number(row.booked_calls || row.calls_booked || 0),
    siteVisit: row.site_visit || row.site_visit_date || "Not set",
    contentStatus: row.content_status || row.content_filmed || "Not set",
    campaignStatus: row.campaign_status || row.meta_status || "Not set",
    nextReview: row.next_review || row.review_date || "Not set",
    nextAction: row.next_action || row.notes || "Add next action"
  }));
}

function mapRisks(rows) {
  if (!rows.length) return defaultData.risks;
  return rows.map((row) => ({
    issue: row.issue || "",
    severity: row.severity || "Medium",
    fix: row.fix || ""
  }));
}

function mapFinance(rows) {
  if (!rows.length) return defaultData.finance;
  return rows.slice(0, 8).map((row) => ({
    metric: row.type || row.description || "Finance item",
    value: row.amount_gbp ? `£${Number(row.amount_gbp).toLocaleString()}` : row.status || "",
    note: row.notes || row.company_name || ""
  }));
}

function mapCeoBrief(rows) {
  if (!rows.length) return defaultData.ceoBrief;
  return rows.slice(-6).map((row) => ({
    title: row.section || "Brief",
    detail: row.summary || row.recommended_action || ""
  }));
}

function mapAgentLogs(ceoRows, riskRows) {
  const ceoLogs = ceoRows.slice(-3).map((row) => ({
    time: row.date || "",
    agent: "Reporting Agent",
    event: `${row.section || "Brief"}: ${row.summary || ""}`
  }));
  const riskLogs = riskRows.slice(-3).map((row) => ({
    time: row.updated_at || row.created_at || "",
    agent: "Risk Monitor",
    event: `${row.severity || "Risk"}: ${row.issue || ""}`
  }));
  return [...ceoLogs, ...riskLogs].length ? [...ceoLogs, ...riskLogs] : defaultData.agentLogs;
}

function showView(viewId) {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  const activeButton = document.querySelector(`.nav-item[data-view="${viewId}"]`);
  activeButton?.closest("details")?.setAttribute("open", "");
}

document.addEventListener(
  "click",
  (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    markButtonClicked(button);
  },
  true
);

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.view);
  });
});

document.getElementById("prospectSearch").addEventListener("input", (event) => {
  renderProspects(event.target.value);
});

document.getElementById("websiteAuditForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  createLocalWebsiteAudit(form.get("company"), form.get("url"));
  event.target.reset();
});

document.getElementById("generateSocialAuditsLocalBtn").addEventListener("click", generateLocalSocialAudits);

document.getElementById("generateContentBriefsBtn").addEventListener("click", generateContentBriefsFromResearch);

const dialog = document.getElementById("leadDialog");
document.getElementById("addLeadBtn").addEventListener("click", () => dialog.showModal());
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());

const sheetDialog = document.getElementById("sheetDialog");
const sheetForm = document.getElementById("sheetForm");
const sheetUrlInput = document.getElementById("sheetUrlInput");

function openSheetDialog() {
  sheetUrlInput.value = getApiUrl();
  sheetDialog.showModal();
  setTimeout(() => sheetUrlInput.focus(), 50);
}

document.getElementById("leadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  state.prospects.unshift({
    company: form.get("company"),
    area: form.get("area"),
    service: form.get("service"),
    score: Number(form.get("score")),
    status: form.get("status"),
    nextAction: form.get("nextAction")
  });
  saveState();
  event.target.reset();
  dialog.close();
  renderAll();
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "xello-crm-data.json";
  link.click();
  URL.revokeObjectURL(url);
});

document.getElementById("connectSheetBtn").addEventListener("click", () => {
  openSheetDialog();
});

document.getElementById("closeSheetDialog").addEventListener("click", () => {
  sheetDialog.close();
});

document.getElementById("closeAgentDialog").addEventListener("click", () => {
  document.getElementById("agentDialog").close();
});

sheetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(sheetForm);
  const entered = String(form.get("sheetUrl") || "").trim();
  if (!entered) return;
  saveApiUrl(entered);
  sheetDialog.close();
  updateConnectionBar();
});

document.getElementById("syncBtn").addEventListener("click", loadLiveSheetData);

document.getElementById("todaySyncBtn").addEventListener("click", loadLiveSheetData);

document.getElementById("createTasksBtn").addEventListener("click", () => {
  callSheetAction("createDraftTasks", {}, "Creating outreach tasks for new prospects...");
});

document.getElementById("refreshOutreachExamplesBtn").addEventListener("click", refreshLocalOutreachExamples);

document.getElementById("generateDraftsBtn").addEventListener("click", () => {
  callSheetAction("generateDrafts", {}, "Generating approved outreach drafts...");
});

document.getElementById("demoRepliesBtn").addEventListener("click", () => {
  addLocalDemoReplies();
  callSheetAction("addDemoReplies", {}, "Adding demo replies and call data...");
});

document.getElementById("practiceReplyFlowBtn").addEventListener("click", runPracticeReplyFlow);

document.getElementById("triageRepliesBtn").addEventListener("click", () => {
  triageLocalReplies();
  callSheetAction("triageReplies", {}, "Reply Triage Agent is drafting suggested responses...");
});

document.getElementById("scanProspectsBtn").addEventListener("click", () => {
  callSheetAction("scanProspects", {}, "Scanning Google Places for new local prospects...");
});

document.getElementById("researchProspectsBtn").addEventListener("click", () => {
  callSheetAction("researchProspects", {}, "Researching prospects for more personal outreach...");
});

document.getElementById("auditWebsitesBtn").addEventListener("click", () => {
  callSheetAction("auditWebsites", {}, "Website Audit Agent is checking prospect websites...");
});

document.getElementById("auditSocialsBtn").addEventListener("click", () => {
  callSheetAction("auditSocials", {}, "Social Audit Agent is creating social profile notes...");
});

document.getElementById("todayResearchBtn").addEventListener("click", () => {
  callSheetAction("researchProspects", {}, "Researching prospects for more personal outreach...");
});

document.getElementById("researchProspectsAgentBtn").addEventListener("click", () => {
  callSheetAction("researchProspects", {}, "Researching prospects for more personal outreach...");
});

document.getElementById("auditWebsitesAgentBtn").addEventListener("click", () => {
  callSheetAction("auditWebsites", {}, "Website Audit Agent is checking prospect websites...");
});

document.getElementById("auditSocialsAgentBtn").addEventListener("click", () => {
  callSheetAction("auditSocials", {}, "Social Audit Agent is creating social profile notes...");
});

document.getElementById("generateContentAgentBtn").addEventListener("click", () => {
  callSheetAction("generateContentIdeas", {}, "Content Creation Agent is turning research into ad ideas...");
});

document.getElementById("generateContentIdeasBtn").addEventListener("click", () => {
  callSheetAction("generateContentIdeas", {}, "Content Creation Agent is turning research into ad ideas...");
});

document.getElementById("generateSocialPlanBtn").addEventListener("click", () => {
  callSheetAction("generateXelloSocialPlan", {}, "Generating Xello Instagram and TikTok content plan...");
});

document.getElementById("todayDraftBtn").addEventListener("click", () => {
  callSheetAction("generateDrafts", {}, "Generating approved outreach drafts...");
});

document.getElementById("todaySocialBtn").addEventListener("click", () => {
  callSheetAction("generateXelloSocialPlan", {}, "Generating Xello Instagram and TikTok content plan...");
});

document.getElementById("runDemoJourneyBtn").addEventListener("click", runLocalDemoJourney);

document.getElementById("runDailyCycleBtn").addEventListener("click", () => {
  callSheetAction("runDailyCycle", {}, "Running the daily AI agent cycle...");
});

document.getElementById("practiceAllAgentsBtn").addEventListener("click", runAllAgentsPractice);

document.getElementById("generateCeoBriefBtn").addEventListener("click", () => {
  callSheetAction("generateCeoBrief", {}, "Reporting Agent is generating the CEO brief...");
});

document.getElementById("installAutomationBtn").addEventListener("click", () => {
  callSheetAction("installAutomation", {}, "Installing daily automation trigger...");
});

document.getElementById("removeAutomationBtn").addEventListener("click", () => {
  callSheetAction("removeAutomation", {}, "Removing daily automation trigger...");
});

document.getElementById("simulateAgentRun").addEventListener("click", () => {
  state.agents = state.agents.map((agent) => {
    if (["Running", "Queued"].includes(agent.status)) {
      const progress = Math.min(100, agent.progress + 12);
      return { ...agent, progress, status: progress >= 100 ? "Complete" : "Running" };
    }
    return agent;
  });
  state.agentTasks = state.agentTasks.map((task) => {
    if (["Running", "Queued"].includes(task.status)) {
      const progress = Math.min(100, task.progress + 12);
      return { ...task, progress, status: progress >= 100 ? "Complete" : "Running" };
    }
    return task;
  });
  addAgentLog("System", "Simulated agent progress update across active tasks.");
  saveState();
  renderAll();
});

renderAll();
if (getApiUrl()) updateConnectionBar();
