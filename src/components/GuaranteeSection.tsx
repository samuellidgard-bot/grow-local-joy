import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Our 30-Day Guarantee
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          If we don't generate qualified leads within the first 30 days, we'll
          continue working for free until we do. No questions asked, no strings
          attached. We only win when you win.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
