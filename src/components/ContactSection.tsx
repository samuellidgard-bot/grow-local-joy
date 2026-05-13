import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, Send } from "lucide-react";

const callSteps = [
  "Sam reviews your website, socials, Google presence and enquiry route before replying.",
  "The call checks which foundations need tightening first.",
  "Ads and retainers are only discussed once the basics are ready.",
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Start With The Foundations</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
              Ask Xello to review your online foundations
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Send a few details and I will personally check what needs improving before more traffic or ad spend is pushed at the business.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] items-start">
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-card p-7 shadow-card"
            >
              <h3 className="font-heading text-2xl font-extrabold text-card-foreground">
                What happens after you enquire?
              </h3>
              <div className="mt-6 space-y-4">
                {callSteps.map((step) => (
                  <div key={step} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-md bg-muted p-5">
                <p className="text-sm font-semibold text-card-foreground">Best for:</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Renovation, extension, kitchen, bathroom, roofing, garden room and design-build companies around Brighton, Hove and Sussex.
                </p>
              </div>
              <div className="mt-6 rounded-md border border-secondary/25 bg-secondary/10 p-5">
                <p className="text-sm font-semibold text-card-foreground">No surprise calls.</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Enquiries come through first, then Sam replies to arrange a time so both sides are ready.
                </p>
              </div>
            </motion.aside>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              action="https://formsubmit.co/sam@xellomedia.co.uk"
              method="POST"
              className="bg-card rounded-lg p-8 sm:p-10 shadow-card border border-border space-y-5"
            >
              <input type="hidden" name="_subject" value="New Xello Media Starter Foundations Enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
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
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Main service to grow</label>
                  <Input name="main_service" placeholder="Extensions, kitchens, bathrooms..." className="h-12 rounded-md" />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-1.5 block">Biggest weak spot right now</label>
                  <Input name="biggest_weak_spot" placeholder="Website, Google, social proof, tracking..." className="h-12 rounded-md" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">What would you like more enquiries for?</label>
                <Textarea
                  required
                  name="message"
                  placeholder="Tell me what kind of projects you want more of and what you think currently holds your marketing back."
                  className="min-h-[120px] rounded-md"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-bold text-lg h-14 rounded-md shadow-elevated transition-all hover:scale-[1.01]"
              >
                Ask Sam To Review My Business
                <Send className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                No automated sales spam. I will review your business first and reply personally.
              </p>
              <a
                href="mailto:sam@xellomedia.co.uk?subject=Starter%20Foundations%20Review"
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                Prefer email? sam@xellomedia.co.uk
              </a>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
