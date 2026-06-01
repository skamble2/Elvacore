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
      {/* Hero, full-width banner with background image */}
      <section className="relative overflow-hidden bg-brand-900">
        {/* Background image */}
        <Image
          src="/images/home-hero-1.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Gradient scrim, keeps left-side text crisp against the photo */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/75 to-brand-900/30"
        />
        {/* Subtle cyan glow accent on the right */}
        <div
          aria-hidden
          className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-500/20 blur-3xl"
        />

        <Container className="relative py-20 sm:py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Intelligent control & automation
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {home.heroTitle ?? "Elvacore Technologies"}
            </h1>
            {home.heroSubtitle && (
              <p className="mt-5 max-w-xl text-base text-brand-100 sm:text-lg">
                {home.heroSubtitle}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {home.heroCtaLabel && home.heroCtaHref && (
                <Link
                  href={home.heroCtaHref}
                  className="inline-flex h-11 items-center justify-center rounded-md bg-accent-500 px-5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-colors hover:bg-accent-600"
                >
                  {home.heroCtaLabel}
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/30 bg-white/5 px-5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Contact us
              </Link>
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
        description="Talk to our engineering team, we'll help spec the controllers, drives, and integration that fit your project."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse products"
        secondaryHref="/products"
      />
    </>
  );
}
