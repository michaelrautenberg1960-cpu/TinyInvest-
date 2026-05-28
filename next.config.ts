import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projekte",
        destination: "/marktplatz",
        permanent: true,
      },
      {
        source: "/senioren",
        destination: "/wissen/senioren",
        permanent: true,
      },
      {
        source: "/aerzte",
        destination: "/wissen/aerzte",
        permanent: true,
      },
      {
        source: "/freiberufler",
        destination: "/wissen/freiberufler",
        permanent: true,
      },
      {
        source: "/it-freelancer",
        destination: "/wissen/it-freelancer",
        permanent: true,
      },
      {
        source: "/unternehmer",
        destination: "/wissen/unternehmer",
        permanent: true,
      },
      {
        source: "/zielgruppen",
        destination: "/wissen/zielgruppen",
        permanent: true,
      },
      {
        source: "/iab",
        destination: "/wissen/investitionsabzugsbetrag-tiny-house",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "tinyhouse.investments" },
    ],
  },
  async headers() {
    // Security headers applied to all routes
    const securityHeaders = [
      { key: "X-Frame-Options",           value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options",    value: "nosniff" },
      { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
      { key: "X-DNS-Prefetch-Control",    value: "on" },
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
