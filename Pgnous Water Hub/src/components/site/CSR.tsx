import { Heart, GraduationCap, Trees, Users } from "lucide-react";
import csrImg from "@/assets/csr-children.jpg";

const INITIATIVES = [
  { icon: GraduationCap, title: "Schools & Education", desc: "Installing safe drinking water systems in 5 rural schools, reaching nearly 1,500 students." },
  { icon: Trees, title: "Water Sustainability", desc: "Pilot rainwater harvesting and groundwater recharge projects in two drought-prone villages." },
  { icon: Users, title: "Community Outreach", desc: "Training local technicians to operate and maintain the installed treatment systems." },
];

export const CSR = () => (
  <section id="csr" className="section-py bg-mist">
    <div className="container mx-auto container-px">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 text-accent-green text-xs font-bold tracking-widest mb-4">
          <Heart size={14} fill="currentColor" /> PG NOVUS CARES
        </div>
        <h2 className="text-3xl lg:text-5xl mb-5 text-balance">
          Clean water is a right, not a privilege.
        </h2>
        <p className="text-slate text-lg leading-relaxed">
          Our CSR mission is simple: every plant we build for industry should fund clean water
          access for a community that lacks it.
        </p>
      </div>

      {/* Featured initiative */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-elevated grid lg:grid-cols-2 mb-10">
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <img
            src={csrImg}
            alt="Underprivileged children drinking clean water from a community water station"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1280}
            height={960}
          />
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-xs font-bold tracking-wider mb-5">
            <Heart size={12} fill="currentColor" /> FEATURED INITIATIVE
          </div>
          <h3 className="text-2xl lg:text-3xl mb-4">Clean Water for Underprivileged Children</h3>
          <p className="text-slate leading-relaxed mb-6">
            Through our "Every Drop, Every Child" pilot program, PG Novus has installed 8 community
            water purification units in nearby underserved villages — providing safe, treated drinking
            water to around 2,000 children every day.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-subtle">
            <div>
              <div className="font-heading font-bold text-2xl text-accent-green">8</div>
              <div className="text-xs text-slate font-medium mt-1">Units Installed</div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl text-accent-green">2K</div>
              <div className="text-xs text-slate font-medium mt-1">Children Served</div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl text-accent-green">2</div>
              <div className="text-xs text-slate font-medium mt-1">Districts Reached</div>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting initiatives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {INITIATIVES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-7 border border-border-subtle hover:shadow-card transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mb-5">
              <Icon className="text-accent-green" size={22} />
            </div>
            <h4 className="text-lg mb-2">{title}</h4>
            <p className="text-slate text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
