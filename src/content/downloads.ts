import type { Download } from "./types";
import { r2 } from "./r2";

// Per-product downloads (manuals, training docs, software). Each entry's
// `product` field must match a Product slug, entries are then surfaced on
// that product's detail page under "Downloads".
//
// The primary datasheet for each product lives directly on the Product
// (so the prominent "Download datasheet" button works). Add entries here for
// SECONDARY downloads only.
export const downloads: Download[] = [
  {
    title: "GTS-PCIe Series Training Document",
    category: "manual",
    file: r2("datasheets/GTS-PCIe-TrainingDoc.pdf"),
    product: "gts-pcie",
    description:
      "Programming and integration training guide for the GTS-PCIe Series motion controller.",
  },
];
