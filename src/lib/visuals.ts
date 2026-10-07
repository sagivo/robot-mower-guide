/**
 * Charts and diagrams rendered to HTML strings at build time, so they work both
 * in Astro pages (via <Visual />) and inside markdown (via `[[chart:slope]]`
 * placeholders, see rehype-visuals.ts). Hover/focus tooltips come from the
 * global [data-tip] handler in BaseLayout.
 *
 * Palette (validated for CVD separation and 3:1 contrast on #fff):
 *   AWD / tracks = #2f9e44, 2WD = #2a78d6. Text always uses ink tokens.
 */
import { MODELS, ACRE, gradeToDegrees, formatMoney, type MowerModel } from "../data/models";
import { garagesTable, bladesTable } from "./accessory-tables";

const AWD = "#2f9e44";
const TWO = "#2a78d6";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function figure(title: string, sub: string, body: string, note?: string) {
  return `<figure class="viz">
  <figcaption class="viz-head"><strong>${esc(title)}</strong><span>${esc(sub)}</span></figcaption>
  ${body}
  ${note ? `<p class="viz-note">${note}</p>` : ""}
</figure>`;
}

/** Horizontal bar chart of rated slope, AWD vs 2WD. */
export function slopeChart(models: MowerModel[] = MODELS): string {
  const rows = [...models].sort((a, b) => b.maxSlopePct - a.maxSlopePct || a.shortName.localeCompare(b.shortName));
  const max = 100;
  const ticks = [0, 20, 40, 60, 80, 100];
  const legend = `<div class="viz-legend" aria-hidden="true">
    <span><i style="background:${AWD}"></i>AWD / tracks</span>
    <span><i style="background:${TWO}"></i>2-wheel drive</span>
  </div>`;
  const bars = rows
    .map((m) => {
      const awd = m.drive !== "2WD";
      const deg = gradeToDegrees(m.maxSlopePct).toFixed(0);
      const driveLabel = m.drive === "Tracks" ? "tracks" : m.drive;
      return `<a class="hbar" href="/mowers/${m.id}/" data-tip-value="${m.maxSlopePct}% grade (~${deg}°)" data-tip-label="${esc(m.shortName)} · ${driveLabel}">
      <span class="hbar-label">${esc(m.shortName)}</span>
      <span class="hbar-track"><span class="hbar-fill" style="width:${(m.maxSlopePct / max) * 100}%;background:${awd ? AWD : TWO}"></span></span>
      <span class="hbar-val">${m.maxSlopePct}%</span>
    </a>`;
    })
    .join("");
  const axis = `<div class="hbar-axis" aria-hidden="true"><span></span><span class="hbar-ticks">${ticks
    .map((t) => `<i style="left:${t}%">${t}%</i>`)
    .join("")}</span><span></span></div>`;
  return figure(
    "Rated maximum slope by model",
    "Percent grade, manufacturer ratings on dry grass. 45% ≈ 24°, 80% ≈ 39°.",
    `${legend}<div class="hbar-chart" role="list">${bars}</div>${axis}`,
    `Wet grass and side-slopes cut real-world ability, so leave a 10–15% margin. Check your hill with the <a href="/tools/slope-checker/">slope checker</a>.`
  );
}

/** Scatter: rated coverage (acres) vs starting price. Single series. */
export function valueChart(models: MowerModel[] = MODELS): string {
  const xMax = 2.5;
  const yMax = 5000;
  // Selective direct labels: the value frontier and the extremes only.
  // Placement chosen per label so none collides with a neighboring dot.
  const labels: Record<string, "right" | "left" | "above" | "below"> = {
    "segway-navimow-i105n-i110n": "right",
    "segway-navimow-x4": "above",
    "segway-navimow-x3": "below",
    "husqvarna-automower-435-iq-awd": "below",
    "dreame-a3-awd-pro": "right",
    "hookii-neomow-x2": "right",
    "yarbo-y40-lawn-mower-pro": "left",
  };
  const dots = models
    .map((m) => {
      const ac = Math.min(m.maxSqFt / ACRE, xMax);
      const x = (ac / xMax) * 100;
      const y = (m.priceLow / yMax) * 100;
      const offScale = m.maxSqFt / ACRE > xMax;
      const name = offScale ? `${m.shortName} (${+(m.maxSqFt / ACRE).toFixed(1)} ac) →` : m.shortName;
      const label = labels[m.id] ? `<span class="sc-lbl ${labels[m.id]}">${esc(name)}</span>` : "";
      return `<a class="sc-dot" href="/mowers/${m.id}/" style="left:${x}%;bottom:${y}%" data-tip-value="${formatMoney(m.priceLow)} · ${(m.maxSqFt / ACRE).toFixed(2)} ac" data-tip-label="${esc(m.shortName)}" aria-label="${esc(m.shortName)}: from ${formatMoney(m.priceLow)}, up to ${(m.maxSqFt / ACRE).toFixed(2)} acres"><i></i>${label}</a>`;
    })
    .join("");
  const yTicks = [0, 1000, 2000, 3000, 4000, 5000];
  const xTicks = [0, 0.5, 1, 1.5, 2, 2.5];
  const grid =
    yTicks.map((t) => `<span class="sc-gy" style="bottom:${(t / yMax) * 100}%"><em>${t ? "$" + t / 1000 + "k" : "$0"}</em></span>`).join("") +
    xTicks.map((t) => `<span class="sc-gx" style="left:${(t / xMax) * 100}%"><em>${t}</em></span>`).join("");
  return figure(
    "Starting price vs. rated coverage",
    "Each dot is one model (largest tier's area, cheapest tier's price). Lower and further right is better value. Models over 2.5 acres sit on the right edge.",
    `<div class="sc-wrap"><div class="sc-plot">${grid}${dots}</div><div class="sc-xlab">Rated coverage (acres)</div></div>`,
    `Hover or tap a dot for details. Full numbers are in the <a href="/mowers/">comparison chart</a>.`
  );
}

