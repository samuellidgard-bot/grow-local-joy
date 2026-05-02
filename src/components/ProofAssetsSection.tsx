import { motion } from "framer-motion";
import { Camera, CheckCircle2, Images, MapPinned } from "lucide-react";

const assetGroups = [
  {
    icon: Images,
    title: "Project proof",
    items: ["Before and after photos", "Finished rooms or exteriors", "Work-in-progress clips"],
  },
  {
    icon: Camera,
    title: "Filming access",
    items: ["One active or recent project", "Permission to film on-site", "A simple walkthrough or team clip"],
  },
  {
    icon: MapPinned,
    title: "Local targeting",
    items: ["Best service areas", "Jobs you want more of", "Budget range and ideal customer"],
  },
];

const ProofAssetsSection = () => (
  <section id="proof" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary">What Helps The Test Work</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-foreground">
            The best ads come from <span className="text-gradient-primary">real proof</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            Homeowners need to trust the people entering their home. That means
            the strongest campaign assets are usually real project visuals,
            clear local proof and a simple reason to enquire now.
          </p>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            If you do not have polished content yet, that is fine. The test can
            start with a site visit, practical filming and one clear service
            offer.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-border shadow-card">
            <img
              src="/renovation-before-after.png"
              alt="Example renovation before and after visual"
              className="h-72 w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {assetGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-border bg-card p-6 shadow-card"
            >
              <div className="h-11 w-11 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <group.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-card-foreground mb-4">{group.title}</h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProofAssetsSection;
