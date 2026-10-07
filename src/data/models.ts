export type NavTech = "rtk" | "lidar" | "vision";
export type Tier = "budget" | "mid" | "premium";

export interface MowerModel {
  /** URL slug: /mowers/<id>/ */
  id: string;
  name: string;
  /** Compact name for tables and buttons, e.g. "LUBA 3 AWD 5000X". */
  shortName: string;
  brand: string;
  tier: Tier;
  releaseYear: number;
  /** max rated lawn area in square feet */
  maxSqFt: number;
  /** max rated slope in percent grade (e.g. 80 = 80%) */
  maxSlopePct: number;
  /** human-readable navigation summary */
  nav: string;
  navTech: NavTech[];
  /** true if an RTK base station / antenna must be installed */
  needsRtkStation: boolean;
  drive: "2WD" | "AWD" | "Tracks";
  /** cutting width in inches */
  cutWidthIn: number;
  /** cutting height range in inches [min, max] */
  cutHeightIn: [number, number];
  noiseDb?: number;
  ipRating?: string;
  connectivity: string;
  antiTheft: string;
  /** typical US street price range across the series (lowest tier sale → highest tier) */
  priceLow: number;
  priceHigh: number;
  /** Coverage tiers within a series, cheapest first — used by the size matcher. */
  tiers?: { name: string; sqft: number; price: number }[];
  /** Caveats shown under the spec table (variant differences, unverified figures). */
  specNotes?: string[];
  /** Amazon search query for the buy link */
  query: string;
  /** Amazon ASIN — when set, links go straight to the product page */
  asin?: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  /** Editorial score out of 10 — research-based, see /how-we-research/ */
  score: number;
  scores: { navigation: number; terrain: number; coverage: number; value: number };
  /** One-paragraph verdict */
  verdict: string;
  sources: string[];
}

/**
 * Specs and US street prices as of October 7, 2026, compiled from manufacturer
 * US pages, dated retailer/deal listings and hands-on reviews (see `sources`).
 * Treat as guidance — prices move weekly; verify before buying.
 */