/** Lawn-size visualizer: squares scaled by area. */
export function lawnSizes(): string {
  const items: [string, number, string][] = [
    ["Tennis court", 2808, "~2,800 sq ft"],
    ["⅛ acre", ACRE / 8, "5,445 sq ft"],
    ["¼ acre", ACRE / 4, "10,890 sq ft"],
    ["½ acre", ACRE / 2, "21,780 sq ft"],
    ["1 acre", ACRE, "43,560 sq ft"],
  ];
  const maxSide = Math.sqrt(ACRE);
  const boxes = items
    .map(([name, sqft, sub], i) => {
      const side = (Math.sqrt(sqft) / maxSide) * 100;
      return `<div class="ls-item"><div class="ls-box${i === 0 ? " ref" : ""}" style="width:${side}%"></div><strong>${name}</strong><span>${sub}</span></div>`;
    })
    .join("");
  return figure(
    "How big is your lawn, really?",
    "Squares drawn to scale. Most US suburban lots have ⅛–½ acre of actual grass.",
    `<div class="ls-row">${boxes}</div>`,
    `Measure your mowable area (not the whole lot) with a free satellite tool, then add 15–20% headroom. The <a href="/tools/size-matcher/">size matcher</a> does the math.`
  );
}

/** Slope geometry: rise over run, percent vs degrees. */
export function slopeDiagram(): string {
  const fan = [15, 30, 45, 60, 80, 100]
    .map((p) => {
      const a = Math.atan(p / 100);
      const len = 230;
      const x = 40 + Math.cos(a) * len;
      const y = 250 - Math.sin(a) * len;
      const strong = p === 45 || p === 80;
      return `<line x1="40" y1="250" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${strong ? AWD : "#9fb5a4"}" stroke-width="${strong ? 3 : 2}" stroke-linecap="round"/>
      <text x="${(x + 8).toFixed(1)}" y="${(y + 5).toFixed(1)}" font-size="15" fill="#2c3d30" font-weight="${strong ? 700 : 500}">${p}% · ${gradeToDegrees(p).toFixed(0)}°</text>`;
    })
    .join("");
  const svgTri = `<svg viewBox="0 0 360 280" role="img" aria-label="A slope that rises 3 feet over a 10-foot run is a 30 percent grade, about 17 degrees">
    <polygon points="30,240 330,240 330,150" fill="#eefbce" stroke="#2f9e44" stroke-width="3" stroke-linejoin="round"/>
    <text x="180" y="268" text-anchor="middle" font-size="17" fill="#152419" font-weight="700">Run: 10 ft</text>
    <text x="340" y="200" font-size="17" fill="#152419" font-weight="700" transform="rotate(-90 340 200)" text-anchor="middle" dy="14">Rise: 3 ft</text>
    <text x="150" y="182" font-size="18" fill="#1e6b32" font-weight="800" transform="rotate(-16.7 150 182)">30% grade ≈ 17°</text>
    <path d="M90,240 A60,60 0 0,0 87.5,222.8" fill="none" stroke="#152419" stroke-width="2"/>
  </svg>`;
  const svgFan = `<svg viewBox="0 0 380 280" role="img" aria-label="Common slope ratings: 15 percent is 9 degrees, 30 percent is 17, 45 percent is 24, 60 percent is 31, 80 percent is 39, and 100 percent is 45 degrees">
    <line x1="40" y1="250" x2="300" y2="250" stroke="#c3c2b7" stroke-width="1"/>
    ${fan}
  </svg>`;
  return figure(
    "Percent grade vs. degrees",
    "Mower specs use percent grade (rise ÷ run × 100). It sounds steeper than degrees: 100% is only 45°.",
    `<div class="dg-grid two"><div>${svgTri}<p>How to measure: lay a 10-ft board on the slope, level it, and measure the gap at the low end.</p></div><div>${svgFan}<p>Common ratings. Highlighted: 45% (typical 2WD ceiling) and 80% (AWD flagships).</p></div></div>`
  );
}

