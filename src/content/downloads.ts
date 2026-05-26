import type { Download } from "./types";
import { r2 } from "./r2";

// Downloads are served from Cloudflare R2 — see r2() helper.
// Each product's primary datasheet is set on the Product itself (so the
// "Download datasheet" button on the product page works). Use this list for
// SECONDARY downloads (training docs, brochures, software) that should appear
// on the Downloads listing and on the product page's Downloads section.
export const downloads: Download[] = [
  {
    title: "Elvacore Product Brochure",
    category: "brochure",
    file: r2("Elvacore_Product_Brochure_v1.pdf"),
    description:
      "Full product catalog covering all 8 products across 5 categories.",
  },
  {
    title: "GTS-PCIe Series Training Document",
    category: "manual",
    file: r2("datasheets/GTS-PCIe-TrainingDoc.pdf"),
    product: "gts-pcie",
    description:
      "Programming and integration training guide for the GTS-PCIe Series motion controller.",
  },
];
