import { useEffect, useRef, ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  stagger?: boolean;
  delay?: number;
}

export default function RevealSection({ children, className = "", variant = "up", stagger = false, delay = 0 }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const revealClass = stagger
    ? "stagger-children"
    : variant === "left"
    ? "reveal-left"
    : variant === "right"
    ? "reveal-right"
    : variant === "scale"
    ? "reveal-scale"
    : "reveal";

  return (
    <div ref={ref} className={`${revealClass} ${className}`}>
      {children}
    </div>
  );
}
