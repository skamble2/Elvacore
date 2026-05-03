import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  header: {
    items: [
      { label: "Home", href: "/" },
      {
        label: "About Us",
        children: [
          { label: "Company Profile", href: "/about" },
          { label: "History", href: "/history" },
          { label: "Corporate Vision", href: "/vision" },
        ],
      },
      {
        label: "Products",
        href: "/products",
        children: [
          { label: "Intelligent Control", href: "/products?category=intelligent-control" },
          { label: "Motion Control", href: "/products?category=motion-control" },
        ],
      },
      {
        label: "Solutions",
        href: "/solutions",
        children: [
          { label: "Smart City", href: "/solutions?type=smart-city" },
          { label: "Smart Industry", href: "/solutions?type=smart-industry" },
          { label: "Education & Training", href: "/solutions?type=education-training" },
        ],
      },
      {
        label: "Support",
        children: [
          { label: "Downloads", href: "/downloads" },
          { label: "Technical Support", href: "/technical-support" },
        ],
      },
      { label: "News", href: "/news" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  footer: {
    tagline: "Elvacore Technologies",
    address: "Street, City, State, PIN, India",
    phone: "+91 00000 00000",
    email: "info@elvacore.com",
    socialLinks: [
      { platform: "linkedin", url: "https://www.linkedin.com/company/elvacore" },
    ],
    columns: [
      {
        heading: "Products",
        links: [{ label: "All Products", href: "/products" }],
      },
      {
        heading: "Support",
        links: [
          { label: "Downloads", href: "/downloads" },
          { label: "Technical Support", href: "/technical-support" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  home: {
    heroTitle: "Elvacore Technologies",
    heroSubtitle: "Tagline / one-sentence positioning statement.",
    heroImage: "/images/hero.jpg",
    heroCtaLabel: "Explore products",
    heroCtaHref: "/products",
    featuredProducts: [
      "motion-controller-pro",
      "servo-drive-x1",
      "fieldbus-module-fb20",
      "programmable-controller-pc100",
    ],
    aboutHeading: "About Elvacore",
    aboutBody: "Short markdown intro shown on the homepage.",
  },
};
