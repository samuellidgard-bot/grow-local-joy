import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is the Starter Foundations offer?",
    answer: "It is the first step before paid ads: we improve the basics that affect trust and enquiries, including your offer, social profiles, Google Business presence, website enquiry route, proof content and simple lead tracking.",
  },
  {
    question: "Do you guarantee leads?",
    answer: "No. Xello focuses on building stronger foundations and clearer tracking so future marketing decisions are based on real evidence rather than guesses.",
  },
  {
    question: "Do we need to run ads straight away?",
    answer: "No. Paid ads should come after the foundations are ready. If your offer, proof, website route or tracking are weak, more traffic usually exposes the gaps faster.",
  },
  {
    question: "What happens after the foundations are ready?",
    answer: "We decide the next best move. That could be starter content, a Meta ads campaign, Google Business improvement, website conversion work or ongoing growth support.",
  },
  {
    question: "What if we do not have good photos or videos yet?",
    answer: "That is exactly why on-site filming is useful. Strong renovation marketing usually needs real project footage, before-and-after proof, team clips and local trust signals.",
  },
  {
    question: "Do we need to commit to a retainer straight away?",
    answer: "No. The first step is to check and improve the foundations. Ongoing management only makes sense once there is a clear reason to build a bigger system.",
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
