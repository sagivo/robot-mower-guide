/**
 * Robot mower accessories on amazon.com. Every ASIN's product page title was
 * checked on 2026-10-07. `fits` uses model ids from models.ts ("universal" for
 * generic garages). `fitNote` flags fitment the listing doesn't fully confirm.
 */
export type AccessoryKind = "garage" | "blades" | "4g" | "wheels" | "antenna" | "edge" | "tracker" | "stand" | "other";

export interface Accessory {
  asin: string;
  name: string;
  kind: AccessoryKind;
  brand: string;
  /** made by the mower's manufacturer */
  oem: boolean;
  fits: string[];
  price: number;
  why: string;
  fitNote?: string;
}

export const ACCESSORIES: Accessory[] = [
  // ---- Segway Navimow
  { asin: "B0CX4YVR1P", name: "Navimow Garage S", kind: "garage", brand: "Segway Navimow", oem: true, fits: ["segway-navimow-i105n-i110n", "segway-navimow-i2-awd"], price: 199, why: "The official flip-top garage keeps sun and rain off the mower and dock without blocking its signal." },
  { asin: "B0CX7ZRB2Z", name: "Navimow Garage M", kind: "garage", brand: "Segway Navimow", oem: true, fits: ["segway-navimow-i215-lidar"], price: 249, why: "The official larger garage sized for the i215 LiDAR, with a flip-up lid so you can reach the controls." },
  { asin: "B0CX4PNF7J", name: "Navimow Access+ 4G Module", kind: "4g", brand: "Segway Navimow", oem: true, fits: ["segway-navimow-i105n-i110n"], price: 119, why: "Adds cellular connectivity and GPS anti-theft tracking where Wi-Fi doesn't reach; the first year of service is free." },
  { asin: "B0D4YNDVGL", name: "Navimow Traction Wheels (i-series)", kind: "wheels", brand: "Segway Navimow", oem: true, fits: ["segway-navimow-i105n-i110n"], price: 99.99, why: "Cleated rear wheels help the 2WD i105N/i110N grip wet grass and slopes." },
  { asin: "B0CCVLSJKK", name: "Navimow Antenna Extension Kit", kind: "antenna", brand: "Segway Navimow", oem: true, fits: ["segway-navimow-i105n-i110n"], price: 49.99, why: "Mount the RTK antenna on a wall or roof, about 10 m from the dock, for a clearer view of the sky." },
  // ---- Husqvarna
  { asin: "B0GR6TQJTV", name: "Automower House for iQ", kind: "garage", brand: "Husqvarna", oem: true, fits: ["husqvarna-automower-iq", "husqvarna-automower-435-iq-awd"], price: 171.99, why: "The official house for the iQ line, with a foldable top so the keypad stays reachable." },
  { asin: "B0GNDVM67S", name: "Automower iQ Terrain Wheel Kit", kind: "wheels", brand: "Husqvarna", oem: true, fits: ["husqvarna-automower-iq"], price: 80.99, why: "Heavier treaded rear wheels with brushes improve grip on wet grass and slopes." },
  { asin: "B08H7L54FR", name: "Husqvarna Endurance Blades (6-pack)", kind: "blades", brand: "Husqvarna", oem: true, fits: ["husqvarna-automower-iq", "husqvarna-automower-435-iq-awd"], price: 25.09, why: "Genuine four-edge carbon-steel blades that Husqvarna says last twice as long as its classic blades." },
  { asin: "B0GNDJXTSD", name: "Automower Wheel Brush Kit", kind: "other", brand: "Husqvarna", oem: true, fits: ["husqvarna-automower-iq"], price: 14.99, why: "Cheap replacement brushes that stop grass caking on the standard iQ wheels." },
  // ---- WORX
  { asin: "B0GQLYKSBB", name: "WORX WA0828 Vision Cloud Garage", kind: "garage", brand: "WORX", oem: true, fits: ["worx-landroid-vision-cloud", "worx-landroid-vision-cloud-4wd"], price: 159.99, why: "The official garage, listed for US models WR310 through WR346." },
  { asin: "B0GQLMC6BP", name: "WORX Cut-to-Zero Edge Kit (2WD)", kind: "edge", brand: "WORX", oem: true, fits: ["worx-landroid-vision-cloud"], price: 159.99, why: "Lets the mower cut right up to the lawn edge, so there's far less hand trimming." },
  { asin: "B0GQLLR1PV", name: "WORX Cut-to-Zero Edge Kit (4WD)", kind: "edge", brand: "WORX", oem: true, fits: ["worx-landroid-vision-cloud-4wd"], price: 199.99, why: "The 4WD version of the edge module, listed for WR341 through WR346." },
  { asin: "B0GQLGZJMR", name: "WORX Find My Landroid GPS Tracker", kind: "tracker", brand: "WORX", oem: true, fits: ["worx-landroid-vision-cloud", "worx-landroid-vision-cloud-4wd"], price: 239.99, why: "A cellular GPS tracker with app alerts and remote lock if the mower leaves your yard.", fitNote: "The US listing doesn't name models; Vision Cloud fit is likely but unconfirmed." },
  { asin: "B0GQMFW8HC", name: "WORX WA0720 Long-Life Blades", kind: "blades", brand: "WORX", oem: true, fits: ["worx-landroid-vision-cloud", "worx-landroid-vision-cloud-4wd"], price: 29, why: "Official double-sided stainless replacement blades, listed for US WR310 through WR346." },
  // ---- Mammotion
  { asin: "B0GZVW34PD", name: "Mammotion Garage Mini", kind: "garage", brand: "Mammotion", oem: true, fits: ["mammotion-luba-mini-2-awd", "mammotion-yuka-mini-2"], price: 129, why: "The official weather shelter for the mini 2 models, which goes up or comes off in about a minute." },
  { asin: "B0H1LVB5N1", name: "Mammotion Washstand", kind: "stand", brand: "Mammotion", oem: true, fits: ["mammotion-luba-3-awd", "mammotion-luba-mini-2-awd", "mammotion-yuka-mini-2"], price: 79, why: "Raises the chassis so you can hose off the deck and swap blades without crouching." },
  { asin: "B0DSBKKYM8", name: "Mammotion Blades (24-pack)", kind: "blades", brand: "Mammotion", oem: true, fits: ["mammotion-luba-mini-2-awd", "mammotion-yuka-mini-2"], price: 49, why: "Genuine Mammotion blades; the listing names the LUBA mini and YUKA mini series." },
  // ---- ECOVACS
  { asin: "B0F21K9RZS", name: "ECOVACS GOAT Garage", kind: "garage", brand: "ECOVACS", oem: true, fits: ["ecovacs-goat-a-lidar-pro", "ecovacs-goat-o1000-lidar-pro"], price: 159.99, why: "The official garage, listed for the A3000, A2000 and O1000 LiDAR PRO." },
  { asin: "B0FL2CYMP7", name: "ECOVACS GOAT Blade Kit", kind: "blades", brand: "ECOVACS", oem: true, fits: ["ecovacs-goat-a-lidar-pro", "ecovacs-goat-o1000-lidar-pro"], price: 14.99, why: "An inexpensive genuine blade set for the current GOAT O and A series.", fitNote: "The listing names the RTK and A3000 LiDAR models, not the LiDAR PRO by name; same family, likely the same blade." },
  { asin: "B0GSFNB68L", name: "ECOVACS GOAT Trimmer Kit", kind: "edge", brand: "ECOVACS", oem: true, fits: ["ecovacs-goat-a-lidar-pro", "ecovacs-goat-o1000-lidar-pro"], price: 39.99, why: "Replacement parts for the built-in TruEdge edge trimmer on the LiDAR PRO models." },
  // ---- Sunseeker
  { asin: "B0DKSHS83B", name: "Sunseeker Blades (12-pack)", kind: "blades", brand: "Sunseeker", oem: true, fits: ["sunseeker-s4", "sunseeker-x7-gen-2"], price: 47.99, why: "Genuine stainless blades with screws, listed for the S4 and X7.", fitNote: "The listing says \"Orion X7\"; X7 Gen 2 fit is unconfirmed." },
  { asin: "B0FPL1NDVX", name: "Sunseeker X7 / X5 Garage", kind: "garage", brand: "Sunseeker", oem: true, fits: ["sunseeker-x7-gen-2", "sunseeker-x5-awd"], price: 159.2, why: "The official garage sized for the X7, X7 Plus and X5, designed not to block the signal." },
  { asin: "B0GTZ8J3JB", name: "Sunseeker S4 Garage", kind: "garage", brand: "Sunseeker", oem: true, fits: ["sunseeker-s4"], price: 178.23, why: "The official S4 shelter, which also shades the dock to keep charging temperatures down." },
  // ---- ANTHBOT
  { asin: "B0F1MTLNHK", name: "ANTHBOT Blades (15-pack)", kind: "blades", brand: "ANTHBOT", oem: true, fits: ["anthbot-m9", "anthbot-m5-lidar"], price: 16.99, why: "Genuine blades; the listing names the Genie series, M5 and M9." },
  { asin: "B0GVYSVTDK", name: "ANTHBOT M-Series Garage", kind: "garage", brand: "ANTHBOT", oem: true, fits: ["anthbot-m9", "anthbot-m5-lidar"], price: 143.65, why: "The official garage that covers both the mower and its charging station; listed for M5, M5 LiDAR and M9." },
  // ---- Dreame
  { asin: "B0GTTTM1GV", name: "Dreame A3 AWD Pro Garage", kind: "garage", brand: "Dreame", oem: true, fits: ["dreame-a3-awd-pro"], price: 199.99, why: "The official garage that protects the mower and dock from rain and sun." },
  { asin: "B0GTV9T4QC", name: "Dreame Quick-Detach Blades (12)", kind: "blades", brand: "Dreame", oem: true, fits: ["dreame-a3-awd-pro", "dreame-a3-awd"], price: 19.99, why: "Genuine tool-free quick-detach blades.", fitNote: "The listing says \"Dreame Roboticmower series\" without naming models." },
  // ---- Universal garages
  { asin: "B0GL989SC4", name: "NEBAIKA Polycarbonate Garage", kind: "garage", brand: "NEBAIKA", oem: false, fits: ["universal"], price: 111.99, why: "A hard multi-wall polycarbonate roof on a rust-proof frame; 40 x 32 x 18 in fits larger mowers." },
  { asin: "B0C7842X78", name: "vidaXL Galvanized Steel Shed", kind: "garage", brand: "vidaXL", oem: false, fits: ["universal"], price: 98.99, why: "All-steel with the dock inside and a 17.7 in door: the sturdiest option against hail and snow." },
  { asin: "B0CVFQH4W7", name: "vidaXL Poly Rattan Garage", kind: "garage", brand: "vidaXL", oem: false, fits: ["universal"], price: 74.28, why: "Woven rattan look on a steel frame with a PP roof; the 32 x 35 x 22 in interior fits most mowers." },
  { asin: "B086Q989F2", name: "dobar Wooden Garage", kind: "garage", brand: "dobar", oem: false, fits: ["universal"], price: 66.05, why: "The most-reviewed universal garage we found: glazed spruce with a lift-off roof.", fitNote: "Interior is about 13.8 in tall, too low for mowers with a LiDAR mast or tall antenna." },
  { asin: "B0DBP6CBJM", name: "CNAINFC Fabric Garage (Large)", kind: "garage", brand: "CNAINFC", oem: false, fits: ["universal"], price: 79.89, why: "A light fabric tent-style garage (35.5 x 29 x 17 in) that packs away for winter; the listing names the Navimow X4, LUBA 3 and Lymow." },
  { asin: "B0H6M8X635", name: "AotoParts Steel-Frame Fabric Garage", kind: "garage", brand: "AotoParts", oem: false, fits: ["universal"], price: 60.79, why: "A budget 600D fabric shelter (29 x 30 x 24 in) on a steel frame that includes a separate mower cover." },
  // ---- Third-party blades
  { asin: "B0F3VRXK73", name: "FourShow Mammotion Blades (36)", kind: "blades", brand: "FourShow", oem: false, fits: ["mammotion-luba-3-awd", "mammotion-luba-mini-2-awd", "mammotion-yuka-mini-2"], price: 21.59, why: "The most-reviewed Mammotion-compatible pack: 0.9 mm titanium-coated blades with washers." },
  { asin: "B0DC5M63VB", name: "KuddinX Mammotion Blades (30)", kind: "blades", brand: "KuddinX", oem: false, fits: ["mammotion-luba-3-awd", "mammotion-luba-mini-2-awd", "mammotion-yuka-mini-2"], price: 29.88, why: "The only listing we found that names the LUBA 3 and YUKA mini 2 explicitly." },
  { asin: "B0F6XSD9NJ", name: "FourShow Navimow Blades (36)", kind: "blades", brand: "FourShow", oem: false, fits: ["segway-navimow-i105n-i110n", "segway-navimow-i2-awd", "segway-navimow-i215-lidar"], price: 19.46, why: "A cheap bulk titanium blade pack for the Navimow i-series." },
  { asin: "B0DLKC7KB3", name: "FourShow Navimow 6-Blade Disc", kind: "blades", brand: "FourShow", oem: false, fits: ["segway-navimow-i105n-i110n", "segway-navimow-i2-awd"], price: 22.86, why: "A replacement cutting disc that carries 6 blades instead of 3, for a cleaner cut and slower wear." },
  { asin: "B08G8NK2DC", name: "EMBerg Automower Endurance Blades (18)", kind: "blades", brand: "EMBerg", oem: false, fits: ["husqvarna-automower-iq", "husqvarna-automower-435-iq-awd"], price: 23.99, why: "Endurance-style double-ended blades at a lower cost per blade than genuine." },
  { asin: "B0F5QN2XYQ", name: "FourShow WORX / eufy Blades (36)", kind: "blades", brand: "FourShow", oem: false, fits: ["worx-landroid-vision-cloud", "worx-landroid-vision-cloud-4wd", "eufy-e15-e18"], price: 23.99, why: "A bulk two-hole flip-over titanium blade pack." },
  { asin: "B0GXZ8SWZ1", name: "FourShow ECOVACS Blades (36)", kind: "blades", brand: "FourShow", oem: false, fits: ["ecovacs-goat-a-lidar-pro", "ecovacs-goat-o1000-lidar-pro"], price: 19.19, why: "The listing names the A2000 and A3000 family." },
  { asin: "B0GY3ZVTWW", name: "FourShow Sunseeker Blades (36)", kind: "blades", brand: "FourShow", oem: false, fits: ["sunseeker-s4", "sunseeker-x7-gen-2", "sunseeker-x5-awd"], price: 23.99, why: "About half the price per blade of the genuine Sunseeker set." },
  { asin: "B0FMYM5R21", name: "Green Piece Anthbot Blades (30)", kind: "blades", brand: "Green Piece", oem: false, fits: ["anthbot-m9", "anthbot-m5-lidar"], price: 28.88, why: "Stainless blades with the slightly larger mounting hole Anthbot uses." },
  { asin: "B0GY4B3KM5", name: "FourShow eufy Blades (36)", kind: "blades", brand: "FourShow", oem: false, fits: ["eufy-e15-e18"], price: 19.99, why: "A bulk titanium blade pack for eufy E15/E18 owners." },
];

export const KIND_LABEL: Record<AccessoryKind, string> = {
  garage: "Garage",
  blades: "Blades",
  "4g": "4G module",
  wheels: "Traction wheels",
  antenna: "Antenna",
  edge: "Edge kit",
  tracker: "GPS tracker",
  stand: "Cleaning stand",
  other: "Wheel brushes",
};

const KIND_ORDER: AccessoryKind[] = ["garage", "blades", "edge", "4g", "tracker", "wheels", "antenna", "stand", "other"];

/** Accessories for one model: OEM first, then third-party, ordered by usefulness. */
export function accessoriesFor(modelId: string): Accessory[] {
  return ACCESSORIES.filter((a) => a.fits.includes(modelId)).sort(
    (a, b) => Number(b.oem) - Number(a.oem) || KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind)
  );
}

export function universalGarages(): Accessory[] {
  return ACCESSORIES.filter((a) => a.kind === "garage" && a.fits.includes("universal"));
}

export function getAccessory(asin: string): Accessory | undefined {
  return ACCESSORIES.find((a) => a.asin === asin);
}
