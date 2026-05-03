import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-2xl text-ink-muted">{description}</p>
        )}
      </div>
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
