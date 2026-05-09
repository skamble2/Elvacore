import Link from "next/link";
import type { Solution } from "@/content/types";

const typeLabels: Record<Solution["type"], string> = {
  "smart-city": "Smart City",
  "smart-industry": "Smart Industry",
  "education-training": "Education & Training",
};

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
        {typeLabels[solution.type]}
      </p>
      <h3 className="text-lg font-semibold text-ink group-hover:text-brand-700">
        {solution.title}
      </h3>
      {solution.summary && (
        <p className="text-sm text-ink-muted">{solution.summary}</p>
      )}
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-700">
        Learn more <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
