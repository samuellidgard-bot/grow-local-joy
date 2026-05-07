import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "crm");
const cookieName = "xello_crm_session";
const oneWeek = 60 * 60 * 24 * 7;
const basePath = "/crm";
const leaderStateKey = "xello:crm:leader-state";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

export default async function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host || "xello.local"}`);
  const routePath = normaliseRoutePath(url);

  if (routePath === "" && req.method === "GET") {
    res.statusCode = 302;
    res.setHeader("Location", `${basePath}/`);
    return res.end();
  }

  if (routePath === "/login" && req.method === "GET") {
    return sendLogin(res);
  }

  if (routePath === "/api/login" && req.method === "POST") {
    const body = await readBody(req);
    const password = new URLSearchParams(body).get("password") || "";
    if (!isPasswordValid(password)) {
      return sendLogin(res, "That password was not right. Try again.");
    }

    res.setHeader("Set-Cookie", `${cookieName}=${createSessionToken()}; HttpOnly; Secure; SameSite=Lax; Path=${basePath}; Max-Age=${oneWeek}`);
    res.statusCode = 302;
    res.setHeader("Location", `${basePath}/`);
    return res.end();
  }

  if (routePath === "/api/logout") {
    res.setHeader("Set-Cookie", `${cookieName}=; HttpOnly; Secure; SameSite=Lax; Path=${basePath}; Max-Age=0`);
    res.statusCode = 302;
    res.setHeader("Location", `${basePath}/login`);
    return res.end();
  }

  if (routePath === "/api/leader/cron" && req.method === "GET") {
    return handleLeaderCron(req, res);
  }

  if (!isAuthenticated(req)) {
    res.statusCode = 302;
    res.setHeader("Location", `${basePath}/login`);
    return res.end();
  }

  if (routePath === "/health") {
    return sendText(res, "ok", "text/plain; charset=utf-8");
  }

  if (routePath === "/api/leader/run" && req.method === "POST") {
    return handleLeaderRun(req, res);
  }

  if (routePath === "/api/leader/task" && req.method === "POST") {
    return handleLeaderTaskToggle(req, res);
  }

  if (routePath === "/api/leader/state" && req.method === "GET") {
    return handleLeaderState(req, res);
  }

  return serveAppFile(routePath, res);
}

async function handleLeaderRun(req, res) {
  try {
    const payload = JSON.parse(await readBody(req) || "{}");
    const company = String(payload.company || "client");
    const tasks = Array.isArray(payload.tasks) ? payload.tasks.map(String).filter(Boolean) : [];
    const key = String(payload.key || createLeaderKey(company, payload.offer, payload.stage));
    const assignments = tasks.map((task, index) => {
      const agent = getLeaderAgentForTask(task);
      return {
        index,
        task,
        agent,
        command: `${agent}, handle this for ${company}: ${task}`,
        relay: "Relay back to Leader with: evidence found, recommended status, auto-complete decision, and only flag human approval for access, public publishing, passwords or spend."
      };
    });
    const store = await readLeaderStore();
    const run = {
      key,
      company,
      stage: payload.stage || "",
      offer: payload.offer || "",
      mode: "server-runner",
      autonomousLevel: "approval-gated",
      ranAt: new Date().toISOString(),
      assignments
    };

    store.runs[key] = run;
    store.latestPayloads[key] = { key, company, stage: run.stage, offer: run.offer, tasks };
    store.events.unshift({
      at: run.ranAt,
      type: "leader-run",
      message: `Leader created ${assignments.length} specialist command${assignments.length === 1 ? "" : "s"} for ${company}.`
    });
    trimLeaderStore(store);
    const savedStore = await writeLeaderStore(store);

    return sendJson(res, {
      ok: true,
      ...run,
      persisted: savedStore.storageMode,
      company,
      assignments,
      summary: `Leader created ${assignments.length} specialist command${assignments.length === 1 ? "" : "s"} for ${company}.`
    });
  } catch (error) {
    res.statusCode = 400;
    return sendJson(res, { ok: false, error: "Leader could not read the task payload." });
  }
}

async function handleLeaderTaskToggle(req, res) {
  try {
    const payload = JSON.parse(await readBody(req) || "{}");
    const key = String(payload.key || "");
    const index = String(payload.index ?? "");
    if (!key || index === "") {
      res.statusCode = 400;
      return sendJson(res, { ok: false, error: "Missing Leader task key or index." });
    }

    const store = await readLeaderStore();
    store.completions[key] = store.completions[key] || {};
    store.evidence = store.evidence || {};
    store.evidence[key] = store.evidence[key] || {};
    const nextValue = typeof payload.complete === "boolean"
      ? payload.complete
      : Boolean(store.completions[key][index]);
    if (typeof payload.evidence === "string") {
      store.evidence[key][index] = payload.evidence.slice(0, 4000);
    }
    store.completions[key][index] = nextValue;
    store.events.unshift({
      at: new Date().toISOString(),
      type: "leader-task",
      message: `${nextValue ? "Completed" : "Reopened"} Leader task ${index} for ${key}${typeof payload.evidence === "string" ? " with relay evidence" : ""}.`
    });
    trimLeaderStore(store);
    const savedStore = await writeLeaderStore(store);
    return sendJson(res, {
      ok: true,
      key,
      index,
      complete: nextValue,
      evidence: store.evidence[key][index] || "",
      persisted: savedStore.storageMode
    });
  } catch (error) {
    res.statusCode = 400;
    return sendJson(res, { ok: false, error: "Leader could not update that task." });
  }
}

async function handleLeaderState(req, res) {
  const store = await readLeaderStore();
  return sendJson(res, {
    ok: true,
    storageMode: store.storageMode,
    runs: store.runs,
    completions: store.completions,
    evidence: store.evidence || {},
    latestCronAt: store.latestCronAt || "",
    events: store.events.slice(0, 25)
  });
}

async function handleLeaderCron(req, res) {
  if (!isCronAuthorized(req)) {
    res.statusCode = 401;
    return sendJson(res, { ok: false, error: "Unauthorized cron request." });
  }

  const store = await readLeaderStore();
  const now = new Date().toISOString();
  const payloads = Object.values(store.latestPayloads || {});
  payloads.forEach((payload) => {
    const company = String(payload.company || "client");
    const tasks = Array.isArray(payload.tasks) ? payload.tasks.map(String).filter(Boolean) : [];
    const key = String(payload.key || createLeaderKey(company, payload.offer, payload.stage));
    const assignments = tasks.map((task, index) => {
      const agent = getLeaderAgentForTask(task);
      return {
        index,
        task,
        agent,
        command: `${agent}, handle this for ${company}: ${task}`,
        relay: "Relay back to Leader with: evidence found, recommended status, auto-complete decision, and only flag human approval for access, public publishing, passwords or spend."
      };
    });
    store.runs[key] = {
      key,
      company,
      stage: payload.stage || "",
      offer: payload.offer || "",
      mode: "cron-runner",
      autonomousLevel: "approval-gated",
      ranAt: store.runs[key]?.ranAt || now,
      lastCronAt: now,
      assignments
    };
  });
  store.latestCronAt = now;
  store.events.unshift({
    at: now,
    type: "leader-cron",
    message: `Leader cron checked ${payloads.length} active stage plan${payloads.length === 1 ? "" : "s"}.`
  });
  trimLeaderStore(store);
  const savedStore = await writeLeaderStore(store);

  return sendJson(res, {
    ok: true,
    checkedPlans: payloads.length,
    latestCronAt: now,
    storageMode: savedStore.storageMode
  });
}

function getLeaderAgentForTask(task) {
  const text = String(task || "").toLowerCase();
  if (text.includes("website") || text.includes("contact route") || text.includes("form")) return "Website Audit Agent";
  if (text.includes("instagram") || text.includes("tiktok") || text.includes("facebook") || text.includes("social") || text.includes("google business") || text.includes("profile")) return "Social Audit Agent";
  if (text.includes("proof") || text.includes("photos") || text.includes("videos") || text.includes("content") || text.includes("assets")) return "Content Creation Agent";
  if (text.includes("track") || text.includes("status") || text.includes("source") || text.includes("field")) return "Tracking Agent";
  if (text.includes("owner") || text.includes("access") || text.includes("password") || text.includes("confirm")) return "Client Strategy Agent";
  return "Company Research Agent";
}

function createLeaderKey(company, offer = "", stage = "") {
  return `${company || "client"}::${offer || "offer"}::${stage || "stage"}`.replace(/\s+/g, "-").toLowerCase();
}

function isCronAuthorized(req) {
  const expected = process.env.CRON_SECRET || "";
  if (!expected) return false;
  return req.headers.authorization === `Bearer ${expected}`;
}

async function readLeaderStore() {
  const kv = getKvConfig();
  if (kv.url && kv.token) {
    try {
      const response = await fetch(`${kv.url}/get/${encodeURIComponent(leaderStateKey)}`, {
        headers: { Authorization: `Bearer ${kv.token}` }
      });
      if (response.ok) {
        const payload = await response.json();
        const raw = payload?.result;
        const parsed = raw ? JSON.parse(raw) : {};
        return normaliseLeaderStore(parsed, "kv");
      }
    } catch (error) {
      return getMemoryLeaderStore();
    }
  }

  return getMemoryLeaderStore();
}

async function writeLeaderStore(store) {
  const kv = getKvConfig();
  const normalised = normaliseLeaderStore(store, kv.url && kv.token ? "kv" : "memory");

  if (kv.url && kv.token) {
    try {
      const response = await fetch(`${kv.url}/set/${encodeURIComponent(leaderStateKey)}/${encodeURIComponent(JSON.stringify(normalised))}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${kv.token}` }
      });
      if (response.ok) {
        normalised.storageMode = "kv";
        return normalised;
      }
    } catch (error) {
      normalised.storageMode = "memory";
    }
  }

  globalThis.__xelloLeaderStore = normaliseLeaderStore(normalised, "memory");
  return globalThis.__xelloLeaderStore;
}

function getKvConfig() {
  return {
    url: (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "").replace(/\/$/, ""),
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ""
  };
}

function getMemoryLeaderStore() {
  globalThis.__xelloLeaderStore = globalThis.__xelloLeaderStore || getEmptyLeaderStore("memory");
  return globalThis.__xelloLeaderStore;
}

function getEmptyLeaderStore(storageMode = "memory") {
  return normaliseLeaderStore({}, storageMode);
}

function normaliseLeaderStore(store = {}, storageMode = "memory") {
  return {
    storageMode,
    runs: store.runs || {},
    completions: store.completions || {},
    evidence: store.evidence || {},
    latestPayloads: store.latestPayloads || {},
    latestCronAt: store.latestCronAt || "",
    events: Array.isArray(store.events) ? store.events : []
  };
}

function trimLeaderStore(store) {
  store.events = (store.events || []).slice(0, 100);
  return store;
}

function sendLogin(res, error = "") {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Xello Operating Hub Login</title>
    <link rel="icon" type="image/svg+xml" href="/xello-favicon-x-only.svg?v=20260507-x-only-3" />
    <link rel="icon" type="image/png" href="/xello-favicon-x-only.png?v=20260507-x-only-3" sizes="512x512" />
    <link rel="shortcut icon" href="/favicon.ico?v=20260507-x-only-3" />
    <link rel="apple-touch-icon" href="/xello-apple-touch-icon-x-only.png?v=20260507-x-only-3" />
    <style>
      :root { color-scheme: dark; --green: #9ad14b; --dark: #101111; --panel: #181a1a; --line: #2b2f2d; }
      * { box-sizing: border-box; }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background:
          linear-gradient(135deg, rgba(154, 209, 75, 0.16), transparent 34%),
          radial-gradient(circle at 75% 20%, rgba(255,255,255,0.08), transparent 28%),
          var(--dark);
        color: white;
        padding: 24px;
      }
      main {
        width: min(420px, 100%);
        border: 1px solid var(--line);
        background: rgba(24, 26, 26, 0.92);
        border-radius: 18px;
        padding: 28px;
        box-shadow: 0 24px 80px rgba(0,0,0,0.35);
      }
      img { width: 190px; height: auto; display: block; margin-bottom: 28px; }
      h1 { margin: 0 0 8px; font-size: 28px; line-height: 1.05; }
      p { margin: 0 0 22px; color: #bfc7c0; line-height: 1.55; }
      label { display: block; margin-bottom: 8px; color: #e8efe7; font-weight: 700; }
      input {
        width: 100%;
        height: 48px;
        border: 1px solid #3d453f;
        background: #0d0e0e;
        color: white;
        border-radius: 10px;
        padding: 0 14px;
        font-size: 16px;
      }
      button {
        width: 100%;
        height: 50px;
        margin-top: 16px;
        border: 0;
        border-radius: 10px;
        background: var(--green);
        color: #111;
        font-weight: 900;
        font-size: 16px;
        cursor: pointer;
      }
      .error {
        margin-bottom: 14px;
        padding: 10px 12px;
        border-radius: 10px;
        background: rgba(255, 92, 92, 0.14);
        color: #ffb8b8;
        border: 1px solid rgba(255, 92, 92, 0.35);
      }
      small { display: block; margin-top: 14px; color: #8f9a90; }
    </style>
  </head>
  <body>
    <main>
      <img src="${basePath}/assets/xello-media-logo-transparent.png" alt="Xello Media" />
      <h1>Xello Operating Hub</h1>
      <p>Private internal dashboard for prospects, outreach, agents, content, delivery and spend.</p>
      ${error ? `<div class="error">${escapeHtml(error)}</div>` : ""}
      <form action="${basePath}/api/login" method="POST">
        <label for="password">Dashboard password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required autofocus />
        <button type="submit">Open Dashboard</button>
      </form>
      <small>Do not share this login outside the Xello team.</small>
    </main>
  </body>
</html>`);
}

