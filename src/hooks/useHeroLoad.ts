import { useEffect, type RefObject } from "react";

/**
 * Adds the `loaded` CSS class to the referenced element on window load
 * (with a 400 ms fallback), triggering the hero entrance animations.
 */
export function useHeroLoad(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function reveal() {
      el?.classList.add("loaded");
    }

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
      const fallback = setTimeout(reveal, 400);
      return () => {
        window.removeEventListener("load", reveal);
        clearTimeout(fallback);
      };
    }
  }, [ref]);
}
