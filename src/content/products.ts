import type { Product } from "./types";

export const products: Product[] = [
  // TODO: replace with the 7-8 real products.
  {
    slug: "example-product",
    title: "Example Product",
    category: "motion-control",
    summary: "One-line product summary shown on cards and listings.",
    description:
      "Longer product description. Plain markdown is fine here — newlines, **bold**, lists, etc.",
    specifications: [
      { label: "Channels", value: "4" },
      { label: "Voltage", value: "24V DC" },
    ],
    images: ["/images/products/example-product/01.jpg"],
    featured: true,
    order: 1,
  },
];
