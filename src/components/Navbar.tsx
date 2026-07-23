import { navLinks } from "../data/portfolio";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 56;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 font-mono text-sm text-text cursor-pointer"
        >
          <span className="text-primary font-bold">~</span>
          <span className="hidden sm:inline text-muted">/jayfuego</span>
        </button>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href.replace("#", ""))}
              className="px-3 py-1.5 font-mono text-[11px] text-muted hover:text-primary hover:bg-primary/5 rounded transition-all uppercase tracking-wider cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
