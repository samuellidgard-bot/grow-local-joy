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
        <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Simple terms. Serious execution.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We recommend a 90-day minimum so the system has time to launch, learn
          and optimise properly. You get clear weekly updates, transparent ad
          spend and a practical plan for turning local interest into booked quotes.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
