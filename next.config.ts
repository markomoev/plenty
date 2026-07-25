import type { NextConfig } from "next";

// Kept in sync with src/lib/preview/config.ts's ADMIN_ORIGIN. Read directly
// from the env var (not the module) since next.config.ts runs outside the
// app's normal module graph.
const ADMIN_ORIGIN = process.env.NEXT_PUBLIC_ADMIN_ORIGIN ?? "";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async headers() {
    // Allows the admin app to embed this site in an iframe for live
    // preview. No X-Frame-Options here — it has no allowlist syntax and
    // would block the admin app outright; frame-ancestors is the modern
    // replacement and degrades to same-origin-only when ADMIN_ORIGIN is unset.
    const frameAncestors = ADMIN_ORIGIN ? `'self' ${ADMIN_ORIGIN}` : "'self'";
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors ${frameAncestors}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
