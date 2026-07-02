import { useEffect, type RefObject } from "react";

type Mode = "scroll" | "center";

/**
 * Applies a subtle vertical parallax to the referenced element via a RAF loop.
 * - "center": translate based on the parent's distance from viewport center.
 * - "scroll": translate based on absolute scroll position.
 * Disabled under prefers-reduced-motion.
 */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  rate = 0.15,
  mode: Mode = "center"
) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number;

    function tick() {
      const el = ref.current;
      if (el) {
        if (mode === "scroll") {
          el.style.transform = `translateY(${window.scrollY * rate}px)`;
        } else {
          const parent = el.parentElement;
          if (parent) {
            const rect = parent.getBoundingClientRect();
            const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
            el.style.transform = `translateY(${fromCenter * rate}px)`;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref, rate, mode]);
}
