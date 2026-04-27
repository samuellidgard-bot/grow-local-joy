import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Built for high-value jobs",
    text: "A kitchen, loft, extension or full renovation is worth far more than a cheap enquiry. The strategy focuses on quality homeowner conversations, not vanity metrics.",
  },
  {
    title: "Your business keeps control",
    text: "Campaigns are run through your ad account, so you keep ownership of the data, assets and learning as the system improves.",
  },
  {
    title: "Website and ads work together",
    text: "Most agencies only run ads. We look at the full journey from first click to quote request so more interested homeowners take action.",
  },
  {
    title: "Clear weekly priorities",
    text: "You see what was launched, what leads came in, what needs fixing and what we are testing next. No confusing reports.",
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
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Why This Works</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
          Renovation companies need more than <span className="text-gradient-accent">posting on social</span>
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
