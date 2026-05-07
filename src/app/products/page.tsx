import Link from "next/link";
import { categories, products } from "@/content";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = { title: "Products" };

// Only categories that actually have products attached (leaf categories).
const leafCategories = categories.filter((c) => c.parent !== undefined);

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const { category: activeCategory } = await searchParams;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  // When showing all, group by leaf category for a more browsable layout.
  const groups = activeCategory
    ? null
    : leafCategories
        .map((cat) => ({
          category: cat,
          items: products
            .filter((p) => p.category === cat.slug)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
        }))
        .filter((g) => g.items.length > 0);

  const activeCategoryTitle = leafCategories.find(
    (c) => c.slug === activeCategory,
  )?.title;

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-brand-50 to-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Catalogue
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
            {activeCategoryTitle ? activeCategoryTitle : "Products"}
          </h1>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Industrial and educational control, motion, and servo products.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            <FilterPill
              href="/products"
              label="All"
              active={!activeCategory}
            />
            {leafCategories.map((c) => (
              <FilterPill
                key={c.slug}
                href={`/products?category=${c.slug}`}
                label={c.title}
                active={activeCategory === c.slug}
              />
            ))}
          </div>

          {/* Grid (filtered) or grouped sections */}
          {activeCategory ? (
            filtered.length > 0 ? (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            ) : (
              <p className="mt-10 text-ink-muted">
                No products in this category yet.
              </p>
            )
          ) : (
            <div className="mt-10 flex flex-col gap-14">
              {groups!.map((g) => (
                <div key={g.category.slug}>
                  <div className="flex items-end justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
                      {g.category.title}
                    </h2>
                    <Link
                      href={`/products?category=${g.category.slug}`}
                      className="text-sm font-medium text-brand-700 hover:text-brand-800"
                    >
                      View all <span aria-hidden>→</span>
                    </Link>
                  </div>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {g.items.map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaBanner
        eyebrow="Get in touch"
        title="Need help choosing the right product?"
        description="Our engineering team can help you spec the right controllers, drives, and modules for your project."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}

function FilterPill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "inline-flex h-9 items-center rounded-full bg-brand-700 px-4 text-sm font-medium text-white"
          : "inline-flex h-9 items-center rounded-full border border-border bg-surface px-4 text-sm font-medium text-ink hover:border-brand-300 hover:text-brand-700"
      }
    >
      {label}
    </Link>
  );
}
