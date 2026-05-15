import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden flex items-center">
      <img
        src="/xello-hero-home.png"
        alt="Premium home exterior at night"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.38)_70%)]" />

      <div className="container mx-auto px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-8 text-secondary/95"
          >
            <span className="text-secondary">✦</span>
            <MapPin className="h-4 w-4" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.32em]">
              Marketing foundations for home improvement businesses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-5xl sm:text-6xl lg:text-8xl font-extrabold uppercase tracking-normal text-white leading-[0.96] mb-7 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
          >
            We build your online system for{" "}
            <span className="text-gradient-accent block sm:inline">better enquiries.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/75 max-w-3xl mx-auto mb-10 font-body leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
          >
            Social profiles, Google Business, website enquiry routes, proof
            content and lead tracking, tightened before you scale with ads.
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
              className="bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-bold text-lg px-10 py-7 rounded-md shadow-elevated transition-all hover:shadow-glow hover:scale-[1.02]"
            >
              Request A Foundations Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-black/25 text-white hover:bg-white/10 hover:text-white font-heading font-semibold text-lg px-10 py-7 rounded-md backdrop-blur-sm"
            >
              <a href="https://wa.me/447883762396" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
