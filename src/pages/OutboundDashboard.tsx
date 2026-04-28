import {
  ArrowLeft,
  Bot,
  CalendarCheck,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Gauge,
  MailCheck,
  MessageSquareText,
  MousePointerClick,
  Search,
  Send,
  Sheet,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const kpis = [
  { label: "Prospects found", value: "184", detail: "+37 this week", icon: Search },
  { label: "AI drafts ready", value: "42", detail: "Needs approval", icon: Sparkles },
  { label: "Outreach sent", value: "96", detail: "Email + IG tasks", icon: Send },
  { label: "Replies", value: "14", detail: "8 warm", icon: MessageSquareText },
  { label: "Calls booked", value: "5", detail: "This month", icon: CalendarCheck },
  { label: "Pipeline value", value: "£7.5k", detail: "Monthly retainer", icon: CircleDollarSign },
  { label: "API spend", value: "£1.84", detail: "£10 budget", icon: Gauge },
  { label: "Won clients", value: "0", detail: "First target: 3", icon: Users },
];

const pipeline = [
  { stage: "New Prospects", count: 66, value: "Researching" },
  { stage: "AI Drafted", count: 42, value: "Approval needed" },
  { stage: "Contacted", count: 96, value: "Follow-up running" },
  { stage: "Warm Replies", count: 8, value: "Book audit" },
  { stage: "Calls Booked", count: 5, value: "£7.5k/mo" },
  { stage: "Proposal Sent", count: 2, value: "£3k/mo" },
];

const hotLeads = [
  { company: "Brighton Build & Renovate", area: "Brighton", service: "Extensions", score: 91, status: "Call to book", next: "Send audit summary" },
  { company: "Hove Kitchen Studio", area: "Hove", service: "Kitchens", score: 87, status: "Warm reply", next: "Offer 15-min call" },
  { company: "Worthing Loft Co.", area: "Worthing", service: "Lofts", score: 84, status: "Draft approved", next: "Send email" },
  { company: "Lewes Design Build", area: "Lewes", service: "Full refurb", score: 82, status: "IG task", next: "Manual DM" },
];

const outreachQueue = [
  { channel: "Email", company: "Shoreham Renovation Ltd", subject: "Quick growth audit for Shoreham Renovation Ltd", status: "Needs review" },
  { channel: "Instagram", company: "Hove Kitchen Studio", subject: "DM: saw your recent kitchen projects", status: "Approved" },
  { channel: "Email", company: "Crawley Extensions", subject: "More local extension quote requests", status: "Needs edit" },
  { channel: "Email", company: "Brighton Build & Renovate", subject: "Audit notes for your renovation funnel", status: "Approved" },
];

const todayTasks = [
  "Approve 12 outreach drafts before sending.",
  "Manually send 8 Instagram DMs from the Xello account.",
  "Book calls for 3 warm replies.",
  "Add 25 more Brighton/Hove prospects to the sheet.",
  "Check API spend before running the next AI batch.",
];

const spendRows = [
  { item: "OpenAI audits + drafts", cost: "£1.14", limit: "£10 starting balance" },
  { item: "Prospect search API", cost: "£0.70", limit: "Keep batches small" },
  { item: "Email sending", cost: "£0.00", limit: "Uses inbox/provider" },
];

const sheetTabs = ["Prospects", "AI Audits", "Outreach Drafts", "Approved To Send", "Replies", "Calls Booked", "Clients", "API Spend", "Do Not Contact", "Settings"];

const StatusBadge = ({ children }: { children: string }) => {
  const tone =
    children.includes("Approved") || children.includes("Warm") || children.includes("Call")
      ? "bg-primary/10 text-primary"
      : children.includes("edit") || children.includes("review")
        ? "bg-secondary/10 text-secondary"
        : "bg-muted text-muted-foreground";

  return <span className={`rounded-md px-2.5 py-1 text-xs font-semibold ${tone}`}>{children}</span>;
};

const OutboundDashboard = () => (
  <main className="min-h-screen bg-background text-foreground">
    <section className="bg-hero px-6 py-8 text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
              className="mb-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-md"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Website
            </Button>
            <div className="inline-flex items-center gap-2 rounded-md border border-secondary/30 bg-secondary/10 px-4 py-2 mb-5">
              <Bot className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Xello Internal CRM</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Agency command centre for leads, outreach, calls and clients.
            </h1>
            <p className="max-w-3xl text-primary-foreground/70 text-lg">
              Track the full system: local prospect scanning, AI audits, approval-based outreach, booked calls, won clients and API spend.
            </p>
          </div>

          <div className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-5 min-w-[260px]">
            <p className="text-sm text-primary-foreground/55">Primary offer</p>
            <p className="font-heading text-2xl font-extrabold mt-1">£1,500/mo</p>
            <p className="text-sm text-primary-foreground/65 mt-2">Website, Meta ads, social growth and lead tracking for renovation companies.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-6 py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between mb-5">
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                <metric.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{metric.detail}</span>
            </div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="font-heading text-3xl font-extrabold text-card-foreground mt-1">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container mx-auto px-6 pb-10">
      <div className="rounded-lg border border-border bg-card p-6 shadow-card">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-heading text-2xl font-extrabold">Sales Pipeline</h2>
            <p className="text-muted-foreground text-sm mt-1">From scraped prospect to £1.5k/month client.</p>
          </div>
          <Target className="h-6 w-6 text-primary" />
        </div>
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {pipeline.map((stage) => (
            <div key={stage.stage} className="rounded-md border border-border bg-background p-4">
              <p className="text-sm font-semibold text-card-foreground">{stage.stage}</p>
              <p className="font-heading text-3xl font-extrabold mt-3">{stage.count}</p>
              <p className="text-xs text-muted-foreground mt-1">{stage.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container mx-auto px-6 pb-10 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-lg border border-border bg-card p-6 shadow-card overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading text-2xl font-extrabold">Hot Leads</h2>
            <p className="text-muted-foreground text-sm mt-1">Highest-priority companies for follow-up.</p>
          </div>
          <TrendingUp className="h-6 w-6 text-primary" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr className="border-b border-border">
                <th className="pb-3 font-semibold">Company</th>
                <th className="pb-3 font-semibold">Area</th>
                <th className="pb-3 font-semibold">Service</th>
                <th className="pb-3 font-semibold">Score</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold">Next Action</th>
              </tr>
            </thead>
            <tbody>
              {hotLeads.map((lead) => (
                <tr key={lead.company} className="border-b border-border/70 last:border-0">
                  <td className="py-4 font-semibold text-card-foreground">{lead.company}</td>
                  <td className="py-4 text-muted-foreground">{lead.area}</td>
                  <td className="py-4 text-muted-foreground">{lead.service}</td>
                  <td className="py-4 font-heading font-bold">{lead.score}</td>
                  <td className="py-4"><StatusBadge>{lead.status}</StatusBadge></td>
                  <td className="py-4 text-muted-foreground">{lead.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading text-2xl font-extrabold">Today</h2>
            <p className="text-muted-foreground text-sm mt-1">What your team should do next.</p>
          </div>
          <Clock3 className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-4">
          {todayTasks.map((task) => (
            <div key={task} className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">{task}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container mx-auto px-6 pb-10 grid gap-8 xl:grid-cols-[1fr_0.85fr]">
      <div className="rounded-lg border border-border bg-card p-6 shadow-card overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading text-2xl font-extrabold">Outreach Approval Queue</h2>
            <p className="text-muted-foreground text-sm mt-1">AI drafts stay here until you approve them.</p>
          </div>
          <MailCheck className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-3">
          {outreachQueue.map((item) => (
            <div key={`${item.channel}-${item.company}`} className="rounded-md border border-border bg-background p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-card-foreground">{item.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.channel}: {item.subject}</p>
                </div>
                <StatusBadge>{item.status}</StatusBadge>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
            <Sheet className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold">Google Sheets Backend</h2>
            <p className="text-muted-foreground text-sm">The simple database your team can edit.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {sheetTabs.map((tab) => (
            <div key={tab} className="rounded-md border border-border bg-background px-4 py-3 text-sm font-medium">
              {tab}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container mx-auto px-6 pb-20 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-border bg-card p-6 shadow-card">
        <h2 className="font-heading text-2xl font-extrabold mb-5">API Spend</h2>
        <div className="space-y-3">
          {spendRows.map((row) => (
            <div key={row.item} className="flex items-center justify-between gap-4 rounded-md border border-border bg-background p-4">
              <div>
                <p className="font-semibold">{row.item}</p>
                <p className="text-xs text-muted-foreground mt-1">{row.limit}</p>
              </div>
              <p className="font-heading font-extrabold">{row.cost}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-muted p-6">
        <h2 className="font-heading text-2xl font-extrabold mb-3">How This Becomes Live</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          The dashboard page shows the operating model. The live data should come from the Google Sheet so your team can approve messages,
          update statuses and track leads without touching code.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-md bg-background p-4">
            <p className="font-heading font-bold">1. Scan</p>
            <p className="text-sm text-muted-foreground mt-1">Find local renovation prospects.</p>
          </div>
          <div className="rounded-md bg-background p-4">
            <p className="font-heading font-bold">2. Approve</p>
            <p className="text-sm text-muted-foreground mt-1">Review AI emails and DMs.</p>
          </div>
          <div className="rounded-md bg-background p-4">
            <p className="font-heading font-bold">3. Sell</p>
            <p className="text-sm text-muted-foreground mt-1">Book audits and close retainers.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default OutboundDashboard;
