import Link from "next/link";
import { news, products, site } from "@/content";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  const { home } = site;

  const featured = home.featuredProducts
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const latestNews = [...news]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <Container className="grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">
              {home.heroTitle ?? "Elvacore Technologies"}
            </h1>
            {home.heroSubtitle && (
              <p className="mt-4 max-w-xl text-lg text-ink-muted">
                {home.heroSubtitle}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {home.heroCtaLabel && home.heroCtaHref && (
                <Link
                  href={home.heroCtaHref}
                  className="inline-flex h-11 items-center justify-center rounded-md bg-brand-700 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
                >
                  {home.heroCtaLabel}
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-200 via-brand-100 to-accent-400/20" />
          </div>
        </Container>
      </section>

      {/* Recommended products */}
      {featured.length > 0 && (
        <section className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Products"
              title="Recommended Products"
              description="A selection of our most widely deployed control and automation products."
              ctaLabel="View all products"
              ctaHref="/products"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* About strip */}
      {home.aboutHeading && home.aboutBody && (
        <section className="bg-surface-muted py-20">
          <Container className="max-w-3xl">
            <SectionHeading
              eyebrow="About"
              title={home.aboutHeading}
            />
            <p className="mt-4 whitespace-pre-line text-ink-muted">
              {home.aboutBody}
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800"
              >
                Read more <span aria-hidden>→</span>
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* Latest news */}
      {latestNews.length > 0 && (
        <section className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Newsroom"
              title="Latest News"
              description="Announcements, releases, and what we've been working on."
              ctaLabel="View all news"
              ctaHref="/news"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {latestNews.map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
