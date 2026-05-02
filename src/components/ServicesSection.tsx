import { motion } from "framer-motion";
import { BarChart3, Camera, CheckCircle2, Clock, Globe2, Megaphone, MessageSquare, Target } from "lucide-react";

const services = [
  { icon: Globe2, title: "Website Enquiry Review", desc: "We look at your current website journey, calls to action, trust signals and where quote enquiries may be leaking." },
  { icon: Camera, title: "On-Site Ad Filming", desc: "Sam can visit your site and film real project content using camera, drone and microphones so the advert feels authentic." },
  { icon: Megaphone, title: "Meta Test Campaign", desc: "A small Facebook and Instagram test built around one clear service, one local area and one homeowner problem." },
  { icon: MessageSquare, title: "Lead Tracking Setup", desc: "Simple tracking so you can see which enquiries came from the test and what happened after they arrived." },
  { icon: Target, title: "Local Offer Strategy", desc: "We choose the service, area and message that has the best chance of producing useful conversations." },
  { icon: BarChart3, title: "Plain-English Review", desc: "After the test, you get a clear breakdown of what happened, what worked and whether full management makes sense." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">The 14-Day Local Lead Test</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
          A simple test before committing to <span className="text-gradient-primary">full management</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Start with one service, one local audience, one filmed advert and clear tracking.
          If the numbers or learning are useful, then we can discuss the next step.
        </p>
      </motion.div>

      <div className="mb-10 grid gap-4 lg:grid-cols-3">
        {[
          {
            icon: Clock,
            title: "Low-pressure start",
            text: "The call is just to see if the test makes sense. No full retainer pitch on day one.",
          },
          {
            icon: CheckCircle2,
            title: "Clear ad-spend boundary",
            text: "You run spend through your own Meta account, so you keep control of the budget and data.",
          },
          {
            icon: BarChart3,
            title: "Decision based on evidence",
            text: "The review looks at lead quality, cost, follow-up and what should change next.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-secondary/15">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-card-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
          >
            <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
