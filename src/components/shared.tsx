import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function Section({ children, className = "", delay = 0, id }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay }}
      className={`relative z-10 scroll-mt-14 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionLabel({ fig, label }: { fig: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8 select-none">
      <span className="font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">
        {fig}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
      <h2 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
        {label}
      </h2>
    </div>
  );
}

export function StatusDot({ active = true }: { active?: boolean }) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full ${
        active
          ? "bg-accent shadow-[0_0_8px_rgba(16,185,129,0.6)]"
          : "bg-muted"
      }`}
    />
  );
}
