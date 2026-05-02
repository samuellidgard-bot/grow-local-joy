import logo from "@/assets/logo-full.png";

const Footer = () => (
  <footer className="bg-navy py-12 border-t border-primary-foreground/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Xello Media" className="h-8 w-auto" />
        <p className="text-primary-foreground/40 text-sm text-center">
          © {new Date().getFullYear()} Xello Media. Brighton & Hove marketing tests for renovation companies.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
