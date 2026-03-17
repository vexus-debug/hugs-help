import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-6 py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Rubi Smile</h3>
          <p className="font-body text-sm leading-relaxed opacity-70">
            Expert dental care that feels like family. Modern, gentle dentistry at No 6 November Street, near Chief Palace Layout, Karu, Abuja.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Contact</h4>
          <div className="flex flex-col gap-3 text-sm font-body opacity-70">
            <span className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> No 6 November Street, near Chief Palace Layout, Karu, Abuja</span>
            <a href="https://wa.me/2349038535214" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <MessageCircle className="h-4 w-4 shrink-0" /> 0903 853 5214 (WhatsApp)
            </a>
            <a href="tel:+2349024403837" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Phone className="h-4 w-4 shrink-0" /> 0902 440 3837 (Call/Enquiry)
            </a>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> rubiismiledentalclinic@gmail.com</span>
            <span className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> Mon – Fri: 9AM – 5:30PM | Sat: 9AM – 3:30PM</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Legal</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms & Conditions", to: "/terms" },
              { label: "Disclaimer", to: "/disclaimer" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-12 border-t border-background/10 pt-8 text-center">
        <p className="font-body text-xs opacity-50">
          © {new Date().getFullYear()} Rubi Smile Dental Clinic. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
