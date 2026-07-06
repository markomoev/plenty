import type { Lang } from "@/lib/translations";

/** Mon–Fri 10:00–18:30, Sat 10:00–16:00, Sun closed. */
export const OPEN_MIN = 10 * 60; // 10:00
export const CLOSE_WEEKDAY_MIN = 18 * 60 + 30; // 18:30
export const CLOSE_SATURDAY_MIN = 16 * 60; // 16:00

export type StoreState = {
  open: boolean;
  pill: string;
  todayState: string;
  /** Mon = 0 … Sun = 6 */
  todayIndex: number;
};

function getCloseMin(day: number): number | null {
  if (day === 0) return null;
  if (day === 6) return CLOSE_SATURDAY_MIN;
  return CLOSE_WEEKDAY_MIN;
}

function closingLabel(day: number): string {
  return day === 6 ? "16:00" : "18:30";
}

/**
 * Hours string for a row in the Mon–Sun weekly list (index 0 = Monday).
 */
export function getWeekRowHours(dayIndex: number, lang: Lang): string {
  if (dayIndex === 6) return lang === "bg" ? "Затворено" : "Closed";
  if (dayIndex === 5) return "10:00 – 16:00";
  return "10:00 – 18:30";
}

export function getStoreState(now: Date, lang: Lang): StoreState {
  const day = now.getDay(); // 0 = Sun … 6 = Sat
  const mins = now.getHours() * 60 + now.getMinutes();
  const closeMin = getCloseMin(day);
  const open = closeMin !== null && mins >= OPEN_MIN && mins < closeMin;
  const closeLabel = closeMin !== null ? closingLabel(day) : "";

  let pill: string;
  if (open) {
    pill =
      lang === "bg"
        ? `Отворено · затваря ${closeLabel}`
        : `Open · closes ${closeLabel}`;
  } else if (day === 0 || (day === 6 && closeMin !== null && mins >= closeMin)) {
    pill =
      lang === "bg" ? "Затворено · отваря пон 10:00" : "Closed · opens Mon 10:00";
  } else if (closeMin !== null && mins >= closeMin) {
    pill =
      lang === "bg"
        ? "Затворено · отваря утре 10:00"
        : "Closed · opens tomorrow 10:00";
  } else {
    pill = lang === "bg" ? "Затворено · отваря 10:00" : "Closed · opens at 10:00";
  }

  let todayState: string;
  if (open) {
    todayState =
      lang === "bg" ? `Отворено до ${closeLabel}` : `Open until ${closeLabel}`;
  } else if (closeMin !== null && mins < OPEN_MIN) {
    todayState = lang === "bg" ? "Отваря 10:00" : "Opens 10:00";
  } else {
    todayState = lang === "bg" ? "Затворено" : "Closed";
  }

  const todayIndex = (day + 6) % 7;

  return { open, pill, todayState, todayIndex };
}
