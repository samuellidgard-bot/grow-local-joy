import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Local and personal",
    text: "Xello is built around Brighton, Hove and Sussex. The outreach, filming and ads should feel like they came from someone who understands the local market.",
  },
  {
    title: "Real content beats generic posts",
    text: "Renovation work is visual. Proper site footage, progress shots, before-and-after proof and team clips usually feel more trustworthy than stock-style marketing.",
  },
  {
    title: "Your business keeps control",
    text: "The test runs through your ad account and your lead process, so you keep ownership of the data, audience learning and future campaign direction.",
  },
  {
    title: "No fake guarantees",
    text: "We will not promise magic numbers. The point is to run a clear test, track what happens and decide the next move based on evidence.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Why Xello Is Different</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
          Built for companies that need <span className="text-gradient-accent">real homeowner conversations</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reasons.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-8 shadow-card border border-border"
          >
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-card-foreground text-lg mb-3">{item.title}</h3>
            <p className="text-card-foreground/75 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
