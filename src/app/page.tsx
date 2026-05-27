import Image from "next/image";
import Link from "next/link";
import { products, site, solutions } from "@/content";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionCard } from "@/components/SolutionCard";
import { CtaBanner } from "@/components/CtaBanner";
import { ResponsiveCarousel } from "@/components/ResponsiveCarousel";

export default function Home() {
  const { home } = site;

  const featured = home.featuredProducts
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-surface">
        <Container className="grid items-center gap-10 py-16 sm:py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              Intelligent control & automation
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl md:text-5xl">
              {home.heroTitle ?? "Elvacore Technologies"}
            </h1>
            {home.heroSubtitle && (
              <p className="mt-4 max-w-xl text-base text-ink-muted sm:text-lg">
                {home.heroSubtitle}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 rounded-3xl bg-accent-400/10 blur-2xl" />
            <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-lg sm:p-8">
              <div className="relative h-full w-full">
                <Image
                  src="/images/home-hero.jpeg"
                  alt="Elvacore precision motion control and automation"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Recommended products */}
      {featured.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Products"
              title="Recommended Products"
              description="A selection of our most widely deployed control and automation products."
              ctaLabel="View all products"
              ctaHref="/products"
            />
            <ResponsiveCarousel
              items={featured}
              cols="sm:grid-cols-2 lg:grid-cols-4"
              className="mt-10"
            >
              {(product) => <ProductCard product={product} />}
            </ResponsiveCarousel>
          </Container>
        </section>
      )}

      {/* Solutions */}
      {solutions.length > 0 && (
        <section className="bg-surface-muted py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Solutions"
              title="Solutions across industries"
              description="Tailored systems combining our products into complete deployments."
              ctaLabel="View all solutions"
              ctaHref="/solutions"
            />
            <ResponsiveCarousel
              items={solutions}
              cols="md:grid-cols-3"
              className="mt-10"
            >
              {(solution) => <SolutionCard solution={solution} />}
            </ResponsiveCarousel>
          </Container>
        </section>
      )}

      {/* About strip */}
      {home.aboutHeading && home.aboutBody && (
        <section className="py-16 sm:py-20">
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="About" title={home.aboutHeading} />
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

      {/* CTA banner */}
      <CtaBanner
        eyebrow="Get in touch"
        title="Looking for the right system for your application?"
        description="Talk to our engineering team — we'll help spec the controllers, drives, and integration that fit your project."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse products"
        secondaryHref="/products"
      />
    </>
  );
}
