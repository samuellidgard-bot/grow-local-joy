import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import icon from "@/assets/icon.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden flex items-center">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <img src={icon} alt="Xello Media" className="h-16 w-16 -mr-2" />
              <span className="font-heading font-extrabold text-4xl text-primary-foreground tracking-tight">ELLO <span className="text-secondary">MEDIA</span></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">
              7-Day Free Trial — No Management Fee
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary-foreground leading-[1.1] mb-6"
          >
            More Leads. More Jobs.{" "}
            <span className="text-gradient-accent">More Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-body"
          >
            We help home improvement businesses generate consistent, high-quality
            leads using proven Meta ad systems designed to scale. Painting,
            roofing, landscaping — we've got you covered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-bold text-lg px-8 py-6 rounded-xl shadow-elevated transition-all hover:shadow-glow hover:scale-[1.02]"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold text-lg px-8 py-6 rounded-xl"
            >
              <Play className="mr-2 h-5 w-5" />
              See Case Studies
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/40 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Zero Risk Start
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              30-Day Lead Guarantee
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Meta Ads Specialists
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
