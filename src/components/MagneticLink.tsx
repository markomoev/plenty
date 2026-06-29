"use client";

import Link from "next/link";
import { useRef, useEffect, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/**
 * Magnetic CTA link: translates toward the cursor on pointer devices,
 * resets smoothly on leave. Coral shadow blooms on hover for primary variant.
 */
export function MagneticLink({ href, children, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const canMag = useRef(false);

  useEffect(() => {
    canMag.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!canMag.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${dx * 0.18}px, ${dy * 0.32}px)`;
    ref.current.style.transition = "transform 0.08s linear";
  }

  function onMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "";
    ref.current.style.transition =
      "transform 0.5s var(--ease), box-shadow 0.45s var(--ease), filter 0.45s var(--ease)";
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={`inline-flex items-center gap-2 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] ${
        variant === "primary" ? "btn-primary" : "btn-ghost"
      } ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <span className="btn-arrow" aria-hidden="true">→</span>
    </Link>
  );
}
