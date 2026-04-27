import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Free Growth Audit</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
              Want more local renovation enquiries?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Tell us where you are now. We will review your website, social presence and local ad opportunity, then come back with practical next steps.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/sam@xellomedia.co.uk"
            method="POST"
            className="bg-card rounded-lg p-8 sm:p-10 shadow-card border border-border space-y-5"
          >
            <input type="hidden" name="_subject" value="New Xello Media Growth Audit Request" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name</label>
                <Input required name="name" placeholder="John Smith" className="h-12 rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Business Name</label>
                <Input required name="business" placeholder="Brighton Renovations Ltd" className="h-12 rounded-md" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Email</label>
                <Input required name="email" type="email" placeholder="john@brightonrenovations.co.uk" className="h-12 rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Phone</label>
                <Input required name="phone" type="tel" placeholder="+44 7700 900000" className="h-12 rounded-md" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Website or Instagram</label>
              <Input name="website_or_instagram" placeholder="https://yourwebsite.co.uk or @yourcompany" className="h-12 rounded-md" />
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">What do you want more of?</label>
              <Textarea
                required
                name="message"
                placeholder="Extensions, loft conversions, kitchens, bathrooms, full refurbishments, higher budget projects..."
                className="min-h-[120px] rounded-md"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-bold text-lg h-14 rounded-md shadow-elevated transition-all hover:scale-[1.01]"
            >
              Request My Free Growth Audit
              <Send className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="mailto:sam@xellomedia.co.uk?subject=Renovation%20Growth%20Audit"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              Prefer email? sam@xellomedia.co.uk
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
