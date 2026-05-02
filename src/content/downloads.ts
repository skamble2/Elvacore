import type { Download } from "./types";
import { r2 } from "./r2";

// Once NEXT_PUBLIC_R2_PUBLIC_URL is set, replace the `file` value with
// `r2("path/inside/bucket.pdf")`. Until then, drop a placeholder PDF into
// `public/downloads/` and reference it as `/downloads/<file>.pdf`.
//
// Example using R2 (uncomment once env var is in place):
//   {
//     title: "Product Manual",
//     category: "manual",
//     file: r2("manuals/example-product.pdf"),
//     product: "example-product",
//   },

void r2; // keep the helper imported so it's discoverable

export const downloads: Download[] = [
  // TODO: replace with real downloads.
  {
    title: "Example Brochure",
    category: "brochure",
    file: "/downloads/example-brochure.pdf",
    product: "example-product",
  },
];
