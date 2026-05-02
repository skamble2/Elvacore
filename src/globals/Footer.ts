import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: { read: () => true },
  fields: [
    { name: "tagline", type: "textarea" },
    { name: "address", type: "textarea" },
    { name: "phone", type: "text" },
    { name: "email", type: "email" },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: ["facebook", "twitter", "linkedin", "youtube", "instagram"],
        },
        { name: "url", type: "text", required: true },
      ],
    },
    {
      name: "columns",
      type: "array",
      fields: [
        { name: "heading", type: "text", required: true },
        {
          name: "links",
          type: "array",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
      ],
    },
  ],
};
