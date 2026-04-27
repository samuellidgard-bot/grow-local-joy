import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  MailCheck,
  MousePointerClick,
  Search,
  Send,
  Sheet,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const metricCards = [
  { label: "Prospects found", value: "0", note: "Filled by scanner", icon: Search },
  { label: "AI drafts ready", value: "0", note: "Awaiting approval", icon: Sparkles },
  { label: "Approved to send", value: "0", note: "Your green light", icon: CheckCircle2 },
  { label: "Emails sent", value: "0", note: "Logged after send", icon: MailCheck },
  { label: "IG tasks", value: "0", note: "Manual send queue", icon: Send },
  { label: "Calls booked", value: "0", note: "Calendly / manual", icon: MousePointerClick },
  { label: "API spend", value: "£0.00", note: "OpenAI + search", icon: CircleDollarSign },
  { label: "Client wins", value: "0", note: "£1.5k/mo target", icon: ClipboardList },
];

const workflow = [
  "Scan target areas for renovation, extension, loft, kitchen and bathroom firms.",
  "Score each prospect using website, service, location and social signals.",
  "Write a personalised email, Instagram DM and follow-up angle.",
  "Wait for you to approve the row in Google Sheets.",
  "Send approved emails and queue Instagram DMs for manual sending.",
  "Track replies, calls booked, proposals and won clients.",
];

const sheetTabs = [
  "Prospects",
  "AI Audits",
  "Outreach Drafts",
  "Approved To Send",
  "Replies",
  "Calls Booked",
  "Clients",
  "API Spend",
  "Do Not Contact",
  "Settings",
];

const OutboundDashboard = () => (
  <main className="min-h-screen bg-background text-foreground">
    <section className="bg-hero px-6 py-10 text-primary-foreground">
      <div className="container mx-auto">
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/")}
          className="mb-10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-md"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Website
        </Button>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-secondary/30 bg-secondary/10 px-4 py-2 mb-6">
            <Bot className="h-4 w-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Xello Outbound Agent</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            The command centre for finding renovation companies and booking growth audits.
          </h1>
          <p className="max-w-3xl text-primary-foreground/70 text-lg">
            This dashboard is the simple visual layer. The live working system runs from Google Sheets using the Apps Script in
            <span className="font-semibold text-primary-foreground"> systems/google-sheets/XelloOutboundAgent.gs</span>.
          </p>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-6 py-14">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metricCards.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between mb-5">
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                <metric.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{metric.note}</span>
            </div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="font-heading text-3xl font-extrabold text-card-foreground mt-1">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container mx-auto px-6 pb-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-lg border border-border bg-card p-8 shadow-card">
        <h2 className="font-heading text-2xl font-extrabold mb-6">Outbound Workflow</h2>
        <div className="space-y-4">
          {workflow.map((item, index) => (
            <div key={item} className="flex gap-4">
              <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm shrink-0">
                {index + 1}
              </div>
              <p className="text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-8 shadow-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
            <Sheet className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-extrabold">Google Sheet Tabs</h2>
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

    <section className="container mx-auto px-6 pb-20">
      <div className="rounded-lg border border-border bg-muted p-8">
        <h2 className="font-heading text-2xl font-extrabold mb-3">Spend Guardrail</h2>
        <p className="text-muted-foreground leading-relaxed">
          Start with a £10 OpenAI budget, process prospects in small batches of 10-25, and stop automatically when the
          API Spend tab reaches your daily limit. Search APIs may cost separately, so the first batch should be small and reviewed.
        </p>
      </div>
    </section>
  </main>
);

export default OutboundDashboard;
