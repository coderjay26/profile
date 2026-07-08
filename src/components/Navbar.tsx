import { navLinks } from "../data/portfolio";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-mono text-sm text-text">
          <span className="text-primary font-bold">~</span>
          <span className="hidden sm:inline text-muted">/jayfuego</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 font-mono text-[11px] text-muted hover:text-primary hover:bg-primary/5 rounded transition-all uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
