import type { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  access: { read: () => true },
  fields: [
    { name: "heroTitle", type: "text" },
    { name: "heroSubtitle", type: "textarea" },
    { name: "heroImage", type: "upload", relationTo: "media" },
    { name: "heroCtaLabel", type: "text" },
    { name: "heroCtaHref", type: "text" },
    {
      name: "featuredProducts",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    { name: "aboutHeading", type: "text" },
    { name: "aboutBody", type: "richText" },
  ],
};
