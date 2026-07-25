"use client";

import { useEffect } from "react";
import { getAnchors, type PageId } from "@/lib/sections/anchors";
import type { CmsSectionPublic, PageSections } from "@/lib/sections/types";
import { ADMIN_ORIGIN } from "@/lib/preview/config";
import { isInboundMessage, type OutboundMessage } from "@/lib/preview/messages";

const HIGHLIGHT_CLASS = "plenty-preview-highlight";

function post(message: OutboundMessage) {
  if (typeof window === "undefined" || window.parent === window || !ADMIN_ORIGIN) return;
  window.parent.postMessage(message, ADMIN_ORIGIN);
}

function groupByAnchor(list: CmsSectionPublic[]): PageSections {
  const grouped: PageSections = {};
  for (const section of list) {
    (grouped[section.anchorId] ??= []).push(section);
  }
  for (const items of Object.values(grouped)) {
    items.sort((a, b) => a.order - b.order);
  }
  return grouped;
}

function findMarker(targetId: string): Element | null {
  const escaped = CSS.escape(targetId);
  return document.querySelector(`[data-section-id="${escaped}"], [data-anchor-id="${escaped}"]`);
}

type Props = {
  page: PageId;
  onSections: (page: PageId, grouped: PageSections) => void;
  onHighlight: (targetId: string | null) => void;
};

/**
 * The receiving half of the live preview bridge. Only ever mounted by
 * SectionsProvider when `preview` is true — never runs on the public site.
 */
export function PreviewBridge({ page, onSections, onHighlight }: Props) {
  useEffect(() => {
    post({ type: "plenty:ready", page, anchors: getAnchors(page).map((a) => a.id) });

    function handleMessage(event: MessageEvent) {
      if (event.origin !== ADMIN_ORIGIN) return;
      if (!isInboundMessage(event.data)) return;

      const message = event.data;
      switch (message.type) {
        case "plenty:sections": {
          if (message.page !== page) return;
          onSections(message.page, groupByAnchor(message.sections));
          break;
        }
        case "plenty:scroll-to": {
          const el = findMarker(message.targetId);
          el?.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        }
        case "plenty:highlight": {
          document
            .querySelectorAll(`.${HIGHLIGHT_CLASS}`)
            .forEach((el) => el.classList.remove(HIGHLIGHT_CLASS));
          if (message.targetId) {
            findMarker(message.targetId)?.classList.add(HIGHLIGHT_CLASS);
          }
          onHighlight(message.targetId);
          break;
        }
      }
    }

    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      if (!target) return;

      // Preview runs inside an admin iframe — never let a click navigate away.
      if (target.closest("a")) {
        event.preventDefault();
      }

      const sectionEl = target.closest<HTMLElement>("[data-section-id]");
      if (sectionEl?.dataset.sectionId) {
        post({ type: "plenty:section-click", sectionId: sectionEl.dataset.sectionId });
        return;
      }

      const anchorEl = target.closest<HTMLElement>("[data-anchor-id]");
      if (anchorEl?.dataset.anchorId) {
        post({ type: "plenty:anchor-click", anchorId: anchorEl.dataset.anchorId });
        return;
      }

      if (target.closest("section")) {
        post({ type: "plenty:locked-click" });
      }
    }

    window.addEventListener("message", handleMessage);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.removeEventListener("click", handleClick);
    };
  }, [page, onSections, onHighlight]);

  return null;
}
