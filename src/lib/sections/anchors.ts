/**
 * THE SHARED CONTRACT.
 *
 * This file is pure data — no React, no DOM — and must stay byte-for-byte in
 * sync with the same-named file in the admin app's repo
 * (admin.plentybg.com — src/lib/sections/anchors.ts). That app uses it to
 * build the /admin page outline; this repo uses it to know where a
 * `SectionSlot` may render CMS content fetched from that app's public API.
 *
 * If you add, remove, or reorder an anchor here, make the exact same change
 * in the admin app's copy — the two must never drift, or content saved
 * there will silently fail to render (or render in the wrong gap) here.
 *
 * Anchors are gaps, not sections: one before the first hardcoded section,
 * one between every adjacent pair, and one after the last. Whether a gap
 * actually renders anything depends solely on whether a published CMS
 * section exists for its id — adding an anchor here never requires
 * touching call sites beyond wiring in a `<SectionSlot>`.
 */

export type PageId = "home" | "about" | "contact";

export type Anchor = {
  /** Stable, globally-unique id. Never rename or reuse once shipped. */
  id: string;
  page: PageId;
  /** 0-based order of this gap within the page, top to bottom. */
  index: number;
  label: string;
};

export const ANCHORS = [
  // ── home (Hero → Statement Strip → Pillars → Gallery → Map → Final CTA) ──
  { id: "home:top", page: "home", index: 0, label: "Before Hero" },
  { id: "home:hero__strip", page: "home", index: 1, label: "Hero → Statement Strip" },
  { id: "home:strip__pillars", page: "home", index: 2, label: "Statement Strip → Pillars" },
  { id: "home:pillars__gallery", page: "home", index: 3, label: "Pillars → Gallery" },
  { id: "home:gallery__map", page: "home", index: 4, label: "Gallery → Visit Us / Map" },
  { id: "home:map__cta", page: "home", index: 5, label: "Visit Us / Map → Final CTA" },
  { id: "home:bottom", page: "home", index: 6, label: "After Final CTA" },

  // ── about (Header → Story → Pull-quote → Values → Closing CTA) ──
  { id: "about:top", page: "about", index: 0, label: "Before Header" },
  { id: "about:header__story", page: "about", index: 1, label: "Header → Story" },
  { id: "about:story__quote", page: "about", index: 2, label: "Story → Pull-quote" },
  { id: "about:quote__values", page: "about", index: 3, label: "Pull-quote → Values" },
  { id: "about:values__cta", page: "about", index: 4, label: "Values → Closing CTA" },
  { id: "about:bottom", page: "about", index: 5, label: "After Closing CTA" },

  // ── contact (Header → Info/Map → Hours → What To Expect → Why Plenty) ──
  { id: "contact:top", page: "contact", index: 0, label: "Before Header" },
  { id: "contact:header__info", page: "contact", index: 1, label: "Header → Info & Map" },
  { id: "contact:info__hours", page: "contact", index: 2, label: "Info & Map → Hours" },
  { id: "contact:hours__expect", page: "contact", index: 3, label: "Hours → What To Expect" },
  { id: "contact:expect__why", page: "contact", index: 4, label: "What To Expect → Why Plenty" },
  { id: "contact:bottom", page: "contact", index: 5, label: "After Why Plenty" },
] as const satisfies readonly Anchor[];

/** Union of every valid anchor id, derived from the registry above. */
export type AnchorId = (typeof ANCHORS)[number]["id"];

/** All anchors for a page, in display order. */
export function getAnchors(page: PageId): Anchor[] {
  return ANCHORS.filter((a) => a.page === page).sort((a, b) => a.index - b.index);
}
