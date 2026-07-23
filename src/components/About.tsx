import { Section, SectionLabel } from "./shared";

export function About() {
  return (
    <Section id="about">
      <div className="border border-border bg-surface backdrop-blur-xl rounded-lg p-8 sm:p-12">
        <SectionLabel fig="FIG 1.01" label="Operator Profile" />

        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Photo */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            <div className="w-44 h-44 rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <img
                src="images/jay-profile.jpg"
                alt="Jay Fuego"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-deep border border-accent/30 px-3 py-2 rounded text-xs font-mono text-accent shadow-lg">
              <span className="text-muted text-[10px] block">status</span>
              online
            </div>
          </div>

          {/* Specs */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6 font-mono text-sm">
              {[
                { label: "name", value: "Jay Fuego" },
                { label: "title", value: "Senior Software Engineer" },
                { label: "org", value: "WITS Corporation (FDC)" },
                { label: "exp", value: "2+ Years" },
                { label: "focus", value: "Mobile / Systems Arch" },
                { label: "status", value: "Available for collaboration", active: true },
              ].map((spec) => (
                <div key={spec.label} className="border border-border rounded p-3">
                  <span className="text-[10px] text-muted uppercase tracking-wider block mb-1">
                    {"// "}{spec.label}
                  </span>
                  <span className="flex items-center gap-2 text-text">
                    {spec.active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                    )}
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-muted text-sm leading-relaxed mb-3">
              I specialize in building mission-critical mobile and desktop ecosystems at the intersection of{" "}
              <span className="text-primary/80">high-performance mobile development</span> and{" "}
              <span className="text-primary/80">efficient systems architecture</span>.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              From developing high-volume Sales Force Automation suites to engineering seamless cross-platform solutions,
              I thrive on solving complex technical challenges that drive real-world business impact.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
