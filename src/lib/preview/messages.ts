import type { PageId } from "@/lib/sections/anchors";
import type { CmsSectionPublic } from "@/lib/sections/types";

/**
 * THE WIRE PROTOCOL.
 *
 * Every message exchanged over postMessage between the admin app (parent
 * frame) and this site (embedded iframe, preview mode only). Must stay in
 * sync with the admin app's copy of this file — same discriminant strings,
 * same payload shapes. All types are prefixed "plenty:" so they're easy to
 * pick out among any other postMessage traffic on the page.
 *
 * Inbound = admin → site. Outbound = site → admin.
 */

/** A single CMS section as sent over the wire. Mirrors CmsSectionPublic. */
export type Section = CmsSectionPublic;

export type InboundMessage =
  | { type: "plenty:sections"; page: PageId; sections: Section[] }
  | { type: "plenty:scroll-to"; targetId: string }
  | { type: "plenty:highlight"; targetId: string | null };

export type OutboundMessage =
  | { type: "plenty:ready"; page: PageId; anchors: string[] }
  | { type: "plenty:section-click"; sectionId: string }
  | { type: "plenty:anchor-click"; anchorId: string }
  | { type: "plenty:locked-click" };

const PAGE_IDS: readonly PageId[] = ["home", "about", "contact"];

function isPageId(value: unknown): value is PageId {
  return typeof value === "string" && (PAGE_IDS as readonly string[]).includes(value);
}

function isSection(value: unknown): value is Section {
  if (typeof value !== "object" || value === null) return false;
  const s = value as Record<string, unknown>;
  return (
    typeof s.id === "string" &&
    typeof s.anchorId === "string" &&
    typeof s.templateId === "string" &&
    typeof s.order === "number" &&
    typeof s.data === "object" &&
    s.data !== null
  );
}

/**
 * Validates that `data` (untyped, straight off a MessageEvent) matches one
 * of the InboundMessage shapes. Never casts blindly — every field is
 * checked before the value is trusted.
 */
export function isInboundMessage(data: unknown): data is InboundMessage {
  if (typeof data !== "object" || data === null) return false;
  if (!("type" in data)) return false;

  const record = data as Record<string, unknown>;
  const { type } = record;
  if (typeof type !== "string") return false;

  switch (type) {
    case "plenty:sections":
      return (
        isPageId(record.page) &&
        Array.isArray(record.sections) &&
        record.sections.every(isSection)
      );
    case "plenty:scroll-to":
      return typeof record.targetId === "string";
    case "plenty:highlight":
      return record.targetId === null || typeof record.targetId === "string";
    default:
      return false;
  }
}
