import { motion } from "framer-motion";
import { BarChart3, Globe2, Megaphone, PenTool, Target, MessageSquare } from "lucide-react";

const services = [
  { icon: Globe2, title: "Website Conversion Management", desc: "We improve the quote journey, calls to action, landing pages and trust signals that turn visitors into enquiries." },
  { icon: Megaphone, title: "Meta Ads Growth", desc: "Facebook and Instagram campaigns built around real renovation services, local areas and homeowner intent." },
  { icon: PenTool, title: "Creative & Offer Testing", desc: "Ad concepts, copy, before-and-after style visuals and monthly refreshes so campaigns do not go stale." },
  { icon: MessageSquare, title: "Lead Follow-Up System", desc: "Simple tracking and response workflows so new enquiries are contacted quickly instead of going cold." },
  { icon: Target, title: "Local Growth Strategy", desc: "Service-area targeting for Brighton, Hove and Sussex with a clear plan for the jobs you want most." },
  { icon: BarChart3, title: "Weekly Reporting", desc: "Lead volume, cost per enquiry, booked quotes and next actions explained in plain English." },
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
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">The Renovation Growth Engine</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
          One partner for the channels that <span className="text-gradient-primary">create enquiries</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          £1,500/month management plus your ad spend. Built for renovation firms that want a serious, managed growth system.
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
