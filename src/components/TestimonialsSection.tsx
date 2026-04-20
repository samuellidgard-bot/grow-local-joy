import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Hartley",
    role: "Owner, Hartley Painting Co.",
    text: "Xello Media transformed our business. We went from scrambling for leads to having a 3-week waiting list. Their Meta ads system is genuinely next level.",
    stars: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Director, GreenScape Landscaping",
    text: "The free trial sold us instantly. Within 5 days we had 14 qualified leads. Now on the monthly retainer — it's the best investment we've ever made.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Founder, Apex Roofing Solutions",
    text: "I was sceptical about Meta ads, but the team at Xello proved me wrong. £72K in revenue from a £3K monthly investment. The numbers speak for themselves.",
    stars: 5,
  },
  {
    name: "Mark Thompson",
    role: "Owner, Thompson Renovations",
    text: "Finally, a marketing agency that actually delivers. No fluff, no excuses — just consistent, qualified leads hitting my phone every single day.",
    stars: 5,
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
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Testimonials</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
          Trusted by Home Improvement <span className="text-gradient-accent">Leaders</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-card-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading font-bold text-card-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
