import { Section, SectionLabel } from "./shared";
import { skills } from "../data/portfolio";

export function Skills() {
  return (
    <Section id="skills">
      <div className="border border-border bg-surface backdrop-blur-xl rounded-lg p-8 sm:p-12">
        <SectionLabel fig="FIG 2.01" label="Tech Arsenal" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative border border-border hover:border-primary/40 rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              {/* Corner brackets */}
              <span className="absolute top-1 left-1 text-[8px] text-border group-hover:text-primary/30 transition-colors">&#x230C;</span>
              <span className="absolute bottom-1 right-1 text-[8px] text-border group-hover:text-primary/30 transition-colors">&#x230B;</span>

              <img
                src={skill.icon}
                alt={skill.name}
                className="h-10 w-10 mx-auto mb-3 object-contain opacity-60 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0"
              />
              <div className="font-mono text-xs font-semibold text-text group-hover:text-primary transition-colors">
                {skill.name}
              </div>
              <div className="font-mono text-[10px] text-muted uppercase tracking-wider mt-1">
                {skill.level}
              </div>

              {/* Animated bottom line */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary/50 group-hover:w-3/4 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
