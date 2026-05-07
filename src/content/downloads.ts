import type { Download } from "./types";
import { r2 } from "./r2";

export const downloads: Download[] = [
  {
    title: "Sample certificate (R2 connectivity test)",
    category: "brochure",
    file: r2("Generative_AI_with_LLMs_certificate.png"),
    product: "gts-pcie",
    description: "Temporary entry to verify R2 public-bucket downloads work end-to-end.",
  },
];