export const MODELS: MowerModel[] = [
  {
    id: "mammotion-luba-3-awd",
    name: "Mammotion LUBA 3 AWD",
    shortName: "LUBA 3 AWD",
    brand: "Mammotion",
    tier: "premium",
    releaseYear: 2026,
    maxSqFt: 53820,
    maxSlopePct: 80,
    nav: "360° LiDAR + network RTK + dual-camera AI vision (Tri-Fusion)",
    navTech: ["lidar", "rtk", "vision"],
    needsRtkStation: false,
    drive: "AWD",
    cutWidthIn: 15.7,
    cutHeightIn: [1.0, 4.0],
    ipRating: "IPX6",
    connectivity: "4G (3 years included), Wi-Fi, Bluetooth",
    antiTheft: "4G GPS tracking, live camera view, PIN, lift alarm, geofence",
    priceLow: 2109,
    priceHigh: 3299,
    tiers: [
      { name: "LUBA 3 AWD 1500", sqft: 16146, price: 2399 },
      { name: "LUBA 3 AWD 3000", sqft: 32292, price: 2109 },
      { name: "LUBA 3 AWD 5000", sqft: 53820, price: 3299 },
    ],
    specNotes: [
      "Tiers: 1500 (0.37 ac), 3000 (0.75 ac), 5000 (1.25 ac). Each comes as Standard (1.0–2.7\" cut) or H high-cut (2.2–4.0\").",
      "Noise level is not published by Mammotion.",
      "The 3000 tier is often discounted below the 1500's list price, so compare tiers before buying.",
    ],
    query: "Mammotion LUBA 3 AWD robot lawn mower",
    bestFor: "Large, steep or tree-heavy lawns up to 1.25 acres. Climbs 80% slopes with no base station.",
    pros: [
      "80% slope rating with all-wheel drive and suspension",
      "LiDAR + network RTK + vision works in open yards and under trees",
      "No RTK base station to install",
      "Wide 15.7\" dual-disc deck mows fast",
    ],
    cons: ["Expensive, and heavy at 41 lb", "Can scuff turf on tight turns", "Owners report some app lag"],
    score: 9.2,
    scores: { navigation: 9.5, terrain: 10, coverage: 9, value: 7.5 },
    verdict:
      "The most capable all-rounder for difficult yards. Tri-Fusion navigation (LiDAR, network RTK and cameras) means no base station and no dead zones under trees, and AWD with an 80% rating handles slopes that strand two-wheel mowers. You pay for that capability, so it's overkill on a flat suburban lawn.",
    sources: [
      "https://us.mammotion.com/products/luba-3-awd-robot-lawn-mower",
      "https://techaeris.com/2026/07/10/mammotion-luba-3-awd-review/",
      "https://www.reviewed.com/home-outdoors/best-right-now/best-robot-lawn-mowers",
    ],
  },
  {
    id: "segway-navimow-x4",
    name: "Segway Navimow X4 Series (X430 / X450)",
    shortName: "Navimow X4",
    brand: "Segway",
    tier: "premium",
    releaseYear: 2026,
    maxSqFt: 65340,
    maxSlopePct: 84,
    nav: "Network RTK (EFLS 3.0) + 360° vision (VSLAM) + VIO",
    navTech: ["rtk", "vision"],
    needsRtkStation: false,
    drive: "AWD",
    cutWidthIn: 17,
    cutHeightIn: [0.75, 4.0],
    noiseDb: 60,
    ipRating: "IPX6",
    connectivity: "4G, Wi-Fi, Bluetooth",
    antiTheft: "GPS/4G tracking, geofence alarm",
    priceLow: 2499,
    priceHigh: 2999,
    tiers: [
      { name: "Navimow X430", sqft: 43560, price: 2499 },
      { name: "Navimow X450", sqft: 65340, price: 2999 },
    ],
    specNotes: [
      "X430 covers 1 acre, X450 covers 1.5 acres.",
      "Designed for antenna-free network RTK. Some yards still need the included RTK antenna, depending on local coverage.",
      "Noise: PCWorld cites 60 dB(A); one third-party listing says 68 dB.",
      "Warranty: 3 years on the mower, 2 years on the battery, per Navimow's warranty policy.",
    ],
    query: "Segway Navimow X430 robot lawn mower",
    bestFor: "1–1.5 acre lawns with hills. The best large-lawn value of 2026.",
    pros: [
      "Widest deck in its class (17\"), so it mows very fast",
      "84% slope rating with 4WD and Xero-Turn steering",
      "Easy auto or remote-control mapping",
      "Reliable obstacle avoidance",
    ],
    cons: [
      "Some yards still need the RTK antenna",
      "Occasionally misses spots that need a trim",
      "EdgeSense can scuff raised edges",
    ],
    score: 9.3,
    scores: { navigation: 9, terrain: 9.5, coverage: 9.5, value: 8.5 },
    verdict:
      "Our best overall pick for typical US lawns from half an acre up. The 17\" deck and 4WD chassis cover ground faster than anything at the price, and an 84% slope rating means hills aren't a deal-breaker. Navigation relies on network RTK plus cameras, so dense canopy is a weaker spot than it is for LiDAR rivals.",
    sources: [
      "https://www.howtogeek.com/segway-navimow-x430-robot-lawn-mower-review/",
      "https://www.bobvila.com/reviews/best-robotic-mowers-2026/",
      "https://navimow.com/products/navimow-x4-robot-lawn-mower",
    ],
  },
  {
    id: "dreame-a3-awd-pro",
    name: "Dreame A3 AWD Pro",
    shortName: "Dreame A3 AWD Pro",
    brand: "Dreame",
    tier: "premium",
    releaseYear: 2026,
    maxSqFt: 53820,
    maxSlopePct: 80,
    nav: "360° 3D LiDAR + binocular AI vision (OmniSense 3.0), no satellites",
    navTech: ["lidar", "vision"],
    needsRtkStation: false,
    drive: "AWD",
    cutWidthIn: 15.8,
    cutHeightIn: [1.2, 3.9],
    noiseDb: 65,
    ipRating: "IPX6",
    connectivity: "4G eSIM (3 years included), Wi-Fi, Bluetooth",
    antiTheft: "PIN, lift alarm, 4G tracking, AirTag slot, camera security patrol",
    priceLow: 1699,
    priceHigh: 2799,
    tiers: [
      { name: "A3 AWD Pro 2500", sqft: 27007, price: 1699 },
      { name: "A3 AWD Pro 3500", sqft: 37897, price: 1899 },
      { name: "A3 AWD Pro 5000", sqft: 53820, price: 2799 },
    ],
    specNotes: [
      "Tiers: 2500 (0.62 ac), 3500 (0.87 ac), 5000 (1.24 ac). List prices are $3,099–$3,499; October 2026 sale prices are shown.",
    ],
    query: "Dreame A3 AWD Pro robot lawn mower",
    bestFor: "Big, steep, tree-shaded yards where satellite RTK struggles.",
    pros: [
      "LiDAR navigation needs no satellites, so it works well under trees",
      "80% slope rating, active suspension and automatic deck lift",
      "Camera security patrol and strong anti-theft features",
      "Deep 2026 discounts (up to ~45% off list)",
    ],
    cons: [
      "Mixed reviews: Reviewed reported a hard setup, boundary crossings into beds and turf scalping",
      "Gizmodo found missed patches; obstacle avoidance isn't perfect",
      "You'll still need a string trimmer for edges",
    ],
    score: 8.7,
    scores: { navigation: 8.5, terrain: 9.5, coverage: 9, value: 9 },
    verdict:
      "A LiDAR-first AWD flagship that, at its current sale prices, undercuts the LUBA 3 by hundreds of dollars. It's the pick for yards where trees, buildings or fences make satellite positioning unreliable. Reviews are split, though. Bob Vila named it best for steep slopes and Gizmodo liked it, but Reviewed hit setup and boundary problems. Budget time to fine-tune the map, and expect to tidy edges by hand.",
    sources: [
      "https://yardcare.dreametech.com/products/a3-awd-pro-robot-lawn-mower",
      "https://gizmodo.com/dreame-a3-awd-pro-review-a-compelling-case-for-lidar-robomowers-2000799478",
      "https://www.bobvila.com/reviews/best-robotic-mowers-2026/",
      "https://www.reviewed.com/home-outdoors/best-right-now/best-robot-lawn-mowers",
    ],
  },
  {
    id: "ecovacs-goat-a-lidar-pro",
    name: "ECOVACS GOAT A2000 / A3000 LiDAR PRO",
    shortName: "GOAT A3000 LiDAR Pro",
    brand: "ECOVACS",
    tier: "mid",
    releaseYear: 2026,
    maxSqFt: 32670,
    maxSlopePct: 50,
    nav: "Dual LiDAR (360° + 3D ToF) + AI camera, no satellites",
    navTech: ["lidar", "vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 13,
    cutHeightIn: [1.18, 3.54],
    noiseDb: 62,
    ipRating: "IPX6",
    connectivity: "Wi-Fi (2.4 GHz), Bluetooth; optional cellular module",
    antiTheft: "PIN protection and lift/move alarms per ECOVACS; GPS tracking needs the optional cellular module",
    priceLow: 1399,
    priceHigh: 1849,
    tiers: [
      { name: "GOAT A2000 LiDAR Pro", sqft: 21780, price: 1399 },
      { name: "GOAT A3000 LiDAR Pro", sqft: 32670, price: 1849 },
    ],
    specNotes: [
      "A2000 covers 0.5 acre, A3000 covers 0.75 acre. Slope limit is 50% inside the work area and 20% across virtual boundaries.",
      "The built-in edge trimmer runs at about 82 dB.",
    ],
    query: "ECOVACS GOAT A3000 LiDAR PRO",
    bestFor: "Half- to three-quarter-acre lawns where you want edges trimmed automatically.",
    pros: [
      "Only mainstream mower line with a true built-in edge string trimmer",
      "Dual LiDAR works without an antenna or satellites",
      "Strong obstacle avoidance; Reviewed's best overall pick",
    ],
    cons: [
      "Occasionally gets stuck and has to be picked up and moved (per BGR)",
      "Trimmer is loud (~82 dB)",
      "Rear-wheel drive with a 50% slope limit",
    ],
    score: 8.9,
    scores: { navigation: 9, terrain: 7, coverage: 8, value: 9 },
    verdict:
      "The mower that comes closest to fully hands-off lawn care. TruEdge trims right up to borders, which removes the chore every other robot leaves you. It's best on flat-to-moderate lawns, because 2WD and a 50% rating rule out serious hills.",
    sources: [
      "https://www.ecovacs.com/us/shop/goat-robotic-lawn-mower/goat-a3000-lidar-pro",
      "https://www.bgr.com/2168359/ecovacs-goat-a3000-lidar-pro-review/",
      "https://www.reviewed.com/home-outdoors/best-right-now/best-robot-lawn-mowers",
    ],
  },
  {
    id: "mammotion-luba-mini-2-awd",
    name: "Mammotion LUBA mini 2 AWD",
    shortName: "LUBA mini 2 AWD",
    brand: "Mammotion",
    tier: "mid",
    releaseYear: 2026,
    maxSqFt: 16146,
    maxSlopePct: 80,
    nav: "360° LiDAR + dual-camera AI vision (no RTK)",
    navTech: ["lidar", "vision"],
    needsRtkStation: false,
    drive: "AWD",
    cutWidthIn: 7.8,
    cutHeightIn: [0.8, 4.0],
    ipRating: "IPX6",
    connectivity: "4G (3 years included), Wi-Fi, Bluetooth",
    antiTheft: "4G tracking, live view, PIN, lift alarm, geofence",
    priceLow: 1699,
    priceHigh: 1999,
    specNotes: [
      "Covers 0.37 acre. Standard version cuts 0.8–2.6\"; 1500H cuts 2.2–4.0\".",
      "Fixed-height 4.7\" side edge disc cuts to about 2.1\" from walls.",
    ],
    query: "Mammotion LUBA mini 2 AWD 1500",
    bestFor: "Small but hilly or cluttered yards up to about a third of an acre.",
    pros: [
      "Real edge-cutting disc",
      "AWD with an 80% slope rating in a compact chassis",
      "Handles tight, cluttered layouts well",
      "No RTK antenna to install",
    ],
    cons: [
      "Edge disc height is fixed",
      "Grass builds up underneath in wet conditions",
      "Pricey for 0.37-acre coverage",
    ],
    score: 8.6,
    scores: { navigation: 9, terrain: 9.5, coverage: 6.5, value: 7.5 },
    verdict:
      "Flagship terrain ability shrunk to fit a small yard. If your lot is under a third of an acre but steep, rooty or full of beds, this beats every 2WD budget mower. On flat, open lawns, a cheaper model will do the same job.",
    sources: [
      "https://us.mammotion.com/products/luba-mini-2-awd-robot-lawn-mower",
      "https://techaeris.com/2026/08/16/mammotion-luba-mini-2-awd-review/",
      "https://www.bobvila.com/reviews/best-robotic-mowers-2026/",
    ],
  },
  {
    id: "segway-navimow-i2-awd",
    name: "Segway Navimow i2 AWD (i206 / i210)",
    shortName: "Navimow i2 AWD",
    brand: "Segway",
    tier: "budget",
    releaseYear: 2026,
    maxSqFt: 10890,
    maxSlopePct: 45,
    nav: "Tri-band network RTK + vision (VisionFence)",
    navTech: ["rtk", "vision"],
    needsRtkStation: false,
    drive: "AWD",
    cutWidthIn: 7.1,
    cutHeightIn: [2.0, 3.6],
    noiseDb: 59,
    ipRating: "IP66",
    connectivity: "4G (1 year included, then ~$33/yr), Wi-Fi, Bluetooth",
    antiTheft: "4G GPS tracking, geofence alarm",
    priceLow: 849,
    priceHigh: 1099,
    tiers: [
      { name: "Navimow i206 AWD", sqft: 6534, price: 849 },
      { name: "Navimow i210 AWD", sqft: 10890, price: 1099 },
    ],
    specNotes: [
      "i206 covers 0.15 acre, i210 covers 0.25 acre. Cutting height is set by hand.",
      "Noise, IP rating and deck width are taken from EU/AU spec sheets.",
    ],
    query: "Segway Navimow i210 AWD",
    bestFor: "Small sloped or bumpy yards on a mid budget.",
    pros: [
      "Cheapest AWD wire-free mower from a major brand",
      "Antenna-free setup",
      "Off-road wheels handle roots and 1.5\" steps",
    ],
    cons: ["Narrow 7.1\" deck", "Cutting height is set by hand", "4G subscription after year one"],
    score: 8.5,
    scores: { navigation: 8, terrain: 8, coverage: 6.5, value: 9.5 },
    verdict:
      "The best-value small-yard mower if your lawn isn't perfectly flat. AWD traction for under $1,100 was unheard of a year ago. Coverage tops out at a quarter acre and the deck is narrow, so it's strictly a small-lot machine.",
    sources: [
      "https://9to5toys.com/2026/05/15/segway-navimow-summer-sale-i2-awd-series-robot-mowers-from-899-more/",
      "https://navimow.segway.com/collections/navimow-i2-awd-robotic-lawn-mower",
    ],
  },
  {
    id: "sunseeker-x7-gen-2",
    name: "Sunseeker Elite X7 Gen 2 / X7 Plus Gen 2",
    shortName: "Sunseeker X7 Gen 2",
    brand: "Sunseeker",
    tier: "premium",
    releaseYear: 2025,
    maxSqFt: 65340,
    maxSlopePct: 70,
    nav: "Network RTK + VSLAM 2.0 + binocular 3D vision (AONavi)",
    navTech: ["rtk", "vision"],
    needsRtkStation: false,
    drive: "AWD",
    cutWidthIn: 14,
    cutHeightIn: [0.8, 4.0],
    noiseDb: 60,
    ipRating: "IPX5",
    connectivity: "Wi-Fi, Bluetooth, 4G (Plus)",
    antiTheft: "4G-GPS tracking and boundary alerts (standard on Plus), 5-year anti-theft service",
    priceLow: 2499,
    priceHigh: 2999,
    tiers: [
      { name: "Sunseeker X7 Gen 2", sqft: 32670, price: 2499 },
      { name: "Sunseeker X7 Plus Gen 2", sqft: 65340, price: 2999 },
    ],
    specNotes: [
      "X7 Gen 2 covers about 0.75 acre and X7 Plus Gen 2 up to 1.5 acres (per Yanko Design; Sunseeker lists only \"up to 1.5 acres\").",
      "Gen 2 is marketed with network RTK, but Reviewed and Yanko Design both describe placing an RTK antenna during setup. Check the box contents for your version.",
      "The original X7 (sold at Costco, 0.75 ac) uses an RTK base station.",
    ],
    query: "Sunseeker X7 Plus Gen 2 robot mower",
    bestFor: "Mid-to-large lawns where a striped, manicured finish matters.",
    pros: [
      "Best cut quality in Reviewed's testing, with stripes and checkerboard patterns",
      "AWD, 70% slopes and a 4\" max cut height",
      "Network RTK on Gen 2 (some setups still use an antenna)",
    ],
    cons: [
      "Gen 1 needs an RTK base, and reports differ on Gen 2, so check which version you're buying",
      "Priced high against 2026 LiDAR rivals",
      "Only IPX5 weather rating",
    ],
    score: 8.4,
    scores: { navigation: 8, terrain: 9, coverage: 9, value: 7.5 },
    verdict:
      "The finish-quality pick: it cuts the neatest stripes of any robot we track, on AWD hardware that handles real slopes. It's a strong buy at a discount, but at full price the LiDAR flagships give you more navigation for similar money.",
    sources: ["https://sunseekerelite.com/us/x7-gen-2", "https://www.reviewed.com/home-outdoors/best-right-now/best-robot-lawn-mowers"],
  },
  {
    id: "segway-navimow-i215-lidar",
    name: "Segway Navimow i215 LiDAR",
    shortName: "Navimow i215 LiDAR",
    brand: "Segway",
    tier: "mid",
    releaseYear: 2026,
    maxSqFt: 16146,
    maxSlopePct: 45,
    nav: "Solid-state LiDAR + 140° camera, no satellite antenna",
    navTech: ["lidar", "vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 8.7,
    cutHeightIn: [0.8, 2.8],
    noiseDb: 59,
    connectivity: "4G (1 year included), Wi-Fi, Bluetooth",
    antiTheft: "4G tracking, geofence",
    priceLow: 1399,
    priceHigh: 1599,
    specNotes: ["Covers 0.37 acre. Slope is 45% per Navimow EU, though one secondary source lists 30%. IP rating not published for the US model."],
    query: "Segway Navimow i215 LiDAR",
    bestFor: "Tree-covered yards of a quarter to a third of an acre.",
    pros: ["One of the simplest setups (automatic LiDAR mapping)", "Works under trees and in shade", "Motorized height adjustment"],
    cons: ["2WD only", "Edges and drop-offs may need map edits", "4G fee after year one"],
    score: 8.4,
    scores: { navigation: 9, terrain: 7, coverage: 7, value: 8.5 },
    verdict:
      "LiDAR navigation at a mid-range price, built for the shady suburban yards where RTK mowers lose their fix. Setup is close to drop-and-go. It's a 2WD machine, so pair it with a gentle lawn.",
    sources: [
      "https://www.pcworld.com/article/3188114/navimow-i215-review.html",
      "https://androidguys.com/reviews/smart-home-reviews/segway-navimow-i215-lidar/",
    ],
  },
  {
    id: "segway-navimow-i105n-i110n",
    name: "Segway Navimow i105N / i110N",
    shortName: "Navimow i105N / i110N",
    brand: "Segway",
    tier: "budget",
    releaseYear: 2025,
    maxSqFt: 10890,
    maxSlopePct: 30,
    nav: "Network RTK + AI vision",
    navTech: ["rtk", "vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 7.1,
    cutHeightIn: [2.0, 3.6],
    noiseDb: 58,
    ipRating: "IP66",
    connectivity: "Wi-Fi, Bluetooth, 4G",
    antiTheft: "GPS tracking and alarm",
    priceLow: 669,
    priceHigh: 789,
    tiers: [
      { name: "Navimow i105N", sqft: 5445, price: 669 },
      { name: "Navimow i110N", sqft: 10890, price: 789 },
    ],
    specNotes: [
      "Uses network RTK where coverage exists. Reviewed and Tom's Guide both staked the included antenna during setup, so plan for it.","i105N covers 0.125 acre, i110N covers 0.25 acre. Cutting height is set by hand."],
    query: "Segway Navimow i105N robot mower",
    bestFor: "Budget buyers with small, flat lawns.",
    pros: ["Lowest-cost credible RTK + vision mower", "Very quiet (58 dB), fine for night mowing", "Proven, widely reviewed platform"],
    cons: ["Struggles on slopes and in mud", "Small coverage and a narrow deck", "Cutting height is set by hand"],
    score: 8.3,
    scores: { navigation: 8, terrain: 5.5, coverage: 6, value: 10 },
    verdict:
      "The best-value wire-free mower for a small, flat lawn, and Reviewed's value pick. Network RTK plus cameras is a proven combination at a price that used to buy a boundary-wire mower. Skip it if your yard has any meaningful slope.",
    sources: [
      "https://navimow.com/products/navimow-i105",
      "https://9to5toys.com/2026/09/28/segway-navimow-i105n-robot-lawn-mower-2/",
      "https://www.reviewed.com/home-outdoors/best-right-now/best-robot-lawn-mowers",
    ],
  },
  {
    id: "sunseeker-s4",
    name: "Sunseeker S4 LiDAR",
    shortName: "Sunseeker S4",
    brand: "Sunseeker",
    tier: "mid",
    releaseYear: 2026,
    maxSqFt: 10764,
    maxSlopePct: 42,
    nav: "360° 3D LiDAR + AI camera, no RTK antenna",
    navTech: ["lidar", "vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 7,
    cutHeightIn: [1.6, 3.2],
    noiseDb: 60,
    ipRating: "IPX6",
    connectivity: "Wi-Fi, Bluetooth; 4G via add-on module",
    antiTheft: "App tracking (GPS tracking needs the 4G add-on)",
    priceLow: 999,
    priceHigh: 1599,
    specNotes: ["Covers 0.25 acre. Slope, width and height are from retailer listings.", "Sunseeker says it is not compatible with St. Augustine or Zoysia grass.", "Minimum edge distance is about 4.3\" (110 mm), so expect to trim borders.", "Launch SRP was $1,599; Costco and Amazon have sold it for about $984–$1,000 in fall 2026."],
    query: "Sunseeker S4 LiDAR robot lawn mower",
    bestFor: "Small, heavily shaded yards.",
    pros: ["Excellent under dense tree canopy", "Maps in minutes, with an even cut", "Quiet, with US warranty support; CES 2026 Innovation honoree"],
    cons: ["Weak at edges, so fence lines need a trim about every two weeks", "Narrow 7\" deck", "Not compatible with St. Augustine or Zoysia grass"],
    score: 8.4,
    scores: { navigation: 9, terrain: 6.5, coverage: 6.5, value: 9 },
    verdict:
      "Bob Vila's small-yard pick and our choice for compact lots under heavy trees. LiDAR means canopy doesn't matter, and setup takes minutes. Plan on trimming edges yourself.",
    sources: [
      "https://www.tomsguide.com/home/smart-home/the-sunseeker-s4-robot-lawnmower-has-left-me-seriously-impressed-after-mowing-my-yard-for-a-month",
      "https://www.prnewswire.com/news-releases/sunseeker-robotics-lidar-mower-s4-named-as-ces-innovation-awards-2026-honoree-302608547.html",
    ],
  },
  {
    id: "dreame-a3-awd",
    name: "Dreame A3 AWD (1000 / 2000)",
    shortName: "Dreame A3 AWD",
    brand: "Dreame",
    tier: "budget",
    releaseYear: 2026,
    maxSqFt: 21780,
    maxSlopePct: 80,
    nav: "360° 3D LiDAR + AI vision, no satellites",
    navTech: ["lidar", "vision"],
    needsRtkStation: false,
    drive: "AWD",
    cutWidthIn: 7.9,
    cutHeightIn: [1.2, 3.9],
    noiseDb: 63,
    ipRating: "IPX6",
    connectivity: "4G, Wi-Fi, Bluetooth",
    antiTheft: "PIN, lift alarm, 4G tracking, AirTag slot",
    priceLow: 1099,
    priceHigh: 1539,
    tiers: [
      { name: "Dreame A3 AWD 1000", sqft: 10890, price: 1099 },
      { name: "Dreame A3 AWD 2000", sqft: 21780, price: 1539 },
    ],
    specNotes: ["1000 covers 0.25 acre, 2000 covers 0.5 acre. List prices are $1,999–$2,199; October 2026 sale prices are shown. EdgeMaster cuts to about 1.9\" from edges."],
    query: "Dreame A3 AWD robot lawn mower",
    bestFor: "The cheapest way to get LiDAR plus AWD on a hilly small-to-mid lawn.",
    pros: ["LiDAR + AWD + 80% slope rating for about $1,100 on sale", "No antenna or base station", "EdgeMaster gets closer to borders than most"],
    cons: ["Narrow 7.9\" deck", "Sale prices fluctuate a lot", "Obstacle avoidance trails the flagships"],
    score: 8.5,
    scores: { navigation: 8.5, terrain: 9.5, coverage: 7, value: 9.5 },
    verdict:
      "At its current sale price, this is the bargain of the 2026 lineup: flagship-style LiDAR and AWD hill-climbing for about a third less than rivals. The narrow deck means it works best on lots of half an acre or less.",
    sources: ["https://yardcare.dreametech.com/products/a3-awd-robot-lawn-mower"],
  },
  {
    id: "worx-landroid-vision-cloud",
    name: "WORX Landroid Vision Cloud",
    shortName: "Landroid Vision Cloud",
    brand: "WORX",
    tier: "budget",
    releaseYear: 2025,
    maxSqFt: 43560,
    maxSlopePct: 30,
    nav: "Network RTK (RTK Cloud) + V-SLAM vision + AI obstacle avoidance",
    navTech: ["rtk", "vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 8.7,
    cutHeightIn: [1.57, 3.54],
    connectivity: "4G, Wi-Fi, Bluetooth",
    antiTheft: "GPS/4G tracking, alarm",
    priceLow: 850,
    priceHigh: 1840,
    tiers: [
      { name: "Landroid Vision Cloud ¼ acre", sqft: 10890, price: 850 },
      { name: "Landroid Vision Cloud 1 acre", sqft: 43560, price: 1840 },
    ],
    specNotes: ["Sizes from ¼ to 1 acre. Cut-to-Zero edge trimmer is an add-on on some SKUs. Noise and IP rating not published.", "WORX advertises lifetime free RTK Cloud corrections and free 4G. Confirm the current terms before buying."],
    query: "WORX Landroid Vision Cloud robotic mower",
    bestFor: "Easy setup from a brand sold at every big-box store.",
    pros: [
      "No antenna, with a simple setup and app",
      "Battery is shared with WORX Power Share tools",
      "Sold at Home Depot, Lowe's, Best Buy and Walmart, so returns are easy",
    ],
    cons: ["Only rated for 30% slopes", "Cut-to-Zero and night light cost extra on some models", "Short 60–80 minute runtime"],
    score: 8.0,
    scores: { navigation: 8, terrain: 5.5, coverage: 8, value: 8.5 },
    verdict:
      "A safe, mainstream choice for flat lawns up to an acre, with easy returns and parts at big-box stores. For hills, step up to the Vision Cloud 4WD.",
    sources: ["https://9to5toys.com/2026/04/03/worx-landroid-vision-cloud-rtk-standard-4wd-robot-mowers-lows-from-2070/", "https://www.bobvila.com/reviews/best-robotic-mowers-2026/"],
  },
  {
    id: "worx-landroid-vision-cloud-4wd",
    name: "WORX Landroid Vision Cloud 4WD",
    shortName: "Landroid Vision Cloud 4WD",
    brand: "WORX",
    tier: "mid",
    releaseYear: 2025,
    maxSqFt: 65340,
    maxSlopePct: 84,
    nav: "Network RTK (RTK Cloud) + V-SLAM vision + AI obstacle avoidance",
    navTech: ["rtk", "vision"],
    needsRtkStation: false,
    drive: "AWD",
    cutWidthIn: 8.7,
    cutHeightIn: [1.57, 3.54],
    connectivity: "4G, Wi-Fi, Bluetooth",
    antiTheft: "GPS/4G tracking, alarm",
    priceLow: 1999,
    priceHigh: 3699,
    specNotes: ["Models WR341–WR346 cover ¼ to 1.5 acres. The 1-acre model was about $2,400 in spring 2026. Noise and IP rating not published.", "WORX lists the Cut-to-Zero blade for the 4WD, but at least one review says it ships separately. Check the box contents.", "WORX advertises lifetime free RTK Cloud corrections and free 4G. Confirm the current terms before buying."],
    query: "WORX Landroid Vision Cloud 4WD",
    bestFor: "Hilly lawns up to 1.5 acres, from a big-box brand.",
    pros: ["84% slope rating with 4WD", "Antenna-free network RTK; WORX advertises free RTK Cloud and 4G", "Wide retail availability and Power Share batteries"],
    cons: ["Narrow 8.7\" deck for 1.5 acres", "Top tiers are pricey", "Short runtime per charge"],
    score: 8.2,
    scores: { navigation: 8, terrain: 9.5, coverage: 8, value: 7 },
    verdict:
      "WORX's answer to the AWD flagships, with the same easy app and a slope rating that matches the best. The narrow deck makes it slower on big lawns than the Navimow X4.",
    sources: ["https://www.worx.com/en-us/landroid-vision-cloud-4wd", "https://9to5toys.com/2026/04/03/worx-landroid-vision-cloud-rtk-standard-4wd-robot-mowers-lows-from-2070/"],
  },
  {
    id: "ecovacs-goat-o1000-lidar-pro",
    name: "ECOVACS GOAT O1000 LiDAR PRO",
    shortName: "GOAT O1000 LiDAR Pro",
    brand: "ECOVACS",
    tier: "budget",
    releaseYear: 2026,
    maxSqFt: 10764,
    maxSlopePct: 45,
    nav: "Dual LiDAR + 3D obstacle avoidance",
    navTech: ["lidar", "vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 8.66,
    cutHeightIn: [1.18, 3.15],
    noiseDb: 61,
    ipRating: "IPX6",
    connectivity: "Wi-Fi, Bluetooth",
    antiTheft: "PIN protection and lift/move alarms per ECOVACS; no 4G tracking",
    priceLow: 999,
    priceHigh: 1499,
    specNotes: ["Covers 0.25 acre. Built-in TruEdge trimmer runs at about 81 dB."],
    query: "ECOVACS GOAT O1000 LiDAR PRO",
    bestFor: "Small yards that want trimmed edges on a budget.",
    pros: ["Built-in edge trimmer at around $1,000", "LiDAR works under trees", "Automatic mapping"],
    cons: ["Small coverage", "Loud trimmer (~81 dB)", "No 4G, so no GPS theft tracking"],
    score: 8.1,
    scores: { navigation: 8.5, terrain: 6.5, coverage: 6, value: 9 },
    verdict:
      "The cheapest way to get a robot that also trims your edges. Good for compact, flat-to-gentle lots. It has a PIN and lift alarm, but no 4G tracking, which is a real gap if your yard is visible from the street.",
    sources: [
      "https://www.ecovacs.com/us/shop/goat-robotic-lawn-mower/goat-o1000-lidar-pro",
      "https://9to5toys.com/2026/07/27/ecovacs-goat-o1000-lidar-pro-robot-mower-999-low-more/",
    ],
  },
  {
    id: "segway-navimow-x3",
    name: "Segway Navimow X3 Series (X315 – X390)",
    shortName: "Navimow X3",
    brand: "Segway",
    tier: "premium",
    releaseYear: 2025,
    maxSqFt: 108900,
    maxSlopePct: 50,
    nav: "RTK (network or antenna) + 3 wide-angle cameras + ToF",
    navTech: ["rtk", "vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 9.3,
    cutHeightIn: [2.0, 4.0],
    noiseDb: 60,
    ipRating: "IP66",
    connectivity: "4G, Wi-Fi, Bluetooth",
    antiTheft: "4G GPS tracking, geofence alarm",
    priceLow: 1799,
    priceHigh: 4499,
    tiers: [
      { name: "Navimow X315", sqft: 17424, price: 1799 },
      { name: "Navimow X330", sqft: 32670, price: 2299 },
      { name: "Navimow X350", sqft: 65340, price: 2799 },
      { name: "Navimow X390", sqft: 108900, price: 4499 },
    ],
    specNotes: [
      "Cutting height: Navimow's spec page lists 2.0–4.0\"; TechRadar's X350 review lists 0.8–2.8\" (20–70 mm). Confirm for your tier.","Tiers cover 0.4 / 0.75 / 1.5 / 2.5 acres. Whether you need the RTK antenna depends on network-RTK coverage at your address."],
    query: "Segway Navimow X390 robot mower",
    bestFor: "Very large, gently sloped properties up to 2.5 acres (X390).",
    pros: ["Covers up to 2.5 acres (X390)", "Fast and accurate, and holds position under trees", "Discounted now that the X4 is out"],
    cons: ["2WD with a 50% slope limit", "Narrower deck than the X4", "Superseded by the X4 for lawns under 1.5 acres"],
    score: 8.2,
    scores: { navigation: 8.5, terrain: 6.5, coverage: 10, value: 7.5 },
    verdict:
      "Still the go-to for big, gentle acreage. The X390's 2.5-acre rating is unmatched among mainstream wire-free mowers. For anything up to 1.5 acres, the newer X4 is the better buy.",
    sources: ["https://navimow.com/pages/navimow-x3-specs", "https://www.techradar.com/home/small-appliances/segway-navimow-x3-series-robot-lawn-mower-review"],
  },
  {
    id: "husqvarna-automower-iq",
    name: "Husqvarna Automower 410 iQ / 420 iQ / 440 iQ",
    shortName: "Automower iQ",
    brand: "Husqvarna",
    tier: "premium",
    releaseYear: 2025,
    maxSqFt: 87120,
    maxSlopePct: 45,
    nav: "EPOS satellite RTK with reference station + radar object detection",
    navTech: ["rtk"],
    needsRtkStation: true,
    drive: "2WD",
    cutWidthIn: 9.4,
    cutHeightIn: [1.0, 4.0],
    noiseDb: 62,
    ipRating: "IPX5",
    connectivity: "Cellular, Wi-Fi, Bluetooth",
    antiTheft: "GPS tracking, alarm, PIN, geofence",
    priceLow: 1999,
    priceHigh: 3399,
    tiers: [
      { name: "Automower 410 iQ", sqft: 21780, price: 1999 },
      { name: "Automower 420 iQ", sqft: 43560, price: 2599 },
      { name: "Automower 440 iQ", sqft: 87120, price: 3399 },
    ],
    specNotes: [
      "Rated 0.5 / 1 / 2 acres for open, systematic layouts; irregular yards get roughly half that.",
      "Slope is 45% inside the area and 15% at the boundary. The reference station needs its own outlet; Husqvarna says EPOS Cloud can replace it in areas with coverage.",
      "October 2026 campaign prices are shown; list prices are $2,600–$4,300.",
    ],
    query: "Husqvarna Automower 420 iQ",
    bestFor: "Buyers who want a legacy brand with local dealer service.",
    pros: ["Brand reliability, dealer network and a 4-year warranty (3 years on the battery)", "Covers up to 2 acres", "Can fall back to boundary wire in yards with poor sky view"],
    cons: ["Reference station needs its own power outlet", "Radar avoidance trails LiDAR and vision, and can catch on roots", "RWD traction issues and boundary errors reported"],
    score: 8.0,
    scores: { navigation: 7.5, terrain: 6.5, coverage: 9, value: 7.5 },
    verdict:
      "The conservative pick: a mature platform, a long warranty and a dealer you can drive to. Navigation tech is a generation behind the LiDAR newcomers, so choose it for the support, not the specs.",
    sources: [
      "https://www.husqvarna.com/us/robotic-lawn-mowers/automower-420-iq/",
      "https://geardiary.com/2026/08/25/husqvarna-automower-420-iq-review/",
      "https://www.totallandscapecare.com/equipment/article/15707828/husqvarna-introduces-automower-iq-series",
    ],
  },
  {
    id: "lymow-one-plus",
    name: "Lymow One Plus (5A / 10A)",
    shortName: "Lymow One Plus",
    brand: "Lymow",
    tier: "premium",
    releaseYear: 2026,
    maxSqFt: 75359,
    maxSlopePct: 100,
    nav: "RTK + VSLAM + AI vision + ultrasonic",
    navTech: ["rtk", "vision"],
    needsRtkStation: true,
    drive: "Tracks",
    cutWidthIn: 16,
    cutHeightIn: [1.2, 4.0],
    ipRating: "IPX6",
    connectivity: "4G, Wi-Fi, Bluetooth (per Tom's Guide)",
    antiTheft: "Geofence alerts, device lock, live GPS tracking",
    priceLow: 2499,
    priceHigh: 2799,
    tiers: [
      { name: "Lymow One Plus 5A", sqft: 47916, price: 2499 },
      { name: "Lymow One Plus 10A", sqft: 75359, price: 2799 },
    ],
    specNotes: ["Area is a per-day rating (1.1 / 1.73 ac); about 0.57 acre per charge. Slope is stated as 45° (~100% grade), a marketing claim. Noise not published.", "Mapping takes 30–45 minutes per Lymow's guidance; Tom's Guide mapped a 6,800 sq ft yard in 20–30 minutes."],
    query: "Lymow One Plus robotic lawn mower",
    bestFor: "Rough, steep, overgrown rural acreage.",
    pros: ["Tank tracks handle extreme slopes and rough ground", "Powerful 16\" deck for big, rough lots", "Aluminum frame and LiFePO4 battery"],
    cons: ["Needs an RTK base; manual mapping takes 30–45 minutes", "Heavier and louder than wheeled robots", "Left patches in Tom's Guide testing"],
    score: 8.0,
    scores: { navigation: 7.5, terrain: 10, coverage: 8.5, value: 7 },
    verdict:
      "A niche machine for terrain that defeats wheels: tracked, powerful and built for rough acreage. On a manicured suburban lawn it's the wrong tool.",
    sources: ["https://www.tomsguide.com/home/smart-home/lymow-one-plus-robot-mower-review", "https://techaeris.com/2026/05/21/lymow-one-plus-review/"],
  },
  {
    id: "anthbot-m9",
    name: "ANTHBOT M9",
    shortName: "Anthbot M9",
    brand: "ANTHBOT",
    tier: "budget",
    releaseYear: 2026,
    maxSqFt: 10764,
    maxSlopePct: 45,
    nav: "Full-band RTK + dual HDR cameras",
    navTech: ["rtk", "vision"],
    needsRtkStation: true,
    drive: "2WD",
    cutWidthIn: 7.9,
    cutHeightIn: [1.2, 2.8],
    noiseDb: 58,
    connectivity: "Wi-Fi, Bluetooth; optional 4G service (per European reviews)",
    antiTheft: "Geofence alarm per European reviews; GPS tracking needs the optional 4G service",
    priceLow: 769,
    priceHigh: 899,
    specNotes: ["Covers about 0.25 acre (some reviews say 0.3). Needs an RTK antenna near the dock. The M9 Pro adds LiDAR. IP rating not published.", "Reviews disagree on mapping: New Atlas describes a manual drive-around, Reviewed calls it automatic."],
    query: "ANTHBOT M9 robot lawn mower",
    bestFor: "The cheapest dependable wire-free option for small, open lawns.",
    pros: ["RTK + vision for under $800", "About a 10-minute setup", "Compact for tight spaces, and quiet"],
    cons: ["Manual drive-around mapping", "Max 2.8\" cut height", "Needs an RTK antenna"],
    score: 7.9,
    scores: { navigation: 7.5, terrain: 6, coverage: 6, value: 9.5 },
    verdict:
      "Reviewed's small-lawn pick and one of the cheapest credible wire-free mowers. It's a good starter robot for an open quarter-acre, but it gives up anti-theft confirmation and taller cutting heights compared with the Navimow i105N.",
    sources: ["https://newatlas.com/consumer-tech/anthbot-robot-mower-m9/", "https://www.reviewed.com/home-outdoors/best-right-now/best-robot-lawn-mowers"],
  },
  {
    id: "mammotion-yuka-mini-2",
    name: "Mammotion YUKA mini 2 1000H",
    shortName: "YUKA mini 2",
    brand: "Mammotion",
    tier: "mid",
    releaseYear: 2026,
    maxSqFt: 10764,
    maxSlopePct: 45,
    nav: "360° LiDAR + dual-camera AI vision",
    navTech: ["lidar", "vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 7.5,
    cutHeightIn: [2.0, 3.5],
    ipRating: "IP67",
    connectivity: "Wi-Fi, Bluetooth; optional 4G module ($129)",
    antiTheft: "Tracking only with the optional 4G module",
    priceLow: 1399,
    priceHigh: 1559,
    specNotes: ["Covers 0.25 acre. Mammotion pages disagree on cutting height (2.0–3.5\" vs 2.2–4.0\"). US stock has been patchy."],
    query: "Mammotion YUKA mini 2 robot mower",
    bestFor: "Flat-to-moderate small yards that want LiDAR mapping.",
    pros: ["LiDAR mapping with no antenna", "Compact and light", "Good obstacle avoidance"],
    cons: ["RWD, so only 45% slopes", "4G costs extra", "Spotty US stock"],
    score: 7.8,
    scores: { navigation: 8.5, terrain: 6.5, coverage: 6, value: 7.5 },
    verdict:
      "A capable LiDAR mower, but hard to recommend over the Navimow i215 or Dreame A3 AWD at similar prices. Those include 4G or AWD, and they're actually in stock.",
    sources: ["https://us.mammotion.com/products/yuka-robot-lawn-mower", "https://ca.mammotion.com/products/yuka-mini-2-1000h-robot-lawn-mower"],
  },
  {
    id: "eufy-e15-e18",
    name: "eufy Robot Lawn Mower E15 / E18",
    shortName: "eufy E15 / E18",
    brand: "eufy",
    tier: "budget",
    releaseYear: 2025,
    maxSqFt: 12917,
    maxSlopePct: 32,
    nav: "Vision only (V-FSD cameras + AI), no RTK or LiDAR",
    navTech: ["vision"],
    needsRtkStation: false,
    drive: "2WD",
    cutWidthIn: 8,
    cutHeightIn: [1.0, 3.0],
    noiseDb: 56,
    ipRating: "IPX6",
    connectivity: "Wi-Fi, Bluetooth, 4G",
    antiTheft: "GPS + 4G tracking",
    priceLow: 999,
    priceHigh: 1399,
    tiers: [
      { name: "eufy E15", sqft: 8712, price: 999 },
      { name: "eufy E18", sqft: 12917, price: 1399 },
    ],
    specNotes: ["E15 covers 0.2 acre, E18 covers 0.3 acre. Slope is stated as 18° (about 32% grade)."],
    query: "eufy robot lawn mower E18",
    bestFor: "Simple, flat small lawns and owners who want the easiest setup.",
    pros: ["Easiest setup of all, with no antenna or base", "Very quiet (56 dB)", "Polished app"],
    cons: ["Camera-only navigation gets lost on complex lawns and in poor light", "Slips on damp grass; 18° slope limit", "Real-world coverage falls short of the rating"],
    score: 7.6,
    scores: { navigation: 7, terrain: 5, coverage: 6, value: 8 },
    verdict:
      "The plug-and-play option. If your lawn is a simple, flat rectangle, it's the least fussy robot to own. Complex layouts, shade or slopes expose the limits of camera-only navigation.",
    sources: ["https://www.tomsguide.com/home/gardening/eufy-e15-robot-lawnmower-review", "https://www.techradar.com/home/small-appliances/eufy-e15-robot-lawn-mower-review"],
  },
  {
    id: "husqvarna-automower-435-iq-awd",
    name: "Husqvarna Automower 435 iQ AWD",
    shortName: "Automower 435 iQ AWD",
    brand: "Husqvarna",
    tier: "premium",
    releaseYear: 2025,
    maxSqFt: 56628,
    maxSlopePct: 70,
    nav: "EPOS satellite RTK with reference station",
    navTech: ["rtk"],
    needsRtkStation: true,
    drive: "AWD",
    cutWidthIn: 8.7,
    cutHeightIn: [1.2, 2.8],
    noiseDb: 60,
    ipRating: "IPX4",
    connectivity: "Cellular, Bluetooth",
    antiTheft: "GPS tracking, alarm, PIN, geofence",
    priceLow: 4999,
    priceHigh: 4999,
    specNotes: ["Rated 1.3 acres for systematic layouts, 0.9 acre for irregular ones. Slope is 70% inside the area and 50% at the boundary."],
    query: "Husqvarna Automower 435 iQ AWD",
    bestFor: "Steep yards where dealer service matters more than price.",
    pros: ["Proven articulated AWD platform for steep yards", "Dealer support and warranty", "Copes well with rough ground"],
    cons: ["Most expensive per acre of any model here", "Low 2.8\" max cut height", "Needs a reference station; no LiDAR or AI vision"],
    score: 7.6,
    scores: { navigation: 7, terrain: 9, coverage: 8, value: 5.5 },
    verdict:
      "Hard to justify on specs alone, because the LUBA 3 and Dreame A3 AWD Pro climb as well for far less. Buy it if a local Husqvarna dealer and a long warranty matter more to you than the price.",
    sources: [
      "https://www.husqvarna.com/us/robotic-lawn-mowers/automower-435-iq-awd/",
      "https://www.lowes.com/pd/Husqvarna-Automower-435-iQ-AWD-Robotic-Lawn-Mower-with-GPS-Assisted-Navigation-1-to-1-1-4-acres/5017493723",
    ],
  },
];

export const ACRE = 43560;

export function getModel(id: string): MowerModel {
  const m = MODELS.find((m) => m.id === id);
  if (!m) throw new Error(`Unknown model id: ${id}`);
  return m;
}

export function gradeToDegrees(pct: number): number {
  return (Math.atan(pct / 100) * 180) / Math.PI;
}

export function formatMoney(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function formatPrice(m: MowerModel): string {
  return m.priceLow === m.priceHigh
    ? formatMoney(m.priceLow)
    : `${formatMoney(m.priceLow)}–${formatMoney(m.priceHigh)}`;
}

export function formatArea(sqft: number): string {
  const a = String(+(sqft / ACRE).toFixed(2));
  return `${Math.round(sqft).toLocaleString("en-US")} sq ft (${a} ac)`;
}

/** Cheapest tier (or the model itself) that covers `sqft`, or null if none does. */
export function bestTierFor(m: MowerModel, sqft: number): { name: string; sqft: number; price: number } | null {
  const options = m.tiers?.length ? m.tiers : [{ name: m.name, sqft: m.maxSqFt, price: m.priceLow }];
  const fits = options.filter((t) => t.sqft >= sqft).sort((a, b) => a.price - b.price);
  return fits[0] ?? null;
}

export const NAV_LABEL: Record<NavTech, string> = {
  rtk: "RTK-GPS",
  lidar: "LiDAR",
  vision: "AI vision",
};

/** Square feet → acres, rounded to 2 decimals (1.5, 0.25, 1.24). */
export function acresOf(sqft: number): number {
  return +(sqft / ACRE).toFixed(2);
}
