"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { PageId } from "@/lib/sections/anchors";
import type { PageSections } from "@/lib/sections/types";
import { PreviewBridge } from "@/components/preview/PreviewBridge";

type SectionsContextValue = {
  sections: PageSections;
  page: PageId;
  preview: boolean;
  selectedId: string | null;
};

const SectionsContext = createContext<SectionsContextValue | null>(null);

/** Reads the current page's CMS sections. Must be used under a SectionsProvider. */
export function useSections(): SectionsContextValue {
  const ctx = useContext(SectionsContext);
  if (!ctx) {
    throw new Error("useSections must be used within a SectionsProvider");
  }
  return ctx;
}

type Props = {
  page: PageId;
  /** CMS content fetched server-side by the route, keyed by anchor id. */
  initial: PageSections;
  preview: boolean;
  children: ReactNode;
};

/**
 * Seeds the sections for one page and, in preview mode only, mounts the
 * postMessage bridge that lets the admin app push live edits into it.
 *
 * When `preview` is false this is a pure passthrough: one context provider
 * with static value, zero listeners, zero extra DOM. The public site pays
 * nothing for this existing.
 */
export function SectionsProvider({ page, initial, preview, children }: Props) {
  if (!preview) {
    return (
      <SectionsContext.Provider value={{ sections: initial, page, preview: false, selectedId: null }}>
        {children}
      </SectionsContext.Provider>
    );
  }

  return (
    <PreviewSectionsProvider page={page} initial={initial}>
      {children}
    </PreviewSectionsProvider>
  );
}

function PreviewSectionsProvider({
  page,
  initial,
  children,
}: {
  page: PageId;
  initial: PageSections;
  children: ReactNode;
}) {
  const [sections, setSections] = useState<PageSections>(initial);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSections = useCallback(
    (incomingPage: PageId, grouped: PageSections) => {
      if (incomingPage !== page) return;
      setSections(grouped);
    },
    [page]
  );

  return (
    <SectionsContext.Provider value={{ sections, page, preview: true, selectedId }}>
      <PreviewBridge page={page} onSections={handleSections} onHighlight={setSelectedId} />
      {children}
    </SectionsContext.Provider>
  );
}