/** Three navigation technologies, side by side. */
export function navigationDiagram(): string {
  const rtk = `<svg viewBox="0 0 240 180" role="img" aria-label="RTK: satellites plus a correction signal from a base station or network locate the mower to within about an inch">
    <g fill="#2a78d6"><rect x="30" y="18" width="22" height="12" rx="2"/><rect x="18" y="21" width="10" height="6"/><rect x="54" y="21" width="10" height="6"/>
    <rect x="170" y="10" width="22" height="12" rx="2"/><rect x="158" y="13" width="10" height="6"/><rect x="194" y="13" width="10" height="6"/></g>
    <g stroke="#2a78d6" stroke-width="2" stroke-dasharray="5 5"><line x1="41" y1="34" x2="110" y2="128"/><line x1="181" y1="26" x2="122" y2="128"/></g>
    <rect x="18" y="104" width="8" height="46" fill="#5c6f60"/><circle cx="22" cy="100" r="7" fill="#2a78d6"/>
    <path d="M30 96a14 14 0 0 1 0 10M36 91a22 22 0 0 1 0 20" stroke="#2a78d6" stroke-width="2" fill="none"/>
    <g stroke="#2a78d6" stroke-width="2" stroke-dasharray="3 4"><line x1="30" y1="104" x2="98" y2="138"/></g>
    <rect x="88" y="130" width="60" height="22" rx="11" fill="#2f9e44"/><circle cx="100" cy="155" r="7" fill="#152419"/><circle cx="136" cy="155" r="7" fill="#152419"/>
    <rect x="114" y="122" width="4" height="10" fill="#152419"/><circle cx="116" cy="120" r="4" fill="#2a78d6"/>
    <rect x="0" y="162" width="240" height="18" fill="#cfe8c4"/>
  </svg>`;
  const lidar = `<svg viewBox="0 0 240 180" role="img" aria-label="LiDAR: a spinning laser measures distances to trees, fences and walls to build a 3D map, with no satellites needed">
    <circle cx="200" cy="70" r="30" fill="#2f9e44" opacity=".85"/><rect x="195" y="95" width="10" height="67" fill="#6b4f2a"/>
    <rect x="14" y="96" width="6" height="66" fill="#8a7a66"/><rect x="34" y="96" width="6" height="66" fill="#8a7a66"/><rect x="8" y="108" width="40" height="5" fill="#8a7a66"/><rect x="8" y="128" width="40" height="5" fill="#8a7a66"/>
    <g stroke="#eda100" stroke-width="2"><line x1="120" y1="122" x2="180" y2="78"/><line x1="120" y1="122" x2="196" y2="110"/><line x1="120" y1="122" x2="44" y2="112"/><line x1="120" y1="122" x2="44" y2="138"/><line x1="120" y1="122" x2="150" y2="40"/></g>
    <rect x="90" y="130" width="60" height="22" rx="11" fill="#2f9e44"/><circle cx="102" cy="155" r="7" fill="#152419"/><circle cx="138" cy="155" r="7" fill="#152419"/>
    <rect x="110" y="118" width="20" height="12" rx="6" fill="#152419"/><circle cx="120" cy="122" r="3" fill="#eda100"/>
    <rect x="0" y="162" width="240" height="18" fill="#cfe8c4"/>
  </svg>`;
  const vision = `<svg viewBox="0 0 240 180" role="img" aria-label="Vision: cameras and AI recognise grass edges, paths and obstacles, like a human driver">
    <path d="M150 140 L236 100 L236 168 Z" fill="#2a78d6" opacity=".14"/>
    <rect x="190" y="150" width="50" height="12" fill="#b9b1a3"/>
    <circle cx="214" cy="132" r="9" fill="#e87ba4"/><rect x="209" y="139" width="10" height="11" fill="#e87ba4"/>
    <rect x="80" y="130" width="64" height="22" rx="11" fill="#2f9e44"/><circle cx="92" cy="155" r="7" fill="#152419"/><circle cx="132" cy="155" r="7" fill="#152419"/>
    <rect x="138" y="132" width="10" height="10" rx="3" fill="#152419"/><circle cx="145" cy="137" r="2.5" fill="#2a78d6"/>
    <rect x="0" y="162" width="190" height="18" fill="#cfe8c4"/><rect x="190" y="162" width="50" height="18" fill="#b9b1a3"/>
  </svg>`;
  const panel = (svg: string, name: string, how: string, good: string, bad: string) =>
    `<div class="dg-panel">${svg}<h4>${name}</h4><p>${how}</p><p class="dg-pro">✓ ${good}</p><p class="dg-con">✕ ${bad}</p></div>`;
  return figure(
    "How wire-free robot mowers find their way",
    "Most 2026 models combine two or three of these.",
    `<div class="dg-grid three">
      ${panel(rtk, "RTK-GPS", "Satellites plus a correction signal (from a base station or a cellular network) pin the mower down to about an inch.", "Open lawns, big areas, precise stripes", "Loses its fix under dense trees and next to tall walls")}
      ${panel(lidar, "LiDAR", "A spinning laser measures the distance to trees, fences and walls to build a 3D map.", "Under trees, near buildings, at night", "Large open fields with few landmarks")}
      ${panel(vision, "AI vision", "Cameras recognise grass edges, paths, pets and toys, the way you would.", "Obstacle avoidance, easy setup", "Low light, and lawns with fuzzy edges")}
    </div>`,
    `Deep dive: <a href="/posts/robot-mower-navigation-explained/">RTK vs LiDAR vs camera navigation</a>.`
  );
}

