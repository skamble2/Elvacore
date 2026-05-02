import type { NewsArticle } from "./types";

export const news: NewsArticle[] = [
  // TODO: add real news articles. Sorted newest-first by `date` at render time.
  {
    slug: "hello-world",
    title: "Welcome to the new Elvacore site",
    date: "2026-05-01",
    excerpt: "A short teaser shown on the news listing page.",
    featuredImage: "/images/news/hello-world.jpg",
    body: "The full article body, written in markdown.",
  },
];
