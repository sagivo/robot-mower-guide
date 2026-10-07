import { visit } from "unist-util-visit";
import { MODELS } from "../data/models";
import { AFFILIATE_REL, amazonLink, tagAmazonUrl } from "./amazon";

/**
 * Markdown link rewriting:
 *  - `[text](amazon:<model-id>)` → the model's Amazon link (tagged). Unknown ids fail the build.
 *  - raw amazon.com links → tagged.
 *  - all affiliate links get rel="sponsored nofollow noopener" and open in a new tab.
 *  - other external links get rel="noopener" and open in a new tab.
 */
export default function rehypeAffiliate() {
  const byId = new Map(MODELS.map((m) => [m.id, m]));
  return (tree: any, file: any) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName !== "a" || typeof node.properties?.href !== "string") return;
      const href: string = node.properties.href;

      if (href.startsWith("amazon:")) {
        const id = href.slice("amazon:".length);
        const model = byId.get(id);
        if (!model) {
          throw new Error(`Unknown model id "${id}" in amazon: link (${file?.path ?? "markdown"})`);
        }
        node.properties.href = amazonLink(model.query, model.asin);
        markAffiliate(node);
      } else if (/^https?:\/\/(www\.)?amazon\.com\//.test(href)) {
        node.properties.href = tagAmazonUrl(href);
        markAffiliate(node);
      } else if (/^https?:\/\//.test(href)) {
        node.properties.rel = "noopener";
        node.properties.target = "_blank";
      }
    });
  };
}

function markAffiliate(node: any) {
  node.properties.rel = AFFILIATE_REL;
  node.properties.target = "_blank";
  node.properties.className = [...(node.properties.className ?? []), "aff"];
}
