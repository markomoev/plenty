import type { AnchorId } from "./anchors";

/**
 * A published CMS section as returned by admin.plentybg.com's public API.
 * `data` shape depends on `templateId` — see the matching renderer in
 * src/components/cms/templates/. Unknown template ids render nothing
 * (never throw) so a mismatch between the two repos degrades gracefully.
 */
export type CmsSectionPublic = {
  id: string;
  anchorId: AnchorId;
  templateId: string;
  order: number;
  data: Record<string, string>;
};

/** Sections for every anchor on one page, keyed by anchor id. */
export type PageSections = Record<string, CmsSectionPublic[]>;
