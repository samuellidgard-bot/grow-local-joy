import { motion } from "framer-motion";
import { ArrowRight, Camera, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-full.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] bg-hero overflow-hidden flex items-center">
      <img
        src="/renovation-before-after.png"
        alt="House renovation before and after concept"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/72 to-black/88" />

      <div className="container mx-auto px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-8">
              <img src={logo} alt="Xello Media" className="h-16 sm:h-20 w-auto" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-md border border-secondary/30 bg-secondary/10 px-4 py-2 mb-6"
          >
            <MapPin className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Brighton & Hove growth tests for renovation companies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.04] mb-6 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
          >
            Test whether better content can bring you more{" "}
            <span className="text-gradient-accent">local renovation enquiries.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/88 max-w-3xl mx-auto mb-8 font-body leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
          >
            I help builders, extension companies, kitchen fitters and renovation
            firms around Sussex run a capped 14-day test: one filmed advert, one
            local offer, simple tracking and a clear review before any retainer is discussed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mb-10 grid gap-3 sm:grid-cols-3 max-w-4xl mx-auto"
          >
            {[
              "Built for high-value home improvement work",
              "No lead guarantees or fake case studies",
              "You stay in control of ad spend",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 rounded-md border border-white/18 bg-black/35 px-3 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-10 grid gap-3 sm:grid-cols-3 text-left max-w-4xl mx-auto"
          >
            <div className="rounded-md border border-white/18 bg-black/35 p-4 backdrop-blur-sm">
              <GraduationCap className="mb-3 h-5 w-5 text-secondary" />
              <p className="text-sm font-semibold text-white">Digital Marketing BA</p>
              <p className="mt-1 text-xs leading-relaxed text-white/72">Falmouth University graduate, focused on practical local growth.</p>
            </div>
            <div className="rounded-md border border-white/18 bg-black/35 p-4 backdrop-blur-sm">
              <Camera className="mb-3 h-5 w-5 text-secondary" />
              <p className="text-sm font-semibold text-white">On-site filming available</p>
              <p className="mt-1 text-xs leading-relaxed text-white/72">Drone, camera and microphones for real project content.</p>
            </div>
            <div className="rounded-md border border-white/18 bg-black/35 p-4 backdrop-blur-sm">
              <CheckCircle2 className="mb-3 h-5 w-5 text-secondary" />
              <p className="text-sm font-semibold text-white">Tracked, not guessed</p>
              <p className="mt-1 text-xs leading-relaxed text-white/72">Every test is built around leads, next steps and clear learning.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-bold text-lg px-8 py-6 rounded-md shadow-elevated transition-all hover:shadow-glow hover:scale-[1.02]"
            >
              Book A 10-Minute Growth Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/28 bg-black/25 text-white hover:bg-white/10 hover:text-white font-heading font-semibold text-lg px-8 py-6 rounded-md backdrop-blur-sm"
            >
              See The 14-Day Test
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 grid gap-3 sm:grid-cols-3 text-white/78 text-sm font-medium max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              Free initial growth audit
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              14-day local lead test
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              Client controls ad spend
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
