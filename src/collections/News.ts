import type { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  admin: { useAsTitle: "title", defaultColumns: ["title", "date", "updatedAt"] },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "date", type: "date", required: true },
    { name: "excerpt", type: "textarea" },
    { name: "featuredImage", type: "upload", relationTo: "media" },
    { name: "body", type: "richText" },
  ],
};
