import type { ReactElement } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticLink } from "@/components/MagneticLink";
import type { CmsSectionPublic } from "@/lib/sections/types";

/**
 * ONE RENDERER PER TEMPLATE ID.
 *
 * `templateId` must match a template defined in admin.plentybg.com's
 * src/lib/sections/templates.ts. A section whose templateId has no entry
 * here renders nothing (see SectionSlot) — that's a signal the admin app
 * grew a template this repo doesn't know how to draw yet.
 */

const BG: Record<string, string> = {
  "bg-0": "var(--bg-0)",
  "bg-1": "var(--bg-1)",
  "bg-2": "var(--bg-2)",
  "bg-3": "var(--bg-3)",
};

function TextCtaSection({ data }: { data: CmsSectionPublic["data"] }) {
  return (
    <section
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{ background: BG[data.background ?? "bg-0"] ?? BG["bg-0"] }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <AnimateIn className="max-w-2xl">
          {data.eyebrow && (
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ color: "var(--coral)" }}
            >
              {data.eyebrow}
            </p>
          )}
          <h2
            className="text-4xl md:text-5xl font-black uppercase"
            style={{ letterSpacing: "-0.015em", color: "var(--fg)" }}
          >
            {data.heading}
          </h2>
          {data.body && (
            <p className="text-sm mt-6" style={{ color: "var(--fg-2)", lineHeight: 1.7 }}>
              {data.body}
            </p>
          )}
          {data.ctaLabel && data.ctaHref && (
            <div className="mt-10">
              <MagneticLink href={data.ctaHref} variant={data.ctaVariant === "ghost" ? "ghost" : "primary"}>
                {data.ctaLabel}
              </MagneticLink>
            </div>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}

function HeroBannerSection({ data }: { data: CmsSectionPublic["data"] }) {
  return (
    <section
      className="on-dark-image relative overflow-hidden py-28 px-8 md:px-16 lg:px-24"
      style={{ color: "var(--fg-on-dark)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${data.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/40" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <AnimateIn className="max-w-2xl">
          {data.eyebrow && (
            <p
              className="text-[10px] tracking-[0.35em] uppercase font-bold mb-4"
              style={{ color: "var(--coral)" }}
            >
              {data.eyebrow}
            </p>
          )}
          <h2
            className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8"
            style={{ letterSpacing: "-0.015em" }}
          >
            {data.heading}
          </h2>
          {data.body && (
            <p className="text-sm leading-[1.7] mb-10 max-w-md" style={{ color: "var(--fg-on-dark-muted)" }}>
              {data.body}
            </p>
          )}
          {data.ctaLabel && data.ctaHref && (
            <MagneticLink href={data.ctaHref} variant="primary">
              {data.ctaLabel}
            </MagneticLink>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}

export const TEMPLATE_RENDERERS: Record<
  string,
  (props: { data: CmsSectionPublic["data"] }) => ReactElement
> = {
  "text-cta": TextCtaSection,
  "hero-banner": HeroBannerSection,
};
