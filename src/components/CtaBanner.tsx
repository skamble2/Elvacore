import Link from "next/link";
import { Container } from "./Container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="bg-brand-800 text-white">
      <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-brand-100">{description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent-500 px-5 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
