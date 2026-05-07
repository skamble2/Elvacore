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
          { label: "Motion Control", href: "/products?category=motion-control" },
          { label: "PLC", href: "/products?category=plc" },
          { label: "Servo Drive", href: "/products?category=servo-drive" },
          { label: "AI Training", href: "/products?category=ai-training" },
          {
            label: "Intelligent Control",
            href: "/products?category=educational-intelligent-control",
          },
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
      { label: "Contact Us", href: "/contact" },
    ],
  },
  footer: {
    tagline:
      "Precision Motion Control & Industrial Automation Solutions. Authorised Indian Distributor of Googol Technology (HK) Limited.",
    address:
      "Shop No. 2, Orange County Phase-II, Pashan-Sus Road, Pune - 411021, Maharashtra, India",
    phone: "+91 99606 64674",
    email: "elvacoretechnologies@gmail.com",
    socialLinks: [],
    columns: [
      {
        heading: "Products",
        links: [
          { label: "All Products", href: "/products" },
          { label: "Motion Control", href: "/products?category=motion-control" },
          { label: "PLC", href: "/products?category=plc" },
          { label: "Servo Drive", href: "/products?category=servo-drive" },
        ],
      },
      {
        heading: "Educational",
        links: [
          { label: "AI Training", href: "/products?category=ai-training" },
          {
            label: "Intelligent Control",
            href: "/products?category=educational-intelligent-control",
          },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Solutions", href: "/solutions" },
          { label: "Downloads", href: "/downloads" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  home: {
    heroTitle: "Precision Motion Control & Industrial Automation",
    heroSubtitle:
      "Authorised Indian distributor of Googol Technology (HK) Limited — bringing 25+ years of motion-control expertise to industrial machine builders and engineering institutions across India.",
    heroImage: "/images/hero.jpg",
    heroCtaLabel: "Explore products",
    heroCtaHref: "/products",
    featuredProducts: [
      "gts-pcie",
      "ideabox-pro",
      "gshd-servo-drive",
      "ai-training-box",
    ],
    aboutHeading: "Your partner for precision motion control",
    aboutBody:
      "Elvacore Technologies LLP is a Pune-based technology company specialising in the supply, distribution, and application support of advanced motion control and industrial automation products. We serve machine builders, system integrators, academic institutions, and R&D laboratories across India — covering motion control, servo drives, PLCs, AI training, and intelligent control platforms.",
  },
};
