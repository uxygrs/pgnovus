import { Handshake, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Principal { name: string; origin: string; focus: string; }

const PRINCIPALS: Principal[] = [
  { name: "AquaLife", origin: "Global", focus: "Membrane elements & water reuse" },
  { name: "Veolia Water Technologies", origin: "France", focus: "Process water & ZLD systems" },
  { name: "DOW Chemicals", origin: "USA", focus: "FilmTec™ RO & ion-exchange resins" },
  { name: "Ion Exchange", origin: "India", focus: "DM resins & specialty chemicals" },
  { name: "Thermax", origin: "India", focus: "Water, wastewater & chemicals" },
];

export const Partners = () => (
  <section id="partners" className="section-py bg-white">
    <div className="container mx-auto container-px">
      <div className="max-w-2xl mb-12">
        <div className="text-brand text-xs font-bold tracking-widest mb-3">AUTHORISED CHANNEL PARTNERSHIPS</div>
        <h2 className="text-3xl lg:text-5xl mb-5 text-balance">
          Authorised channel partner of the world's leading water-technology brands.
        </h2>
        <p className="text-slate text-lg leading-relaxed">
          PG Novus is an authorised channel partner for the following principals — giving our clients
          direct access to genuine equipment, OEM warranties and certified technical support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRINCIPALS.map((p) => (
          <div
            key={p.name}
            className="bg-mist rounded-2xl p-6 border border-border-subtle hover:border-brand/40 hover:shadow-card transition-all"
          >
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-brand bg-white px-2.5 py-1 rounded mb-4">
              <BadgeCheck size={12} /> AUTHORISED CHANNEL PARTNER
            </div>
            <h3 className="text-lg mb-2">{p.name}</h3>
            <div className="text-xs text-slate font-semibold tracking-wide uppercase mb-2">{p.origin}</div>
            <p className="text-sm text-slate leading-relaxed">{p.focus}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-navy rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-elevated">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center shrink-0">
            <Handshake className="text-brand" size={22} />
          </div>
          <div>
            <h3 className="text-white text-xl mb-1" style={{ color: "white" }}>Partner with PG Novus</h3>
            <p className="text-white/70 text-sm">OEMs and technology providers — collaborate with us to deliver world-class water solutions across India.</p>
          </div>
        </div>
        <Button
          variant="primary"
          size="lg"
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  </section>
);
