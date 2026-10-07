import { AMAZON_TAG } from "./site";

/** Build an Amazon link for a product. Uses the Associates tag when set. */
export function amazonLink(searchQuery: string): string {
  const base = `https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}`;
  return AMAZON_TAG ? `${base}&tag=${encodeURIComponent(AMAZON_TAG)}` : base;
}
