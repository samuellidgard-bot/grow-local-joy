import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import icon from "@/assets/icon.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-lg border-b border-primary-foreground/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={icon} alt="Xello Media" className="h-10 w-10 -mr-1" />
          <span className="font-heading font-bold text-xl text-primary-foreground tracking-tight">ELLO <span className="text-secondary">MEDIA</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollTo("#contact")}
            className="bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-semibold rounded-lg"
          >
            Free Trial
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-primary-foreground/5 px-6 py-4 space-y-3">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground py-2"
            >
              {l.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollTo("#contact")}
            className="w-full bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-semibold rounded-lg"
          >
            Free Trial
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
