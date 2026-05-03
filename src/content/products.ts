import type { Product } from "./types";

// Placeholder data — replace `title`, `summary`, `description`, `specifications`,
// and `images` once the real product info comes from the business owner.
export const products: Product[] = [
  {
    slug: "motion-controller-pro",
    title: "Motion Controller Pro",
    category: "motion-control",
    summary:
      "Multi-axis motion controller for high-precision industrial automation.",
    description:
      "Long product description placeholder. Replace with real copy once available.",
    specifications: [
      { label: "Axes", value: "Up to 8" },
      { label: "Voltage", value: "24V DC" },
    ],
    images: ["/images/products/placeholder.svg"],
    featured: true,
    order: 1,
  },
  {
    slug: "servo-drive-x1",
    title: "Servo Drive X1",
    category: "intelligent-control",
    summary:
      "Compact servo drive with integrated diagnostics and EtherCAT support.",
    images: ["/images/products/placeholder.svg"],
    featured: true,
    order: 2,
  },
  {
    slug: "fieldbus-module-fb20",
    title: "Fieldbus Module FB20",
    category: "intelligent-control",
    summary:
      "Modular fieldbus expansion for distributed control architectures.",
    images: ["/images/products/placeholder.svg"],
    featured: true,
    order: 3,
  },
  {
    slug: "programmable-controller-pc100",
    title: "Programmable Controller PC100",
    category: "intelligent-control",
    summary:
      "Industrial-grade PLC with real-time performance and tooling.",
    images: ["/images/products/placeholder.svg"],
    featured: true,
    order: 4,
  },
  {
    slug: "compact-io-block",
    title: "Compact I/O Block",
    category: "motion-control",
    summary:
      "Mixed digital/analog I/O block for edge sensing and actuation.",
    images: ["/images/products/placeholder.svg"],
    order: 5,
  },
  {
    slug: "training-kit-edu1",
    title: "Engineering Training Kit EDU1",
    category: "intelligent-control",
    summary:
      "Hands-on kit for university and vocational training programmes.",
    images: ["/images/products/placeholder.svg"],
    order: 6,
  },
];
