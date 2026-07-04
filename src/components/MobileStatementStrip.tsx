"use client";

import { useState, useEffect } from "react";

type Props = {
  items: string[];
};

/** Mobile-only rotating statement strip (desktop uses static layout). */
export function MobileStatementStrip({ items }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (items.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, 450);
    }, 3200);

    return () => clearInterval(id);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div
      className="md:hidden flex items-center justify-center min-h-[2.75rem] px-8"
      aria-live="polite"
    >
      <span
        className="text-[10px] font-bold uppercase tracking-[0.28em] text-center transition-all duration-500"
        style={{
          color: "var(--fg-3)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <span style={{ color: "var(--coral)" }} aria-hidden="true">
          ✦{" "}
        </span>
        {items[index]}
        <span style={{ color: "var(--coral)" }} aria-hidden="true">
          {" "}
          ✦
        </span>
      </span>
    </div>
  );
}
