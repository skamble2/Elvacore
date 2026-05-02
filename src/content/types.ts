export type Category = {
  slug: string;
  title: string;
  parent?: string;
  order?: number;
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  summary?: string;
  description?: string;
  specifications?: { label: string; value: string }[];
  images: string[];
  datasheet?: string;
  featured?: boolean;
  order?: number;
};

export type Solution = {
  slug: string;
  title: string;
  type: "smart-city" | "smart-industry" | "education-training";
  summary?: string;
  body?: string;
  heroImage?: string;
  relatedProducts?: string[];
};

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  featuredImage?: string;
  body?: string;
};

export type Download = {
  title: string;
  category: "brochure" | "manual" | "datasheet" | "software";
  file: string;
  product?: string;
  description?: string;
};

export type Office = {
  name: string;
  type: "office" | "distributor";
  country: string;
  region?: string;
  address?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
};

export type StaticPage = {
  slug: string;
  title: string;
  heroImage?: string;
  body?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export type SocialLink = {
  platform: "facebook" | "twitter" | "linkedin" | "youtube" | "instagram";
  url: string;
};

export type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export type SiteConfig = {
  header: { items: NavItem[] };
  footer: {
    tagline?: string;
    address?: string;
    phone?: string;
    email?: string;
    socialLinks: SocialLink[];
    columns: FooterColumn[];
  };
  home: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroImage?: string;
    heroCtaLabel?: string;
    heroCtaHref?: string;
    featuredProducts: string[];
    aboutHeading?: string;
    aboutBody?: string;
  };
};
