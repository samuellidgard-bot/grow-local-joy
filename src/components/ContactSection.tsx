import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("We'll be in touch within 24 hours!");
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Get Started</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
              Ready to Scale Your Business?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Book your free strategy call and start your 7-day trial.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-card rounded-2xl shadow-card border border-border"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-2xl text-card-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">We'll be in touch within 24 hours to schedule your strategy call.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 sm:p-10 shadow-card border border-border space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name</label>
                  <Input required placeholder="John Smith" className="h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Business Name</label>
                  <Input required placeholder="Smith Painting Co." className="h-12 rounded-xl" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Email</label>
                  <Input required type="email" placeholder="john@smithpainting.co.uk" className="h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Phone</label>
                  <Input required type="tel" placeholder="+44 7700 900000" className="h-12 rounded-xl" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Tell us about your business</label>
                <Textarea
                  required
                  placeholder="What services do you offer? What's your current monthly revenue? What are your growth goals?"
                  className="min-h-[120px] rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-bold text-lg h-14 rounded-xl shadow-elevated transition-all hover:scale-[1.01]"
              >
                {loading ? "Submitting..." : "Start My Free 7-Day Trial"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                No management fee during trial. You only cover ad spend.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
