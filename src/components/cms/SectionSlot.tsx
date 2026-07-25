import type { AnchorId } from "@/lib/sections/anchors";
import type { PageSections } from "@/lib/sections/types";
import { TEMPLATE_RENDERERS } from "./templates";

type Props = {
  /** Anchor id from src/lib/sections/anchors.ts — never a raw string literal. */
  anchorId: AnchorId;
  /** The full page's CMS data, fetched once by the page.tsx route and
   * threaded down through HomePage/AboutPage/ContactPage. */
  sections: PageSections;
};

/**
 * Renders zero, one, or several CMS-driven sections at a given anchor.
 * Pages place this between existing hardcoded <section>s and never inspect
 * or touch what it renders. A section whose templateId this repo doesn't
 * recognize is skipped silently — never throws, never breaks the page.
 */
export function SectionSlot({ anchorId, sections }: Props) {
  const items = sections[anchorId] ?? [];
  if (items.length === 0) return null;

  return (
    <>
      {items.map((section) => {
        const Renderer = TEMPLATE_RENDERERS[section.templateId];
        if (!Renderer) return null;
        return (
          <div key={section.id} data-section-id={section.id}>
            <Renderer data={section.data} />
          </div>
        );
      })}
    </>
  );
}
