import { motion } from "framer-motion";
import { Camera, GraduationCap, MapPin, MousePointerClick } from "lucide-react";

const founderPoints = [
  {
    icon: MapPin,
    title: "Local to Brighton & Hove",
    text: "The foundations process is built for nearby home improvement companies, not generic national campaigns.",
  },
  {
    icon: GraduationCap,
    title: "Digital Marketing background",
    text: "Sam studied Digital Marketing at Falmouth University and is building Xello around clear, measurable local growth.",
  },
  {
    icon: Camera,
    title: "Real creative production",
    text: "Camera, drone and microphones can turn real projects into the proof needed for stronger content and ads.",
  },
  {
    icon: MousePointerClick,
    title: "Lead system mindset",
    text: "The work does not stop at an advert. The website journey, lead capture and follow-up all matter.",
  },
];

const FounderSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card p-8 sm:p-10 shadow-card"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Who You Work With</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-3 text-foreground">
            A hands-on growth partner, not a faceless ad account
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            Xello Media is built around a simple promise: help local home
            renovation companies look more professional online, build stronger
            proof and understand exactly where their enquiries come from.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            The first step is practical: tighten the online foundations first,
            then decide whether content, Meta ads or ongoing growth support is
            the right next move.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {founderPoints.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-lg border border-border bg-card p-6 shadow-card"
            >
              <div className="h-11 w-11 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
