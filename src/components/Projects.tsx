import * as Lucide from "lucide-react";
import { Section, SectionLabel } from "./shared";
import { featuredProject, projects } from "../data/portfolio";
import { StatusDot } from "./shared";

const iconMap: Record<string, Lucide.LucideIcon> = {
  CircleDollarSign: Lucide.CircleDollarSign,
  Footprints: Lucide.Footprints,
  PiggyBank: Lucide.PiggyBank,
  House: Lucide.House,
  MapPin: Lucide.MapPin,
  Stethoscope: Lucide.Stethoscope,
  Brain: Lucide.Brain,
};

export function Projects() {
  return (
    <Section>
      <div className="border border-border bg-surface backdrop-blur-xl rounded-lg p-8 sm:p-12">
        <SectionLabel fig="FIG 4.01" label="System Components" />

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-8 border border-primary/20 rounded-lg p-6 sm:p-8 mb-10 bg-primary/[0.02]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <StatusDot active />
              <span className="font-mono text-[10px] text-accent tracking-wider uppercase">Flagship Module</span>
            </div>
            <h3 className="font-mono text-lg font-bold text-text mb-1 flex items-center gap-3">
              <img src={featuredProject.logo} alt="" className="h-8 rounded" />
              {featuredProject.name}
            </h3>
            <p className="text-muted text-xs leading-relaxed mb-4 font-mono">{featuredProject.description}</p>
            <div className="space-y-1.5 mb-5">
              {featuredProject.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-muted font-mono">
                  <span className="text-primary/60">{">"}</span> {f}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {featuredProject.stack.map((s) => (
                <span key={s} className="font-mono text-[10px] text-primary/70 border border-primary/20 px-2 py-1 rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={featuredProject.image} alt="Jj POS" className="w-full h-auto block" />
          </div>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] || Lucide.Box;
            return (
              <div
                key={project.name}
                className="group border border-border rounded-lg p-5 flex flex-col hover:border-primary/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.06)] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded border border-border flex items-center justify-center text-primary/60 group-hover:text-primary group-hover:border-primary/30 transition-all">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-xs font-semibold text-text truncate">{project.name}</h3>
                  </div>
                  {project.link && (
                    <StatusDot active />
                  )}
                </div>
                <p className="text-muted text-[11px] leading-relaxed mb-4 flex-1 font-mono">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.stack.map((s) => (
                    <span key={s} className="font-mono text-[9px] text-muted border border-border px-1.5 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[10px] text-primary/70 hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    {project.linkLabel} <span className="group-hover:translate-x-0.5 transition-transform">{">"}</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
