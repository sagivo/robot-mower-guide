import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
export const prerender = true;
export const GET: APIRoute = async () => {
  const origin = 'https://robotlawnmowerguide.com';
  const posts = (await getCollection('posts')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const reviews = await getCollection('reviews');
  const clean = (text: string) => text.replace(/[\r\n]+/g, ' ').replace(/[\[\]]/g, '');
  const text = [
    '# Robot Lawn Mower Guide', '',
    '> Research-based robot lawn mower comparisons, buying guides and free lawn-planning calculators.', '',
    'Recommendations use published specifications and linked sources, not hands-on testing. Editorial scores are not customer ratings. Prices are approximate and may change; check sellers before buying. Affiliate links may earn commission.', '',
    '## Start here', '',
    `- [Guides](${origin}/guides/): Buying advice and comparisons.`,
    `- [How we research](${origin}/how-we-research/): Research method and limitations.`,
    `- [About](${origin}/about/): Editorial team and site purpose.`,
    `- [Mower comparison](${origin}/mowers/): Sortable manufacturer-spec chart.`, '',
    '## Articles', '',
    ...posts.map((p) => `- [${clean(p.data.title)}](${origin}/posts/${p.id}/): ${clean(p.data.description)}`), '',
    '## Mower research', '',
    ...reviews.sort((a,b) => a.id.localeCompare(b.id)).map((r) => `- [${clean(r.id.replace(/-/g, ' '))}](${origin}/mowers/${r.id}/): Specifications, research notes and alternatives.`), '',
    '## Tools', '',
    `- [Mower size matcher](${origin}/tools/size-matcher/): Match models to lawn size.`,
    `- [Cost calculator](${origin}/tools/cost-calculator/): Estimate robot mower versus lawn-service costs.`,
    `- [Slope checker](${origin}/tools/slope-checker/): Compare lawn slope with published mower limits.`, '',
    '## Sitemap', '', `- [XML sitemap](${origin}/sitemap-index.xml)`, '',
  ].join('\n');
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
