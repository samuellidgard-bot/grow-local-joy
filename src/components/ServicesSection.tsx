import { motion } from "framer-motion";
import { BarChart3, Megaphone, PenTool, Target, Zap, MessageSquare } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Full Meta Ads Management", desc: "Facebook & Instagram campaigns built to convert homeowners into booked jobs." },
  { icon: Target, title: "Campaign Strategy & Scaling", desc: "Data-driven plans to grow your lead volume while keeping cost per lead low." },
  { icon: PenTool, title: "Ad Creative & Copywriting", desc: "2–4 new ad creatives tested monthly, optimised for your local market." },
  { icon: BarChart3, title: "Weekly Performance Reports", desc: "Clear KPI tracking — CPL, ROAS, lead volume — with full transparency." },
  { icon: Zap, title: "Weekly Optimisations", desc: "Continuous campaign tuning so your ads get better results every week." },
  { icon: MessageSquare, title: "Direct Communication", desc: "Fast support and strategic advice whenever you need it." },
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
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">What's Included</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
          Everything You Need to <span className="text-gradient-primary">Scale</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Simple, flat-rate pricing at £3,000/month. Start with a free 7-day trial.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
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
