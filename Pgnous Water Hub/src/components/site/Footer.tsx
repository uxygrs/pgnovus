import { MapPin, Phone, Mail, Globe, Share2, Send } from "lucide-react";
import logo from "@/assets/pgnovus-logo.png";
import { Button } from "@/components/ui/Button";

interface FooterProps {
  onQuoteClick: () => void;
}

const QUICK_LINKS = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#partners", label: "Partners" },
  { href: "#csr", label: "PG Novus Cares" },
];

const SOLUTIONS = ["ETP Systems", "STP Systems", "Membrane RO", "DM Plants", "Cooling Towers"];

export const Footer = ({ onQuoteClick }: FooterProps) => (
  <footer id="contact" className="bg-navy text-white">
    {/* Contact band */}
    <div className="border-b border-white/10">
      <div className="container mx-auto container-px py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-brand text-xs font-bold tracking-widest mb-3">GET IN TOUCH</div>
          <h2 className="text-white text-3xl lg:text-4xl mb-4 text-balance" style={{ color: "white" }}>
            Have a project? Let's engineer your water solution.
          </h2>
          <p className="text-white/70 text-base lg:text-lg max-w-xl">
            Share your requirements and our engineering team will respond within 24 hours
            with a custom proposal.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <Button onClick={onQuoteClick} variant="primary" size="lg">
            Request a Quote
          </Button>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="container mx-auto container-px py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="lg:col-span-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-white rounded-xl p-1.5">
            <img src={logo} alt="PG Novus" className="h-10 w-10" />
          </div>
          <div className="leading-tight">
            <div className="font-heading font-bold text-lg">PG NOVUS</div>
            <div className="text-[10px] text-white/60 tracking-widest">WATER SOLUTIONS</div>
          </div>
        </div>
        <p className="text-white/70 text-sm leading-relaxed mb-5">
          Engineering sustainable water treatment for industries and communities since 2020.
        </p>
        <div className="flex gap-2">
          {[Globe, Share2, Send].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social link"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand transition-colors flex items-center justify-center"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wider" style={{ color: "white" }}>QUICK LINKS</h4>
        <ul className="space-y-2.5">
          {QUICK_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white/70 hover:text-brand text-sm transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wider" style={{ color: "white" }}>SOLUTIONS</h4>
        <ul className="space-y-2.5">
          {SOLUTIONS.map((s) => (
            <li key={s}>
              <a href="#solutions" className="text-white/70 hover:text-brand text-sm transition-colors">{s}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4 text-sm tracking-wider" style={{ color: "white" }}>CONTACT</h4>
        <ul className="space-y-3 text-sm text-white/70">
          <li className="flex gap-3">
            <MapPin size={16} className="text-brand mt-0.5 shrink-0" />
            <span>Plot 14, Industrial Area Phase II,<br />Pune, Maharashtra 411019, India</span>
          </li>
          <li className="flex gap-3">
            <Phone size={16} className="text-brand shrink-0" />
            <a href="tel:+912045000000" className="hover:text-brand transition-colors">+91 20 4500 0000</a>
          </li>
          <li className="flex gap-3">
            <Mail size={16} className="text-brand shrink-0" />
            <a href="mailto:contact@pgnovus.com" className="hover:text-brand transition-colors">contact@pgnovus.com</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container mx-auto container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <div>© {new Date().getFullYear()} PG Novus Water Solutions. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-brand">Privacy Policy</a>
          <a href="#" className="hover:text-brand">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
