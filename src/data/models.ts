export interface MowerModel {
  id: string;
  name: string;
  brand: string;
  /** max lawn area in square feet */
  maxSqFt: number;
  /** max slope in percent grade (e.g. 80 = 80%) */
  maxSlopePct: number;
  nav: string;
  priceLow: number;
  priceHigh: number;
  /** Amazon search query for the buy link */
  query: string;
  bestFor: string;
  /** local product photo path */
  image: string;
  imageAlt: string;
}

/**
 * Approximate specs as of Oct 2026, compiled from manufacturer pages and
 * review coverage. Treat as guidance — verify current specs before buying.
 */
export const MODELS: MowerModel[] = [
  {
    id: "luba-2-awd-5000h",
    name: "Mammotion LUBA 2 AWD 5000H",
    image: "/images/models/luba-2-awd.jpg",
    imageAlt: "Mammotion LUBA 2 AWD robot lawn mower",
    brand: "Mammotion",
    maxSqFt: 54300,
    maxSlopePct: 80,
    nav: "RTK-GNSS + 3D vision",
    priceLow: 2699,
    priceHigh: 2899,
    query: "Mammotion LUBA 2 AWD",
    bestFor: "Large, steep lawns up to ~1.25 acres — the AWD hill-climbing king.",
  },
  {
    id: "luba-2-awd-3000h",
    name: "Mammotion LUBA 2 AWD 3000H",
    image: "/images/models/luba-2-awd.jpg",
    imageAlt: "Mammotion LUBA 2 AWD robot lawn mower",
    brand: "Mammotion",
    maxSqFt: 32600,
    maxSlopePct: 80,
    nav: "RTK-GNSS + 3D vision",
    priceLow: 2099,
    priceHigh: 2299,
    query: "Mammotion LUBA 2 AWD 3000H",
    bestFor: "Mid-size hilly lawns up to ~0.75 acre with serious slopes.",
  },
  {
    id: "luba-mini-2-awd",
    name: "Mammotion LUBA Mini 2 AWD 1500H",
    image: "/images/models/luba-mini-2-awd.jpg",
    imageAlt: "Mammotion LUBA Mini 2 AWD robot lawn mower",
    brand: "Mammotion",
    maxSqFt: 16300,
    maxSlopePct: 80,
    nav: "RTK-GNSS + 3D vision",
    priceLow: 1499,
    priceHigh: 1699,
    query: "Mammotion LUBA Mini 2 AWD",
    bestFor: "Smaller steep yards — AWD traction in a compact package.",
  },
  {
    id: "navimow-x4-pro",
    name: "Segway Navimow X4 Pro",
    image: "/images/models/navimow-x4-pro.webp",
    imageAlt: "Segway Navimow X4 Pro robot lawn mower",
    brand: "Segway",
    maxSqFt: 43560,
    maxSlopePct: 50,
    nav: "RTK-GNSS + vision (EFLS 3.0)",
    priceLow: 2299,
    priceHigh: 2499,
    query: "Segway Navimow X4 Pro",
    bestFor: "Big flat-to-rolling lawns up to 1 acre; excellent app and mapping.",
  },
  {
    id: "automower-430x-nera",
    name: "Husqvarna Automower 430X NERA",
    image: "/images/models/automower-430x-nera.jpg",
    imageAlt: "Husqvarna Automower 430X NERA",
    brand: "Husqvarna",
    maxSqFt: 34800,
    maxSlopePct: 50,
    nav: "Wire-free EPOS (satellite)",
    priceLow: 2299,
    priceHigh: 2599,
    query: "Husqvarna Automower 430X NERA",
    bestFor: "Premium pick for complex ~0.8 acre lawns; Husqvarna dealer support.",
  },
  {
    id: "navimow-i110n",
    name: "Segway Navimow i110N",
    image: "/images/models/navimow-i110n.jpg",
    imageAlt: "Segway Navimow i110N robot lawn mower",
    brand: "Segway",
    maxSqFt: 10890,
    maxSlopePct: 30,
    nav: "Vision + RTK assist",
    priceLow: 899,
    priceHigh: 1099,
    query: "Segway Navimow i110N",
    bestFor: "Best value for small flat lawns up to 1/4 acre.",
  },
  {
    id: "landroid-vision-m600",
    name: "WORX Landroid Vision M600",
    image: "/images/models/landroid-vision-m600.jpg",
    imageAlt: "WORX Landroid Vision M600",
    brand: "WORX",
    maxSqFt: 6500,
    maxSlopePct: 30,
    nav: "Camera vision",
    priceLow: 999,
    priceHigh: 1199,
    query: "WORX Landroid Vision",
    bestFor: "Budget vision-based pick for small lawns; no RTK antenna needed.",
  },
];

export function gradeToDegrees(pct: number): number {
  return (Math.atan(pct / 100) * 180) / Math.PI;
}

export function formatMoney(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}
