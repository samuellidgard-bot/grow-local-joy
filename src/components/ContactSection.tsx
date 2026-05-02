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
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Start With A Quick Call</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
              Want to test a better way to get local enquiries?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Send a few details and I will review whether a small 14-day lead test is a good fit for your business.
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
            <input type="hidden" name="_subject" value="New Xello Media 14-Day Test Enquiry" />
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
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Website or Instagram</label>
                <Input name="website_or_instagram" placeholder="https://yourwebsite.co.uk or @yourcompany" className="h-12 rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Best area to target</label>
                <Input name="target_area" placeholder="Brighton, Hove, Worthing..." className="h-12 rounded-md" />
              </div>
            </div>
            <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">What would you like more enquiries for?</label>
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
              Request A 10-Minute Growth Call
              <Send className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="mailto:sam@xellomedia.co.uk?subject=Renovation%2014-Day%20Lead%20Test"
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
