"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/language";

/**
 * Live open/closed status pill — re-checks every 30 s.
 * Hours: Mon–Sat 10:00–18:30, Sunday closed.
 */
export function StoreStatus() {
  const { lang } = useLanguage();
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  const compute = useCallback(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 6 = Sat
    const mins = now.getHours() * 60 + now.getMinutes();
    const OPEN = 10 * 60;        // 10:00
    const CLOSE = 18 * 60 + 30; // 18:30
    const isWeekday = day >= 1 && day <= 6;
    const isOpen = isWeekday && mins >= OPEN && mins < CLOSE;

    let label: string;
    if (isOpen) {
      label = lang === "bg" ? "Отворено · затваря 18:30" : "Open · closes 18:30";
    } else if (day === 0 || (day === 6 && mins >= CLOSE)) {
      label = lang === "bg"
        ? "Затворено · отваря пон 10:00"
        : "Closed · opens Mon 10:00";
    } else if (mins >= CLOSE) {
      label = lang === "bg"
        ? "Затворено · отваря утре 10:00"
        : "Closed · opens tomorrow 10:00";
    } else {
      label = lang === "bg"
        ? "Затворено · отваря 10:00"
        : "Closed · opens at 10:00";
    }
    return { open: isOpen, label };
  }, [lang]);

  useEffect(() => {
    setStatus(compute());
    const id = setInterval(() => setStatus(compute()), 30_000);
    return () => clearInterval(id);
  }, [compute]);

  if (!status) return null;

  return (
    <div className="status-pill mt-6">
      <span className={`status-dot ${status.open ? "open" : "closed"}`} />
      {status.label}
    </div>
  );
}
