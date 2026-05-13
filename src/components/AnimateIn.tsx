"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Extra Tailwind / CSS classes passed to the wrapper div */
  className?: string;
  /** Milliseconds to wait after the element enters the viewport before revealing */
  delay?: number;
};

/**
 * Wraps children in a div that fades up into view when it scrolls
 * into the viewport. The `.reveal` class is added via JS so there
 * is no flash of hidden content when JS hasn't loaded yet.
 */
export function AnimateIn({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply the hidden state only after JS runs (prevents SSR flash)
    el.classList.add("reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
