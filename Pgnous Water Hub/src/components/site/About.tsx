import { Award, Factory, Droplets } from "lucide-react";

const STATS = [
  { icon: Award, value: "6+", label: "Years of Engineering Excellence" },
  { icon: Factory, value: "95+", label: "Plants Commissioned" },
  { icon: Droplets, value: "100 ML", label: "Treated Daily" },
];

export const About = () => (
  <section id="about" className="section-py bg-white bg-ripple">
    <div className="container mx-auto container-px">
      <div className="max-w-3xl mb-14">
        <div className="text-brand text-xs font-bold tracking-widest mb-3">ABOUT PG NOVUS</div>
        <h2 className="text-3xl lg:text-5xl mb-5 text-balance">
          Mission-driven water engineering for a thirsty planet.
        </h2>
        <p className="text-slate text-lg leading-relaxed">
          PG Novus is a full-service industrial water solutions provider. From design and fabrication to
          installation and lifecycle support, we deliver compliant, energy-efficient treatment systems
          that turn wastewater into a resource — across pharma, textiles, food &amp; beverage, power and
          municipal sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="bg-mist rounded-2xl p-7 border border-border-subtle hover:shadow-card transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-card">
              <Icon className="text-brand" size={22} />
            </div>
            <div className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-1">{value}</div>
            <div className="text-slate text-sm font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
