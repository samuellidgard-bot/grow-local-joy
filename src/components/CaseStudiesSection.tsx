import { motion } from "framer-motion";
import { ClipboardCheck, MousePointerClick, Search, TrendingUp } from "lucide-react";

const launchPlan = [
  {
    phase: "Step 1",
    title: "10-Minute Fit Call",
    icon: Search,
    points: ["Understand what work you want more of", "Check your website, social proof and local area", "Decide if a small test is worth running"],
  },
  {
    phase: "Step 2",
    title: "Site Visit & Test Build",
    icon: MousePointerClick,
    points: ["Film one useful project or service angle", "Build one simple Meta campaign", "Set up tracking so enquiries are not guessed"],
  },
  {
    phase: "Step 3",
    title: "Review The Real Outcome",
    icon: TrendingUp,
    points: ["Review enquiries, quality and cost", "Spot website or follow-up improvements", "Only discuss ongoing work if the test creates useful evidence"],
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
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">How It Works</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-primary-foreground">
          A lower-risk way to test if paid content can generate enquiries
        </h2>
        <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
          The first goal is not to sell a huge package. It is to start with one realistic test, learn quickly and decide whether a bigger growth system is worth building.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {launchPlan.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8 flex flex-col"
          >
            <div className="mb-6">
              <div className="h-11 w-11 rounded-md bg-secondary/15 flex items-center justify-center mb-5">
                <step.icon className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">{step.phase}</span>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mt-1">{step.title}</h3>
            </div>

            <div className="space-y-4">
              {step.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ClipboardCheck className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-lg border border-secondary/25 bg-secondary/10 p-6 text-center"
      >
        <p className="font-heading text-xl font-bold text-primary-foreground">
          Best fit: renovation companies that can handle more quote requests and have at least one real project we can use for proof-led content.
        </p>
        <p className="mt-2 text-sm text-primary-foreground/68">
          Not a fit if you want guaranteed leads, zero ad spend, or a full website rebuild for free.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CaseStudiesSection;