/** Top-down yard plan: dock, zones, corridor, no-go areas. */
export function yardMapDiagram(): string {
  const svg = `<svg viewBox="0 0 720 360" role="img" aria-label="Example yard map with a front zone and back zone joined by a corridor, a dock with clear sky view, and no-go zones around a flower bed and play area">
    <rect x="0" y="0" width="720" height="360" fill="#f6faf3"/>
    <rect x="250" y="20" width="220" height="130" rx="6" fill="#d8d3c8"/><text x="360" y="92" text-anchor="middle" font-size="20" fill="#52514e" font-weight="700">House</text>
    <rect x="30" y="180" width="660" height="160" rx="14" fill="#cfe8c4" stroke="#2f9e44" stroke-width="3" stroke-dasharray="10 6"/>
    <text x="60" y="212" font-size="18" fill="#1e6b32" font-weight="800">Back lawn (Zone 1)</text>
    <rect x="30" y="20" width="200" height="130" rx="14" fill="#cfe8c4" stroke="#2f9e44" stroke-width="3" stroke-dasharray="10 6"/>
    <text x="48" y="50" font-size="18" fill="#1e6b32" font-weight="800">Front (Zone 2)</text>
    <rect x="100" y="150" width="56" height="30" fill="#e6f2df" stroke="#2f9e44" stroke-width="3" stroke-dasharray="4 4"/>
    <text x="166" y="171" font-size="15" fill="#1e6b32" font-weight="700">Corridor ≥ 3 ft</text>
    <ellipse cx="520" cy="270" rx="70" ry="38" fill="#f3c6d6" stroke="#d03b3b" stroke-width="3"/>
    <text x="520" y="276" text-anchor="middle" font-size="15" fill="#152419" font-weight="700">No-go: flower bed</text>
    <rect x="300" y="230" width="110" height="80" rx="8" fill="#fde7b0" stroke="#d03b3b" stroke-width="3"/>
    <text x="355" y="275" text-anchor="middle" font-size="15" fill="#152419" font-weight="700">No-go: play set</text>
    <rect x="610" y="190" width="56" height="34" rx="6" fill="#152419"/><text x="638" y="212" text-anchor="middle" font-size="13" fill="#b8e62e" font-weight="800">DOCK</text>
    <path d="M600 186 a26 26 0 0 1 76 0" stroke="#2a78d6" stroke-width="3" fill="none"/>
    <text x="580" y="166" font-size="14" fill="#2a78d6" font-weight="700">Open sky + signal</text>
    <circle cx="140" cy="290" r="26" fill="#2f9e44"/><circle cx="196" cy="300" r="20" fill="#2f9e44"/>
    <text x="168" y="250" text-anchor="middle" font-size="14" fill="#1e6b32" font-weight="700">Trees: LiDAR helps</text>
  </svg>`;
  return figure(
    "What a good robot mower map looks like",
    "Separate zones joined by a corridor, no-go areas drawn around obstacles, and a dock with a clear view of the sky.",
    `<div class="dg-wide">${svg}</div>`,
    `Step by step: <a href="/posts/robot-mower-setup-guide/">robot mower setup guide</a>.`
  );
}

export const VISUALS: Record<string, () => string> = {
  "chart:slope": () => slopeChart(),
  "chart:value": () => valueChart(),
  "diagram:lawn-sizes": lawnSizes,
  "diagram:slope": slopeDiagram,
  "diagram:navigation": navigationDiagram,
  "diagram:yard-map": yardMapDiagram,
  "accessories:garages": garagesTable,
  "accessories:blades": bladesTable,
};
