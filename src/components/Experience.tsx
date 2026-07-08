import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionLabel } from "./shared";
import { experience, trainingImages } from "../data/portfolio";
import { ImageModal } from "./ImageModal";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement;
    if (child) child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  const next = useCallback(() => {
    const n = (idx + 1) % trainingImages.length;
    scrollTo(n);
    setIdx(n);
  }, [idx, scrollTo]);

  const prev = useCallback(() => {
    const n = (idx - 1 + trainingImages.length) % trainingImages.length;
    scrollTo(n);
    setIdx(n);
  }, [idx, scrollTo]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handler = () => {
      const w = (track.children[0] as HTMLElement)?.offsetWidth ?? 280;
      setIdx(Math.round(track.scrollLeft / (w + 16)));
    };
    track.addEventListener("scroll", handler);
    return () => track.removeEventListener("scroll", handler);
  }, []);

  const [modal, setModal] = useState<{ src: string; caption: string } | null>(null);

  return (
    <>
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trainingImages.map((img, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-64 relative rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all cursor-pointer group"
              onClick={() => setModal({ src: img.src, caption: `${img.title} – ${img.location}` })}
            >
              <img src={img.src} alt={img.title} className="w-full h-40 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent p-4 flex flex-col justify-end">
                <span className="font-mono text-xs text-primary/60">{img.title}</span>
                <span className="font-mono text-[10px] text-muted">{img.location}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border bg-deep/80 text-muted hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border bg-deep/80 text-muted hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center"
        >
          <ChevronRight size={16} />
        </button>

        <div className="flex justify-center gap-1.5 mt-3">
          {trainingImages.map((_, i) => (
            <button
              key={i}
              onClick={() => { scrollTo(i); setIdx(i); }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === idx ? "bg-primary shadow-[0_0_6px_rgba(6,182,212,0.5)]" : "bg-border"
              }`}
            />
          ))}
        </div>
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
