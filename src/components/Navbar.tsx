import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-full.png";

const links = [
  { label: "14-Day Test", href: "#services" },
  { label: "Process", href: "#case-studies" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
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
        <img src={logo} alt="Xello Media" className="h-9 w-auto" />

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
            className="bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-semibold rounded-md"
          >
            Book Call
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
            className="w-full bg-secondary hover:bg-orange-light text-secondary-foreground font-heading font-semibold rounded-md"
          >
            Book Call
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
