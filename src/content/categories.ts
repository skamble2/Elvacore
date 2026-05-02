import type { Category } from "./types";

export const categories: Category[] = [
  // TODO: replace with real categories. Structure mirrors the Googoltech tree.
  { slug: "intelligent-control", title: "Intelligent Control", order: 1 },
  {
    slug: "motion-control",
    title: "Motion Control",
    parent: "intelligent-control",
  },
];
