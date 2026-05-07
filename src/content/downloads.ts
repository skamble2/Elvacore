import type { Download } from "./types";
import { r2 } from "./r2";

export const downloads: Download[] = [
  {
    title: "Sample certificate (R2 connectivity test)",
    category: "brochure",
    file: r2("Elvacore_Product_Brochure_v1.pdf"),
    product: "gts-pcie",
    description: "Full product catalog covering all 8 products across 5 categories.",
  },
];
