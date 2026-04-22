import { useEffect, useState } from "react";
import { ArrowRight, Droplets } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import etpImg from "@/assets/hero-etp.svg";
import stpImg from "@/assets/hero-stp.svg";
import roImg from "@/assets/hero-ro.svg";
import coolingImg from "@/assets/hero-cooling.svg";
import logo from "@/assets/pgnovus-logo.svg";

const SLIDES = [
  { src: etpImg, alt: "Large-scale effluent treatment plant" },
  { src: stpImg, alt: "Sewage treatment plant aeration tanks" },
  { src: roImg, alt: "Membrane reverse osmosis system" },
  { src: coolingImg, alt: "Industrial cooling towers" },
];

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero = ({ onQuoteClick }: HeroProps) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Carousel */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              i === active ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={i !== active}
          >
            <img
              src={s.src}
              alt={s.alt}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              width={1920}
              height={1280}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto container-px relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-wide mb-6">
            <Droplets size={14} className="text-brand" />
            ENGINEERED WATER TREATMENT SINCE 2020
          </div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance" style={{ color: "white" }}>
            Industrial Water Solutions<br />
            <span className="text-brand">Engineered for Tomorrow.</span>
          </h1>
          <p className="text-white/85 text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed">
            We design, build and commission turnkey ETP, STP, RO, DM and Cooling Tower systems
            for industries committed to sustainable water management.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={onQuoteClick} variant="primary" size="lg">
              Request a Quote <ArrowRight size={18} />
            </Button>
            <Button onClick={() => goTo("#solutions")} variant="white" size="lg">
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* Watermark logo */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-8 right-8 w-24 opacity-20 z-10"
      />

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-10 bg-brand" : "w-6 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
};
