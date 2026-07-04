/** Year Plenty opened in Lovech (25 years as of 2026). */
export const PLENTY_FOUNDED_YEAR = 2001;

export function getPlentyYears(now = new Date()): number {
  return Math.max(1, now.getFullYear() - PLENTY_FOUNDED_YEAR);
}

export function withYears(template: string, years: number): string {
  return template.replaceAll("{years}", String(years));
}
