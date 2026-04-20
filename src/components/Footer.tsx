import icon from "@/assets/icon.png";

const Footer = () => (
  <footer className="bg-navy py-12 border-t border-primary-foreground/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={icon} alt="Xello Media" className="h-8 w-8 -mr-1" />
          <span className="font-heading font-bold text-lg text-primary-foreground tracking-tight">ELLO <span className="text-secondary">MEDIA</span></span>
        </div>
        <p className="text-primary-foreground/40 text-sm text-center">
          © {new Date().getFullYear()} Xello Media. All rights reserved. More Leads. More Jobs. More Growth.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
