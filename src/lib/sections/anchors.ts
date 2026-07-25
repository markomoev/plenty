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
 *
 * `label` is shown in the admin app's outline, in Bulgarian, phrased the
 * way a shop owner would point at a gap on the page — never a translated
 * developer name.
 *
 * Note: home has no "top" anchor. The hero uses `-mt-20` to cancel out
 * `layout.tsx`'s `pt-20`, so anything rendered above it would be visually
 * overlapped by the hero. The first valid gap on home is right after it.
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
  { id: "home:hero__strip", page: "home", index: 0, label: "Между героя и лентата с текст" },
  { id: "home:strip__pillars", page: "home", index: 1, label: "Между лентата с текст и „Как работим“" },
  { id: "home:pillars__gallery", page: "home", index: 2, label: "Между „Как работим“ и галерията" },
  { id: "home:gallery__map", page: "home", index: 3, label: "Между галерията и адреса с картата" },
  { id: "home:map__cta", page: "home", index: 4, label: "Между адреса с картата и последния призив за действие" },
  { id: "home:bottom", page: "home", index: 5, label: "Най-долу на страницата" },

  // ── about (Header → Story → Pull-quote → Values → Closing CTA) ──
  { id: "about:top", page: "about", index: 0, label: "Най-горе на страницата, преди заглавието" },
  { id: "about:header__story", page: "about", index: 1, label: "Между заглавието и „Нашата история“" },
  { id: "about:story__quote", page: "about", index: 2, label: "Между историята и цитата" },
  { id: "about:quote__values", page: "about", index: 3, label: "Между цитата и разделите с ценности" },
  { id: "about:values__cta", page: "about", index: 4, label: "Между ценностите и последния призив за действие" },
  { id: "about:bottom", page: "about", index: 5, label: "Най-долу на страницата" },

  // ── contact (Header → Info/Map → Hours → What To Expect → Why Plenty) ──
  { id: "contact:top", page: "contact", index: 0, label: "Най-горе на страницата, преди заглавието" },
  { id: "contact:header__info", page: "contact", index: 1, label: "Между заглавието и адреса с картата" },
  { id: "contact:info__hours", page: "contact", index: 2, label: "Между адреса с картата и работното време" },
  { id: "contact:hours__expect", page: "contact", index: 3, label: "Между работното време и „Какво да очаквате“" },
  { id: "contact:expect__why", page: "contact", index: 4, label: "Между „Какво да очаквате“ и последния раздел" },
  { id: "contact:bottom", page: "contact", index: 5, label: "Най-долу на страницата" },
] as const satisfies readonly Anchor[];

/** Union of every valid anchor id, derived from the registry above. */
export type AnchorId = (typeof ANCHORS)[number]["id"];

/** All anchors for a page, in display order. */
export function getAnchors(page: PageId): Anchor[] {
  return ANCHORS.filter((a) => a.page === page).sort((a, b) => a.index - b.index);
}
