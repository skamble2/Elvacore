import type { CollectionConfig } from "payload";

export const Offices: CollectionConfig = {
  slug: "offices",
  admin: { useAsTitle: "name", defaultColumns: ["name", "type", "country"] },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "office",
      options: [
        { label: "Office", value: "office" },
        { label: "Distributor", value: "distributor" },
      ],
    },
    { name: "country", type: "text", required: true },
    { name: "region", type: "text" },
    { name: "address", type: "textarea" },
    { name: "phone", type: "text" },
    { name: "email", type: "email" },
    { name: "mapUrl", type: "text" },
  ],
};
