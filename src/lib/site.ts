// Central site config. Update SITE_NAME / SITE_URL when the domain is finalized
// (also update `SITE` in astro.config.mjs and public/robots.txt).
export const SITE_NAME = "MowPilot";
export const SITE_URL = "https://robot-mower-guide-9oz.pages.dev";
export const SITE_TAGLINE = "Wire-free robot lawn mower guides, comparisons, and calculators.";
export const SITE_DESCRIPTION =
  "Independent guides to wire-free robot lawn mowers: model comparisons, sizing calculators, slope checkers, and cost breakdowns so you buy the right mower the first time.";
export const OG_DEFAULT = `${SITE_URL}/og-default.png`;

// Amazon Associates Store ID. Every product link on the site picks it up.
// After changing it, clear Astro's content cache (rm -rf node_modules/.astro)
// so already-rendered markdown links are rebuilt with the new tag.
export const AMAZON_TAG = "room4205-20";

// Primary navigation, shared by header and footer.
export const NAV = [
  { href: "/posts/best-robot-lawn-mowers-2026/", label: "Best Mowers" },
  { href: "/mowers/", label: "Compare" },
  { href: "/guides/", label: "Guides" },
  { href: "/tools/", label: "Tools" },
];
