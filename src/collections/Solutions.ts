import type { CollectionConfig } from "payload";

export const Solutions: CollectionConfig = {
  slug: "solutions",
  admin: { useAsTitle: "title", defaultColumns: ["title", "type", "updatedAt"] },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Smart City", value: "smart-city" },
        { label: "Smart Industry", value: "smart-industry" },
        { label: "Education & Training", value: "education-training" },
      ],
    },
    { name: "summary", type: "textarea" },
    { name: "body", type: "richText" },
    { name: "heroImage", type: "upload", relationTo: "media" },
    {
      name: "relatedProducts",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
  ],
};