function serveAppFile(requestPath, res) {
  const safePath = requestPath === "/" || requestPath === "" ? "/index.html" : requestPath;
  const filePath = path.normalize(path.join(appDir, safePath));

  if (!filePath.startsWith(appDir) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.statusCode = 404;
    return res.end("Not found");
  }

  const ext = path.extname(filePath).toLowerCase();
  res.statusCode = 200;
  res.setHeader("Content-Type", contentTypes[ext] || "application/octet-stream");
  res.setHeader("Cache-Control", ext === ".html" ? "no-store" : "private, max-age=3600");
  fs.createReadStream(filePath).pipe(res);
}

function normaliseRoutePath(url) {
  const rewrittenPath = url.searchParams.get("path");
  if (rewrittenPath !== null) return `/${rewrittenPath}`.replace(/\/+/g, "/");
  if (url.pathname.startsWith(basePath)) return url.pathname.slice(basePath.length) || "";
  return url.pathname;
}

function isPasswordValid(password) {
  const expected = process.env.XELLO_CRM_PASSWORD || "";
  if (!expected) return false;
  const left = Buffer.from(password);
  const right = Buffer.from(expected);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function createSessionToken() {
  const secret = getSecret();
  const expires = Date.now() + oneWeek * 1000;
  const payload = `${expires}`;
  const signature = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

function isAuthenticated(req) {
  const cookies = parseCookies(req.headers.cookie || "");
  const token = cookies[cookieName];
  if (!token) return false;

  const [expires, signature] = token.split(".");
  if (!expires || !signature || Number(expires) < Date.now()) return false;

  const expected = crypto.createHmac("sha256", getSecret()).update(expires).digest("hex");
  const left = Buffer.from(signature);
  const right = Buffer.from(expected);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function getSecret() {
  return process.env.XELLO_CRM_SECRET || process.env.XELLO_CRM_PASSWORD || "dev-secret-change-in-vercel";
}

function parseCookies(header) {
  return Object.fromEntries(
    header.split(";").map((cookie) => {
      const [key, ...value] = cookie.trim().split("=");
      return [key, value.join("=")];
    }).filter(([key]) => key)
  );
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 50000) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function sendText(res, body, contentType) {
  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);
  res.end(body);
}

function sendJson(res, payload) {
  res.statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
