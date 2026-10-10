# Content authoring checklist

Use this for new guides and substantive revisions. Do not rewrite a date solely because a build or deployment ran.

## Answer first

Start with the reader's answer in two to four sentences. Explain who it fits, the main limit, and the next step. Do not hide the answer behind a long introduction. Keep top-level takeaways to three useful points.

## One question per section

Give each editorial H2 one reader question, then answer it in the first paragraph. For example: "Which hoop size fits this project?" or "Can this mower handle my slope?" Keep headings descriptive and distinct. Template sections such as Sources and Spec comparison can retain their existing labels.

## Real specification and price tables

Use the existing machine/model data for comparison tables. Verify changed numbers against the manufacturer page or manual, and record source links and check dates. Distinguish maximum ratings from normal performance. Mark unknown values as unknown, not zero.

Prices need currency, seller, checked date, and whether tax/shipping are included. Do not copy an old price and call it current. Use ranges or "check current price" when a reliable current price is unavailable. Do not invent hands-on tests, measured performance, owners' ratings, or exact color/thread matches.

## FAQ and dates

Store real question-and-answer pairs in frontmatter `faq` using `q` and `a`. The guide template renders these visibly and emits matching FAQPage JSON-LD automatically. Do not add a second FAQ script or mark up answers readers cannot see. FAQ markup is descriptive, not a promise of a search rich result.

Use the collection's real publication/update fields. Change the update date only after reviewing or materially changing the article; note what changed in the commit. Visible dates and structured dates must agree.

## Sources and internal links

Link each material specification or claim to a reliable original source. Include contextual links to related guides and a relevant calculator when useful. Shopping links follow the site's disclosure and affiliate rel/tag rules. Emails, if separately authorized, link to the site's own pages, not direct affiliate destinations.

## Outline

- Title: the specific decision or problem
- Direct answer: two to four sentences
- At most three takeaways
- H2: one reader question
  - Direct answer
  - Evidence, limits and next step
- H2: next distinct reader question
- Source-backed specification/price table when it helps the decision
- FAQ frontmatter: questions readers actually need answered
- Source/method notes and related reading

Before publishing, check mobile layout, table overflow, source URLs, date consistency, FAQ schema matching visible content, affiliate links and sitemap inclusion. llms.txt is generated from published collections; it is a navigation aid, not a ranking guarantee.

## Collection fields for this site

`pubDate` and optional `updatedDate`. Use `takeaways`, `picks` with existing model IDs, and `faq`. Include source links in the article body; reviews require their own `updatedDate`.
