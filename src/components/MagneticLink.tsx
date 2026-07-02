"use client";

import Link from "next/link";
import { useRef, useEffect, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  /** Show the trailing arrow. Defaults to true. */
  showArrow?: boolean;
};

/**
 * Magnetic CTA link: translates toward the cursor on pointer devices,
 * resets smoothly on leave. Coral shadow blooms on hover for primary variant.
 * Renders a plain <a> for external / tel / mailto / hash targets and a
 * Next <Link> for internal routes.
 */
export function MagneticLink({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: Props) {
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

  const classes = `inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] ${
    variant === "primary" ? "btn-primary" : "btn-ghost"
  } ${className}`;

  const inner = (
    <>
      {children}
      {showArrow && (
        <span className="btn-arrow" aria-hidden="true">→</span>
      )}
    </>
  );

  const isExternal = /^(https?:|tel:|mailto:|#)/.test(href);

  if (isExternal) {
    const isHttp = href.startsWith("http");
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target={isHttp ? "_blank" : undefined}
        rel={isHttp ? "noopener noreferrer" : undefined}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={classes}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {inner}
    </Link>
  );
}
