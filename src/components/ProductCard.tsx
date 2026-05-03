import Link from "next/link";
import { categories } from "@/content";
import type { Product } from "@/content/types";

function categoryTitle(slug: string) {
  return categories.find((c) => c.slug === slug)?.title ?? slug;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-md"
    >
      <div className="aspect-[4/3] w-full bg-gradient-to-br from-brand-100 via-brand-50 to-accent-400/20" />
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-accent-600">
          {categoryTitle(product.category)}
        </p>
        <h3 className="text-base font-semibold text-ink group-hover:text-brand-700">
          {product.title}
        </h3>
        {product.summary && (
          <p className="mt-1 line-clamp-2 text-sm text-ink-muted">
            {product.summary}
          </p>
        )}
      </div>
    </Link>
  );
}
