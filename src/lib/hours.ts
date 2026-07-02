import type { Lang } from "@/lib/translations";

/** Store hours: Mon–Sat 10:00–18:30, Sunday closed. */
export const OPEN_MIN = 10 * 60; // 10:00
export const CLOSE_MIN = 18 * 60 + 30; // 18:30

export type StoreState = {
  /** Whether the store is open right now. */
  open: boolean;
  /** Long label for the status pill, e.g. "Отворено · затваря 18:30". */
  pill: string;
  /** Short state for today's row in the weekly list, e.g. "Отворено до 18:30". */
  todayState: string;
  /** Index of today within a Mon..Sun ordered array (Mon = 0, Sun = 6). */
  todayIndex: number;
};

/**
 * Single source of truth for the open/closed logic used by both the
 * status pill and the weekly hours list.
 */
export function getStoreState(now: Date, lang: Lang): StoreState {
  const day = now.getDay(); // 0 = Sun … 6 = Sat
  const mins = now.getHours() * 60 + now.getMinutes();
  const isWeekday = day >= 1 && day <= 6;
  const open = isWeekday && mins >= OPEN_MIN && mins < CLOSE_MIN;

  let pill: string;
  if (open) {
    pill = lang === "bg" ? "Отворено · затваря 18:30" : "Open · closes 18:30";
  } else if (day === 0 || (day === 6 && mins >= CLOSE_MIN)) {
    pill = lang === "bg" ? "Затворено · отваря пон 10:00" : "Closed · opens Mon 10:00";
  } else if (mins >= CLOSE_MIN) {
    pill = lang === "bg" ? "Затворено · отваря утре 10:00" : "Closed · opens tomorrow 10:00";
  } else {
    pill = lang === "bg" ? "Затворено · отваря 10:00" : "Closed · opens at 10:00";
  }

  let todayState: string;
  if (open) {
    todayState = lang === "bg" ? "Отворено до 18:30" : "Open until 18:30";
  } else if (isWeekday && mins < OPEN_MIN) {
    todayState = lang === "bg" ? "Отваря 10:00" : "Opens 10:00";
  } else {
    todayState = lang === "bg" ? "Затворено" : "Closed";
  }

  const todayIndex = (day + 6) % 7; // Sun(0)→6, Mon(1)→0 … Sat(6)→5

  return { open, pill, todayState, todayIndex };
}
