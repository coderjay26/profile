import { useState, useMemo } from "react";
import { Section, SectionLabel } from "./shared";
import { experience } from "../data/portfolio";
import { ImageModal } from "./ImageModal";

const trainingModules = import.meta.glob<string>(
  "/src/assets/training/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

function formatLabel(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bSfa\b/g, "SFA")
    .replace(/\bFuo\b/g, "FUI");
}

interface TrainingImage {
  src: string;
  title: string;
  location: string;
}

function useTrainingImages(): TrainingImage[] {
  return useMemo(() => {
    return Object.entries(trainingModules).map(([path, url]) => {
      const parts = path.replace("/src/assets/training/", "").split("/");
      const folder = parts[0];
      const file = parts[parts.length - 1].replace(/\.[^.]+$/, "");
      return {
        src: url,
        title: formatLabel(folder),
        location: formatLabel(file),
      };
    });
  }, []);
}

export function Experience() {
  return (
    <Section>
      <div className="border border-border bg-surface backdrop-blur-xl rounded-lg p-8 sm:p-12">
        <SectionLabel fig="FIG 3.01" label="Deployment Log" />

        {experience.map((job, i) => (
          <div key={i} className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />

            {/* Timeline dot */}
            <div className="absolute left-0 top-1">
              <div className="w-[15px] h-[15px] rounded-full border-2 border-primary bg-deep flex items-center justify-center">
                <div className="w-[5px] h-[5px] rounded-full bg-primary animate-pulse-glow" />
              </div>
            </div>

            {/* Content */}
            <div className="border border-border rounded-lg p-6 hover:border-primary/30 transition-all ml-4">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-mono text-sm font-semibold text-primary/80 tracking-wider uppercase">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-xs text-text">{job.company}</span>
                    <span className="text-muted text-[10px]">|</span>
                    <span className="font-mono text-[10px] text-muted">{job.period}</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-accent border border-accent/20 px-2 py-1 rounded">
                  active
                </span>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((h, j) => (
                  <li key={j} className="text-muted text-xs leading-relaxed pl-4 relative font-mono">
                    <span className="absolute left-0 text-primary/60">{">"}</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Training Carousel */}
        <div className="mt-10 pt-8 border-t border-border">
          <div className="font-mono text-xs text-primary/60 mb-1 tracking-wider">{"//"} field implementation</div>
          <h3 className="font-mono text-sm font-semibold text-text mb-1">Technical Leadership & Training</h3>
          <p className="text-muted text-xs mb-6 font-mono">
            {"/*"} Beyond development, I lead field implementations and technical training sessions across regional teams. {"*/"}
          </p>

          <TrainingCarousel />
        </div>
      </div>
    </Section>
  );
}

function TrainingCarousel() {
  const [modal, setModal] = useState<{ src: string; caption: string } | null>(null);
  const images = useTrainingImages();
  const heights = ["h-52", "h-64", "h-48", "h-60", "h-56", "h-72", "h-44", "h-68"];

  return (
    <>
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`break-inside-avoid relative rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all cursor-pointer group ${heights[i % heights.length]}`}
            onClick={() => setModal({ src: img.src, caption: `${img.title} – ${img.location}` })}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <span className="font-mono text-xs text-primary/60">{img.title}</span>
              <span className="font-mono text-[10px] text-muted">{img.location}</span>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        src={modal?.src ?? ""}
        caption={modal?.caption ?? ""}
        open={!!modal}
        onClose={() => setModal(null)}
      />
    </>
  );
}
