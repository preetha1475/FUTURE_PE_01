import { Coffee, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Coffee className="w-8 h-8 text-primary-foreground" />
                <Heart className="w-3 h-3 text-accent absolute -top-1 -right-1" />
              </div>
              <span className="font-display text-2xl font-semibold text-primary-foreground">
                Cafe <span className="text-highlight">Crush</span>
              </span>
            </a>
            <p className="font-body text-primary-foreground/70 max-w-sm mb-6">
              Where every sip tells a love story. Join us for artisan coffee, 
              fresh pastries, and moments that matter.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Menu", "About", "Gallery", "Visit"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-primary-foreground/70">
              <li>123 Love Lane, Downtown</li>
              <li>San Francisco, CA 94102</li>
              <li className="pt-2">hello@cafecrush.com</li>
              <li>+1 (415) 555-LOVE</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-primary-foreground/60">
              © {currentYear} Cafe Crush. Made with{" "}
              <Heart className="w-4 h-4 inline text-accent" /> in San Francisco.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
