import type { Category } from "./types";

// Two top-level groups (Industrial / Educational), each with leaf categories.
export const categories: Category[] = [
  // Industrial
  { slug: "industrial", title: "Industrial Products", order: 1 },
  { slug: "motion-control", title: "Motion Control", parent: "industrial", order: 1 },
  { slug: "plc", title: "PLC", parent: "industrial", order: 2 },
  { slug: "servo-drive", title: "Servo Drive", parent: "industrial", order: 3 },

  // Educational
  { slug: "educational", title: "Educational Products", order: 2 },
  { slug: "ai-training", title: "AI Training", parent: "educational", order: 1 },
  {
    slug: "educational-intelligent-control",
    title: "Intelligent Control",
    parent: "educational",
    order: 2,
  },
];
