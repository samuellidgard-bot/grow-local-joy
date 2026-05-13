import { motion } from "framer-motion";
import { BarChart3, Camera, CheckCircle2, Globe2, Megaphone, MessageSquare, Search, Target } from "lucide-react";

const services = [
  { icon: Target, title: "Clear Offer & Positioning", desc: "Clarify what work you want more of, who it is for and why homeowners should trust you." },
  { icon: Globe2, title: "Website & Enquiry Route", desc: "Tighten the basic journey so visitors can understand the offer and enquire without friction." },
  { icon: Search, title: "Google Business Presence", desc: "Create, claim or improve the profile so local searchers see the right services, proof and contact details." },
  { icon: Megaphone, title: "Social Profile Polish", desc: "Update Instagram, Facebook, TikTok or LinkedIn basics so your pages look active, clear and credible." },
  { icon: Camera, title: "Proof & Content Foundations", desc: "Plan the photos, project footage, reviews and before/after evidence that future campaigns can use." },
  { icon: MessageSquare, title: "Lead Tracking Setup", desc: "Set up a simple way to record where enquiries came from and what happened after they arrived." },
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
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">The Starter Foundations Offer</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
          Fix the foundations before pushing <span className="text-gradient-primary">more traffic</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          We make the basics stronger first: your offer, profiles, Google presence,
          website route, proof content and lead tracking.
        </p>
      </motion.div>

      <div className="mb-10 grid gap-4 lg:grid-cols-3">
        {[
          {
            icon: Search,
            title: "Audit first",
            text: "We look at the current online presence and decide which foundations need attention first.",
          },
          {
            icon: CheckCircle2,
            title: "Build the essentials",
            text: "Socials, Google Business, enquiry routes, proof assets and tracking are improved before ads.",
          },
          {
            icon: BarChart3,
            title: "Then decide the next move",
            text: "Once the foundations are ready, we can decide whether content, Meta ads or ongoing growth support makes sense.",
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
