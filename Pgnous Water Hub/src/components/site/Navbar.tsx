import { useState } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/Button";
import logo from "@/assets/pgnovus-logo.png";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#partners", label: "Partners" },
  { href: "#csr", label: "CSR" },
  { href: "#contact", label: "Contact" },
];

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar = ({ onQuoteClick }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-border-subtle">
      <nav className="container mx-auto container-px flex items-center justify-between h-16 lg:h-20">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="flex items-center gap-2.5 group"
          aria-label="PG Novus home"
        >
          <img src={logo} alt="PG Novus logo" className="h-9 w-9 lg:h-10 lg:w-10" />
          <div className="hidden sm:block leading-tight">
            <div className="font-heading font-bold text-navy text-base lg:text-lg tracking-tight">PG NOVUS</div>
            <div className="text-[10px] lg:text-xs text-slate font-medium tracking-widest">WATER SOLUTIONS</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="px-3 py-2 text-sm font-semibold text-navy/80 hover:text-brand transition-colors rounded-md"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button onClick={onQuoteClick} variant="primary" size="sm" className="hidden sm:inline-flex">
            <Droplets size={16} />
            Request a Quote
          </Button>
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-border-subtle",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="container mx-auto container-px py-3 flex flex-col">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="block py-3 text-navy font-semibold border-b border-border-subtle last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3 sm:hidden">
            <Button onClick={() => { setOpen(false); onQuoteClick(); }} className="w-full">
              <Droplets size={16} /> Request a Quote
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
