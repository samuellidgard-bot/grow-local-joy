import logo from "@/assets/xello-media-logo-approved.png";

const Footer = () => (
  <footer className="bg-navy py-12 border-t border-primary-foreground/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Xello Media" className="h-8 w-auto" />
        <div className="text-center md:text-right">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Xello Media. Brighton & Hove marketing tests for renovation companies.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:justify-end">
            <a href="mailto:sam@xellomedia.co.uk" className="text-primary-foreground/60 transition-colors hover:text-secondary">
              sam@xellomedia.co.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
