import type { CollectionConfig } from "payload";

export const ProductCategories: CollectionConfig = {
  slug: "product-categories",
  admin: { useAsTitle: "title", defaultColumns: ["title", "slug", "parent"] },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "parent", type: "relationship", relationTo: "product-categories" },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
