import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { ProductCard } from "@/components/ProductCard";
import { ResponsiveCarousel } from "@/components/ResponsiveCarousel";
import { products, solutions } from "@/content";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export function generateStaticParams(): Params[] {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.summary,
  };
}

const typeLabels: Record<string, string> = {
  "smart-city": "Smart City",
  "smart-industry": "Smart Industry",
  "education-training": "Education & Training",
};

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const relatedProducts = (solution.relatedProducts ?? [])
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/solutions" className="hover:text-brand-700">
                  Solutions
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-ink">{solution.title}</li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="border-b border-border bg-gradient-to-b from-brand-50 to-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            {typeLabels[solution.type] ?? "Solution"}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl md:text-5xl">
            {solution.title}
          </h1>
          {solution.summary && (
            <p className="mt-4 max-w-3xl text-base text-ink-muted sm:text-lg">
              {solution.summary}
            </p>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {/* Body */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
                Overview
              </h2>
              {solution.body && (
                <p className="mt-4 whitespace-pre-line text-ink-muted">
                  {solution.body}
                </p>
              )}
            </div>

            {/* Key applications */}
            {solution.keyApplications && solution.keyApplications.length > 0 && (
              <aside>
                <h3 className="text-lg font-semibold tracking-tight text-brand-900">
                  Key applications
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-muted">
                  {solution.keyApplications.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-surface-muted py-16 sm:py-20">
          <Container>
            <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
              Related products
            </h2>
            <ResponsiveCarousel
              items={relatedProducts}
              cols="sm:grid-cols-2 lg:grid-cols-4"
              className="mt-8"
            >
              {(p) => <ProductCard product={p} />}
            </ResponsiveCarousel>
          </Container>
        </section>
      )}

      <CtaBanner
        eyebrow="Get in touch"
        title={`Talk to us about ${solution.title.toLowerCase()} deployments`}
        description="Our team can help spec the right products and integration support for your project."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse all solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
