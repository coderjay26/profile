import { Section, SectionLabel } from "./shared";
import { philosophy } from "../data/portfolio";

export function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="border border-border bg-surface backdrop-blur-xl rounded-lg p-8 sm:p-12">
        <SectionLabel fig="FIG 2.02" label="Architecture Rationale" />

        <p className="text-muted text-sm mb-8 max-w-2xl font-mono">
          {"/* I don't just use tools; I architect solutions. My choice of Flutter and Kotlin reflects a commitment to"}
          <br />{"   Developer Velocity without sacrificing Native Excellence. */"}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {philosophy.map((item) => (
            <div
              key={item.title}
              className="border border-border rounded-lg p-5 hover:border-primary/30 transition-all group"
            >
              <div className="font-mono text-xs text-primary/60 mb-1 tracking-wider">
                {"//"} component
              </div>
              <h3 className="font-mono text-sm font-semibold text-text mb-2">{item.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{item.description}</p>
              <div className="mt-3 flex gap-1">
                {[...Array(3)].map((_, j) => (
                  <span
                    key={j}
                    className="w-2 h-2 rounded-full border border-primary/30 group-hover:bg-primary/30 transition-colors"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
