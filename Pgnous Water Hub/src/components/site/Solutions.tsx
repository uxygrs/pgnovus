import { useState } from "react";
import { Beaker, Recycle, Filter, FlaskConical, Wind, Layers, Boxes, Droplet, Trash2, ChevronDown, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Spec { label: string; value: string; }
interface Solution {
  icon: LucideIcon;
  title: string;
  shortName: string;
  desc: string;
  specs: Spec[];
}

const SOLUTIONS: Solution[] = [
  {
    icon: Beaker,
    title: "Effluent Treatment Plants",
    shortName: "ETP",
    desc: "Turnkey ETPs for industrial wastewater — physico-chemical and biological treatment with sludge handling.",
    specs: [
      { label: "Capacity Range", value: "10 – 5,000 m³/day" },
      { label: "BOD Removal", value: "≥ 95%" },
      { label: "COD Removal", value: "≥ 90%" },
      { label: "Footprint", value: "Compact modular skid" },
      { label: "Power", value: "0.6 – 1.2 kWh/m³" },
    ],
  },
  {
    icon: Recycle,
    title: "Sewage Treatment Plants",
    shortName: "STP",
    desc: "MBBR, SBR and MBR-based STPs for housing, commercial complexes and municipal applications.",
    specs: [
      { label: "Capacity Range", value: "5 – 10,000 m³/day" },
      { label: "Technology", value: "MBBR / SBR / MBR" },
      { label: "Outlet BOD", value: "< 10 mg/L" },
      { label: "Footprint", value: "30 – 50% lower than conventional" },
      { label: "Power", value: "0.4 – 0.8 kWh/m³" },
    ],
  },
  {
    icon: Filter,
    title: "Membrane RO Systems",
    shortName: "RO",
    desc: "High-recovery reverse osmosis plants for process water, recycle and ZLD applications.",
    specs: [
      { label: "Capacity Range", value: "1 – 500 m³/hr" },
      { label: "Recovery", value: "Up to 85%" },
      { label: "Salt Rejection", value: "≥ 99.5%" },
      { label: "Membrane", value: "TFC Polyamide, 8\" / 4\"" },
      { label: "Power", value: "3 – 5 kWh/m³" },
    ],
  },
  {
    icon: FlaskConical,
    title: "De-mineralization Units",
    shortName: "DM",
    desc: "Two-bed and mixed-bed DM plants for boiler feed, pharma and electronics-grade water.",
    specs: [
      { label: "Capacity Range", value: "0.5 – 200 m³/hr" },
      { label: "Outlet Conductivity", value: "< 1 µS/cm" },
      { label: "Silica", value: "< 0.02 mg/L" },
      { label: "Configuration", value: "TB / MB / Polisher" },
      { label: "Regeneration", value: "Co/Counter current" },
    ],
  },
  {
    icon: Wind,
    title: "Cooling Towers",
    shortName: "CT",
    desc: "Induced and natural draft FRP cooling towers with side-stream filtration and dosing systems.",
    specs: [
      { label: "Capacity Range", value: "10 – 5,000 TR" },
      { label: "Type", value: "Cross-flow / Counter-flow" },
      { label: "Approach", value: "3 – 5 °C" },
      { label: "Material", value: "FRP / Pultruded" },
      { label: "Drift Loss", value: "< 0.005%" },
    ],
  },
  {
    icon: Layers,
    title: "Membrane Bio-Reactor",
    shortName: "MBR",
    desc: "Compact MBR systems combining biological treatment with ultrafiltration membranes for superior effluent reuse.",
    specs: [
      { label: "Capacity Range", value: "10 – 10,000 m³/day" },
      { label: "Membrane Type", value: "Hollow Fibre / Flat Sheet" },
      { label: "Outlet Turbidity", value: "< 0.2 NTU" },
      { label: "MLSS", value: "8,000 – 12,000 mg/L" },
      { label: "Footprint", value: "50 – 70% lower than conventional" },
    ],
  },
  {
    icon: Boxes,
    title: "Moving Bed Bio-Reactor",
    shortName: "MBBR",
    desc: "Attached-growth MBBR systems with virgin HDPE carriers for robust BOD/COD and ammonia removal.",
    specs: [
      { label: "Capacity Range", value: "5 – 5,000 m³/day" },
      { label: "Carrier Fill", value: "40 – 60%" },
      { label: "Specific Surface Area", value: "500 – 800 m²/m³" },
      { label: "BOD Removal", value: "≥ 95%" },
      { label: "Ammonia Removal", value: "≥ 90%" },
    ],
  },
  {
    icon: Droplet,
    title: "Ultrafiltration Systems",
    shortName: "UF",
    desc: "Hollow-fibre UF skids for pre-treatment to RO, surface water clarification and tertiary polishing.",
    specs: [
      { label: "Capacity Range", value: "1 – 500 m³/hr" },
      { label: "Pore Size", value: "0.02 – 0.05 µm" },
      { label: "SDI Outlet", value: "< 3" },
      { label: "Recovery", value: "90 – 95%" },
      { label: "Flux", value: "40 – 80 LMH" },
    ],
  },
  {
    icon: Trash2,
    title: "Sludge Handling Systems",
    shortName: "SHS",
    desc: "End-to-end sludge thickening, dewatering and drying with filter press, centrifuge and screw press options.",
    specs: [
      { label: "Capacity Range", value: "50 – 5,000 kg/hr (DS)" },
      { label: "Equipment", value: "Filter Press / Centrifuge / Screw Press" },
      { label: "Cake Dryness", value: "20 – 35% DS" },
      { label: "Polymer Dosing", value: "Integrated auto skid" },
      { label: "Operation", value: "Manual / Semi / Fully-auto" },
    ],
  },
];

const SolutionCard = ({ s }: { s: Solution }) => {
  const [open, setOpen] = useState(false);
  const Icon = s.icon;
  return (
    <article className="group bg-white rounded-2xl border border-border-subtle hover:border-brand/40 hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col">
      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-5">
          <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
            <Icon className="text-white" size={26} />
          </div>
          <span className="text-xs font-bold tracking-widest text-brand bg-brand/10 px-2.5 py-1 rounded-md">
            {s.shortName}
          </span>
        </div>
        <h3 className="text-xl mb-2">{s.title}</h3>
        <p className="text-slate text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-lg bg-mist hover:bg-mist/70 text-navy text-sm font-semibold transition-colors"
        >
          <span>Technical specifications</span>
          <ChevronDown
            size={18}
            className={cn("transition-transform", open && "rotate-180")}
          />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <table className="w-full text-sm border-t border-border-subtle">
          <tbody>
            {s.specs.map((spec) => (
              <tr key={spec.label} className="border-b border-border-subtle last:border-0">
                <td className="px-7 py-3 text-slate font-medium w-1/2">{spec.label}</td>
                <td className="px-7 py-3 text-navy font-semibold text-right">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export const Solutions = () => (
  <section id="solutions" className="section-py bg-gradient-mist">
    <div className="container mx-auto container-px">
      <div className="max-w-3xl mb-14">
        <div className="text-brand text-xs font-bold tracking-widest mb-3">PRODUCTS &amp; SERVICES</div>
        <h2 className="text-3xl lg:text-5xl mb-5 text-balance">
          A complete portfolio of industrial water systems.
        </h2>
        <p className="text-slate text-lg leading-relaxed">
          Each solution is custom-engineered, factory-built and field-commissioned by PG Novus.
          Click any card to view technical specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SOLUTIONS.map((s) => <SolutionCard key={s.shortName} s={s} />)}
      </div>
    </div>
  </section>
);
