import type { CollectionConfig } from "payload";

export const Downloads: CollectionConfig = {
  slug: "downloads",
  admin: { useAsTitle: "title", defaultColumns: ["title", "category", "product"] },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Brochure", value: "brochure" },
        { label: "Manual", value: "manual" },
        { label: "Datasheet", value: "datasheet" },
        { label: "Software", value: "software" },
      ],
    },
    { name: "file", type: "upload", relationTo: "media", required: true },
    { name: "product", type: "relationship", relationTo: "products" },
    { name: "description", type: "textarea" },
  ],
};
