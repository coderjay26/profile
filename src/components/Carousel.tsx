import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { trainingImages } from "../data/portfolio";
import { ImageModal } from "./ImageModal";

export function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  }, []);

  const next = useCallback(() => {
    const nextIdx = (currentIdx + 1) % trainingImages.length;
    scrollTo(nextIdx);
    setCurrentIdx(nextIdx);
  }, [currentIdx, scrollTo]);

  const prev = useCallback(() => {
    const prevIdx = (currentIdx - 1 + trainingImages.length) % trainingImages.length;
    scrollTo(prevIdx);
    setCurrentIdx(prevIdx);
  }, [currentIdx, scrollTo]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handler = () => {
      const childWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 300;
      const gap = 20;
      const idx = Math.round(track.scrollLeft / (childWidth + gap));
      setCurrentIdx(idx);
    };
    track.addEventListener("scroll", handler);
    return () => track.removeEventListener("scroll", handler);
  }, []);

  const [modal, setModal] = useState<{ src: string; caption: string } | null>(null);

  return (
    <>
      <div className="relative overflow-hidden rounded-xl">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-3 pb-7"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trainingImages.map((img, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-72 relative rounded-xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all cursor-pointer group bg-card dark:bg-card-dark"
              onClick={() => setModal({ src: img.src, caption: `${img.title} – ${img.location}` })}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 transition-all group-hover:bg-gradient-to-t group-hover:from-[rgba(0,102,255,0.9)] group-hover:via-[rgba(0,68,204,0.7)]">
                <h4 className="text-white text-lg font-semibold mb-1">{img.title}</h4>
                <p className="text-white/90 text-sm leading-relaxed">{img.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex justify-between pointer-events-none z-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md flex items-center justify-center pointer-events-auto text-text dark:text-text-dark hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_6px_18px_rgba(0,102,255,0.3)] transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md flex items-center justify-center pointer-events-auto text-text dark:text-text-dark hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_6px_18px_rgba(0,102,255,0.3)] transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {trainingImages.map((_, i) => (
            <button
              key={i}
              onClick={() => { scrollTo(i); setCurrentIdx(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === currentIdx
                  ? "bg-primary scale-130"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>

        <p className="text-center mt-2 text-sm text-muted dark:text-muted-dark">
          {currentIdx + 1} of {trainingImages.length}
        </p>
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
