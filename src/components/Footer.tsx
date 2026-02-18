import { Link } from "react-router-dom";
import { Home, FileText, Star, User, Phone, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Services", path: "/services", icon: FileText },
  { label: "Testimonials", path: "/testimonials", icon: Star },
  { label: "About Us", path: "/about", icon: User },
  { label: "Contact Us", path: "/contact", icon: Phone },
];

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-main px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Alpha Asset Finserv" className="h-12 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              AMFI Registered Mutual Fund Distributor promoting financial awareness and responsible investing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.instagram.com/alpha_asset_finserv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                📸 Instagram
              </a>
              <a href="https://www.linkedin.com/in/petahemanthprasad999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                💼 LinkedIn
              </a>
              <a href="https://youtube.com/@petahemanthprasad" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                🎬 YouTube
              </a>
              <a href="https://www.facebook.com/share/1ahqdQVk26/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                📘 Facebook
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-lg">Contact Details</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                9700505046, 9121796816
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                alphaassetfinserv.in@gmail.com
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                26-12-574/1, First Floor, Bank Colony, BV Nagar, Nellore – 524004
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                Nellore, Vijayawada, Tirupati & Hyderabad (AP & Telangana)
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                Mon–Sat: 9AM – 8PM | Sunday: Holiday
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="border-t border-border">
        <div className="container-main px-4 md:px-8 py-8">
          <h4 className="text-foreground font-semibold mb-4 text-lg text-center">Our Location</h4>
          <div className="rounded-xl overflow-hidden border border-border glow-emerald-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5!2d79.9865!3d14.4426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI2JzMzLjQiTiA3OcKwNTknMTEuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpha Asset Finserv Location"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-primary" /> 9700505046
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-primary" /> alphaassetfinserv.in@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" /> Mon–Sat: 9AM – 8PM | Sunday: Holiday
            </span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-border py-4 px-4 md:px-8">
        <div className="container-main">
          <p className="text-[11px] text-muted-foreground/70 text-center">
            ⚠ Disclaimer: Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
          </p>
          <p className="text-[11px] text-muted-foreground/50 text-center mt-1">
            © {new Date().getFullYear()} Alpha Asset Finserv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
