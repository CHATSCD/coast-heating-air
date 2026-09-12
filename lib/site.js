/**
 * Resolves the canonical site URL for metadata, structured data, sitemap and robots.
 * Order: explicit env var -> Vercel production URL -> Vercel preview URL -> placeholder.
 */
export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;

  return "https://coast-heating-air.vercel.app";
}
