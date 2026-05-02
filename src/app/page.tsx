import Link from "next/link";
import { site } from "@/content";
import { Container } from "@/components/Container";

export default function Home() {
  const { home } = site;

  return (
    <>
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
            {home.heroCtaLabel && home.heroCtaHref && (
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={home.heroCtaHref}
                  className="inline-flex h-11 items-center justify-center rounded-md bg-brand-700 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
                >
                  {home.heroCtaLabel}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
                >
                  Contact us
                </Link>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/3] rounded-2xl bg-brand-100" />
          </div>
        </Container>
      </section>

      {home.aboutHeading && home.aboutBody && (
        <section className="py-16">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
              {home.aboutHeading}
            </h2>
            <p className="mt-4 whitespace-pre-line text-ink-muted">
              {home.aboutBody}
            </p>
          </Container>
        </section>
      )}
    </>
  );
}
