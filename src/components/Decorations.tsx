export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/5" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 pattern-dots opacity-60" />

      {/* Floating geometric shapes */}
      <svg className="absolute top-10 right-[10%] w-72 h-72 animate-float opacity-[0.07]" viewBox="0 0 200 200">
        <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="currentColor" className="text-primary" />
      </svg>

      <svg className="absolute bottom-16 left-[5%] w-48 h-48 animate-float-slow opacity-[0.05]" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
      </svg>

      <svg className="absolute top-1/3 left-[15%] w-32 h-32 animate-spin-slow opacity-[0.04]" viewBox="0 0 100 100">
        <rect x="15" y="15" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" transform="rotate(45 50 50)" />
      </svg>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cta/[0.04] to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/[0.06] to-transparent blur-3xl" />
    </div>
  );
}

export function SectionDividerWave({ flip = false, color = "secondary" }: { flip?: boolean; color?: string }) {
  const fillClass = color === "primary" ? "fill-primary" : color === "card" ? "fill-card" : color === "background" ? "fill-background" : "fill-secondary";
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`w-full h-12 md:h-16 ${fillClass}`}>
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}

export function SectionDividerAngle({ flip = false, color = "secondary" }: { flip?: boolean; color?: string }) {
  const fillClass = color === "primary" ? "fill-primary" : color === "card" ? "fill-card" : color === "background" ? "fill-background" : "fill-secondary";
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className={`w-full h-10 md:h-14 ${fillClass}`}>
        <polygon points="0,60 1440,0 1440,60" />
      </svg>
    </div>
  );
}

export function FloatingBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/60 shadow-sm text-sm font-medium ${className}`}>
      {children}
    </div>
  );
}

export function DecoGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 pattern-grid" />
    </div>
  );
}

export function DecoCircles({ className = "" }: { className?: string }) {
  return (
    <svg className={`opacity-[0.04] ${className}`} viewBox="0 0 400 400">
      <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
      <circle cx="200" cy="200" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
    </svg>
  );
}
