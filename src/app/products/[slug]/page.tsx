import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { categories, downloads, products } from "@/content";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { CtaBanner } from "@/components/CtaBanner";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.summary,
  };
}

const downloadCategoryLabels: Record<string, string> = {
  brochure: "Brochure",
  manual: "Manual",
  datasheet: "Datasheet",
  software: "Software",
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category);
  const parentCategory = category?.parent
    ? categories.find((c) => c.slug === category.parent)
    : undefined;

  const productDownloads = downloads.filter((d) => d.product === slug);

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const cover = product.images[0];

  return (
    <>
      {/* Breadcrumb + hero */}
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
                <Link href="/products" className="hover:text-brand-700">
                  Products
                </Link>
              </li>
              {parentCategory && (
                <>
                  <li aria-hidden>/</li>
                  <li>
                    <Link
                      href={`/products?category=${category?.slug}`}
                      className="hover:text-brand-700"
                    >
                      {parentCategory.title}
                    </Link>
                  </li>
                </>
              )}
              {category && (
                <>
                  <li aria-hidden>/</li>
                  <li>
                    <Link
                      href={`/products?category=${category.slug}`}
                      className="hover:text-brand-700"
                    >
                      {category.title}
                    </Link>
                  </li>
                </>
              )}
              <li aria-hidden>/</li>
              <li className="font-medium text-ink">{product.title}</li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-100 via-brand-50 to-accent-400/20">
              {cover && (
                <Image
                  src={cover}
                  alt={product.title}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              )}
            </div>
            <div>
              {category && (
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                  {category.title}
                </p>
              )}
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
                {product.title}
              </h1>
              {product.summary && (
                <p className="mt-4 text-lg text-ink-muted">{product.summary}</p>
              )}
              {product.description && (
                <p className="mt-4 whitespace-pre-line text-ink-muted">
                  {product.description}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-brand-700 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
                >
                  Request a quote
                </Link>
                {product.datasheet && (
                  <a
                    href={product.datasheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
                  >
                    Download datasheet
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Features + Applications */}
          {(product.features?.length || product.applications?.length) && (
            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              {product.features && product.features.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
                    Features
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2 text-ink-muted">
                    {product.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {product.applications && product.applications.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
                    Applications
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2 text-ink-muted">
                    {product.applications.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Specifications table */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
                Specifications
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                <dl className="divide-y divide-border">
                  {product.specifications.map((s) => (
                    <div
                      key={s.label}
                      className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-3 sm:gap-4"
                    >
                      <dt className="text-sm font-medium text-ink-muted">
                        {s.label}
                      </dt>
                      <dd className="text-sm text-ink sm:col-span-2">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}

          {/* Downloads for this product */}
          {productDownloads.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
                Downloads
              </h2>
              <ul className="mt-4 divide-y divide-border rounded-xl border border-border">
                {productDownloads.map((d) => (
                  <li
                    key={d.file}
                    className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-medium text-ink">{d.title}</p>
                      <p className="text-sm text-ink-muted">
                        {downloadCategoryLabels[d.category]}
                      </p>
                    </div>
                    <a
                      href={d.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-surface-muted py-16">
          <Container>
            <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
              Related products
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBanner
        eyebrow="Get in touch"
        title="Want more details on this product?"
        description="Talk to our engineering team for spec sheets, sample integrations, and pricing."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse all products"
        secondaryHref="/products"
      />
    </>
  );
}
