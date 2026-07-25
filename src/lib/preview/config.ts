/**
 * The admin app's origin, allowed to embed this site in an iframe and drive
 * the live preview bridge (src/components/preview/PreviewBridge.tsx) via
 * postMessage. Read once at build time from a public env var so it can be
 * inlined into the client bundle.
 *
 * Empty string means preview is disabled: no origin will ever match "" in
 * an `event.origin` check, and next.config.ts falls back to a same-origin
 * only frame-ancestors policy.
 */
export const ADMIN_ORIGIN = process.env.NEXT_PUBLIC_ADMIN_ORIGIN ?? "";

/** Whether the live preview bridge should be allowed to run at all. */
export const isPreviewEnabled = () => ADMIN_ORIGIN.length > 0;
