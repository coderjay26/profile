export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border mt-24 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-mono text-[10px] text-muted tracking-wider">
          &copy; {new Date().getFullYear()} Jay Fuego
        </span>
        <span className="font-mono text-[10px] text-muted/50 tracking-wider">
          built with React + Tailwind v4
        </span>
      </div>
    </footer>
  );
}
