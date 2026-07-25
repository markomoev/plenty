import type { PageId } from "./anchors";
import type { PageSections } from "./types";

/**
 * Fetches every published CMS section for a page from admin.plentybg.com's
 * public API, grouped by anchor id. Only ever call this from a Server
 * Component (e.g. app/page.tsx) — never from a client component.
 *
 * Resilient by design: if the admin app is unreachable or misconfigured,
 * this returns `{}` (every SectionSlot renders nothing) instead of
 * throwing — a CMS outage must never take down the storefront.
 */
export async function getPageSections(page: PageId): Promise<PageSections> {
  const baseUrl = process.env.ADMIN_API_URL;
  if (!baseUrl) {
    console.warn("ADMIN_API_URL is not set — CMS sections will not render.");
    return {};
  }

  try {
    const res = await fetch(`${baseUrl}/api/public/sections?page=${page}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return {};
    const json = await res.json();
    return json.sections ?? {};
  } catch (err) {
    console.error("Failed to fetch CMS sections from admin app:", err);
    return {};
  }
}
