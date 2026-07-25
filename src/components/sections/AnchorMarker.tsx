"use client";

import type { AnchorId } from "@/lib/sections/anchors";
import { useSections } from "./SectionsProvider";

type Props = {
  /** Anchor id from src/lib/sections/anchors.ts — never a raw string literal. */
  id: AnchorId;
};

/**
 * An invisible hook the admin app's preview bridge can scroll to or
 * highlight. Renders nothing outside preview mode — production markup is
 * unaffected by this existing.
 */
export function AnchorMarker({ id }: Props) {
  const { preview } = useSections();
  if (!preview) return null;
  return <div data-anchor-id={id} className="h-0" />;
}
