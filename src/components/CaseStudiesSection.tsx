import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const caseStudies = [
  {
    niche: "Painting Company",
    location: "Manchester, UK",
    results: [
      { icon: Users, label: "Leads Generated", value: "127" },
      { icon: DollarSign, label: "Cost Per Lead", value: "£8.40" },
      { icon: TrendingUp, label: "Revenue Generated", value: "£48K" },
    ],
    quote: "We went from relying on word-of-mouth to having a fully booked calendar within 6 weeks.",
    period: "First 90 Days",
  },
  {
    niche: "Roofing Contractor",
    location: "Birmingham, UK",
    results: [
      { icon: Users, label: "Leads Generated", value: "89" },
      { icon: DollarSign, label: "Cost Per Lead", value: "£12.60" },
      { icon: TrendingUp, label: "Revenue Generated", value: "£72K" },
    ],
    quote: "The quality of leads is unreal. These aren't tyre-kickers — they're ready to buy.",
    period: "First 60 Days",
  },
  {
    niche: "Landscaping Business",
    location: "Leeds, UK",
    results: [
      { icon: Users, label: "Leads Generated", value: "203" },
      { icon: DollarSign, label: "Cost Per Lead", value: "£6.20" },
      { icon: TrendingUp, label: "Revenue Generated", value: "£35K" },
    ],
    quote: "We had to hire two new crew members just to keep up with the demand.",
    period: "First 90 Days",
  },
];

const CaseStudiesSection = () => (
  <section id="case-studies" className="py-24 bg-hero">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Proven Results</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-primary-foreground">
          Real Results for Real Businesses
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.niche}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8 flex flex-col"
          >
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">{cs.period}</span>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mt-1">{cs.niche}</h3>
              <p className="text-primary-foreground/50 text-sm">{cs.location}</p>
            </div>

            <div className="space-y-4 mb-8">
              {cs.results.map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-secondary/15 flex items-center justify-center">
                    <r.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/50">{r.label}</p>
                    <p className="font-heading font-bold text-lg text-primary-foreground">{r.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-auto border-l-2 border-secondary/40 pl-4 text-primary-foreground/70 text-sm italic">
              "{cs.quote}"
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
