import type { Product } from "./types";

// 10 products across Industrial (motion control / PLC / servo drive) and
// Educational (AI training / intelligent control) categories.
//
// `summary` and `description` are short factual placeholders — replace with
// the business owner's marketing copy when available. Spec arrays are left
// empty so each product page can grow its own real spec table later.
export const products: Product[] = [
  // ---------- Industrial · Motion Control ----------
  {
    slug: "gts-pcie",
    title: "GTS-PCIe Series",
    category: "motion-control",
    summary: "PCIe multi-axis motion controller for industrial automation.",
    description:
      "Placeholder description for the GTS-PCIe Series motion controller. Replace with real copy once available.",
    images: ["/images/products/placeholder.svg"],
    featured: true,
    order: 1,
  },
  {
    slug: "gen-ethercat-card",
    title: "GEN Series EtherCAT Motion Control Card",
    category: "motion-control",
    summary: "Multi-axis EtherCAT motion control card for high-speed networks.",
    images: ["/images/products/placeholder.svg"],
    order: 2,
  },
  {
    slug: "gsn-motion-card",
    title: "GSN Series Motion Control Card",
    category: "motion-control",
    summary: "Motion control card for industrial automation deployments.",
    images: ["/images/products/placeholder.svg"],
    order: 3,
  },

  // ---------- Industrial · PLC ----------
  {
    slug: "ideabox-pro",
    title: "iDEABOX Pro Intelligent Controller",
    category: "plc",
    summary: "Programmable motion control system for flexible automation.",
    images: ["/images/products/placeholder.svg"],
    featured: true,
    order: 1,
  },

  // ---------- Industrial · Servo Drive ----------
  {
    slug: "gshd-servo-drive",
    title: "GSHD Series High-Performance Servo Drive",
    category: "servo-drive",
    summary: "High-performance servo motor drive for precision motion.",
    images: ["/images/products/placeholder.svg"],
    featured: true,
    order: 1,
  },

  // ---------- Educational · AI Training ----------
  {
    slug: "ai-training-box",
    title: "AI Training Box",
    category: "ai-training",
    summary:
      "Artificial intelligence education and development kit for classrooms.",
    images: ["/images/products/placeholder.svg"],
    featured: true,
    order: 1,
  },

  // ---------- Educational · Intelligent Control ----------
  {
    slug: "glip-control-platform",
    title: "GLIP Series Educational Control Platform",
    category: "educational-intelligent-control",
    summary:
      "Modular control experiment platform for engineering education (GLIP2001–2012 variants).",
    images: ["/images/products/placeholder.svg"],
    order: 1,
  },
  {
    slug: "gbb-ball-beam",
    title: "GBB Ball & Beam Control System",
    category: "educational-intelligent-control",
    summary:
      "Classic ball-and-beam control experiment for teaching feedback systems.",
    images: ["/images/products/placeholder.svg"],
    order: 2,
  },
  {
    slug: "gsmt-servo-platform",
    title: "GSMT Series DC Servo Control Platform",
    category: "educational-intelligent-control",
    summary:
      "DC servo control experiment platform (GSMT2004 / 2012 / 2014 variants).",
    images: ["/images/products/placeholder.svg"],
    order: 3,
  },
  {
    slug: "mls-magnetic-levitation",
    title: "Magnetic Levitation System (MLS)",
    category: "educational-intelligent-control",
    summary:
      "Magnetic-levitation experiment platform for control-theory training.",
    images: ["/images/products/placeholder.svg"],
    order: 4,
  },
];
