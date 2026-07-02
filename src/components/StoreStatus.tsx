"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language";
import { getStoreState } from "@/lib/hours";

type Props = {
  /** Removes the default top margin when the pill is used as a first child. */
  flush?: boolean;
};

/**
 * Live open/closed status pill — re-checks every 30 s.
 * Uses the shared open/closed logic in lib/hours.ts.
 */
export function StoreStatus({ flush = false }: Props) {
  const { lang } = useLanguage();
  const [state, setState] = useState<ReturnType<typeof getStoreState> | null>(null);

  useEffect(() => {
    const update = () => setState(getStoreState(new Date(), lang));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [lang]);

  if (!state) return null;

  return (
    <div className={`status-pill ${flush ? "" : "mt-6"}`}>
      <span className={`status-dot ${state.open ? "open" : "closed"}`} />
      {state.pill}
    </div>
  );
}
