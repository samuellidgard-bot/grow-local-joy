import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do you guarantee leads?",
    answer: "No. The honest offer is a controlled test. We create a better local advert, track the enquiries and review the results so you can make a decision based on real data.",
  },
  {
    question: "Who pays the Meta ad spend?",
    answer: "The business pays the ad spend through its own Meta ad account. Xello helps plan, launch and review the test, but you keep control of the account and budget.",
  },
  {
    question: "What happens after the 14-day test?",
    answer: "We review the leads, cost, quality and follow-up process. If the test shows enough potential, we can discuss ongoing management for website improvements, Meta ads, social content and tracking.",
  },
  {
    question: "What if we do not have good photos or videos yet?",
    answer: "That is exactly why on-site filming is useful. Strong renovation marketing usually needs real project footage, before-and-after proof, team clips and local trust signals.",
  },
  {
    question: "Which companies is this for?",
    answer: "Builders, extensions, loft conversions, kitchens, bathrooms, full renovations, garden rooms and design-build firms around Brighton, Hove and Sussex.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-muted">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Straight Answers</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
          Clear before you book a call
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto grid gap-4">
        {faqs.map((faq, index) => (
          <motion.article
            key={faq.question}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-lg border border-border bg-card p-6 shadow-card"
          >
            <h3 className="font-heading text-lg font-bold text-card-foreground">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
