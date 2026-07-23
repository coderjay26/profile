import { motion } from "framer-motion";
import { StatusDot } from "./shared";
import { social, site } from "../data/portfolio";

export function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center pt-24 pb-32 px-6 overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
      <div className="absolute inset-0 pointer-events-none z-0 animate-scan bg-[linear-gradient(transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] bg-[length:100%_200%]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* System header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <StatusDot active />
            <span className="font-mono text-xs text-accent/80 tracking-wider uppercase">System Online</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted mb-1">
            <span className="text-primary">{">"}</span>
            <span>~/portfolio/init.sh</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-sans font-black tracking-tight leading-[0.9] mb-6"
        >
          <span className="text-text">Jay</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary">
            Fuego
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-lg sm:text-xl text-muted max-w-2xl mb-4 leading-relaxed"
        >
          <span className="font-mono text-primary/50 text-sm">sys.arch</span>{" "}
          {site.tagline}
        </motion.p>

        {/* Specs row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-wrap gap-x-8 gap-y-2 mb-10 font-mono text-xs text-muted"
        >
          <span className="flex items-center gap-2">
            <StatusDot /> Role: Senior Software Engineer
          </span>
          <span className="flex items-center gap-2">
            <StatusDot /> Stack: Flutter / Kotlin
          </span>
          <span className="flex items-center gap-2">
            <StatusDot /> Location: PH
          </span>
        </motion.div>

        {/* CTA + links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 text-primary font-mono text-sm tracking-wider uppercase hover:bg-primary/20 transition-all rounded"
          >
            <span className="relative z-10">View Projects</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">{">"}</span>
            <span className="absolute inset-0 rounded bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
          </a>

          <div className="flex gap-3">
            {[
              { label: "GH", href: social.github },
              { label: "LI", href: social.linkedin },
              { label: "Mail", href: `mailto:${social.email}` },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="px-3 py-2 border border-border text-muted hover:text-primary hover:border-primary/40 transition-all font-mono text-xs uppercase tracking-wider rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-muted/50 tracking-widest uppercase">Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
