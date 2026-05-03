import Link from "next/link";
import type { NewsArticle } from "@/content/types";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-md"
    >
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-brand-200 via-brand-100 to-surface-muted" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <time
          dateTime={article.date}
          className="text-xs font-medium uppercase tracking-wide text-ink-muted"
        >
          {dateFormatter.format(new Date(article.date))}
        </time>
        <h3 className="text-base font-semibold text-ink group-hover:text-brand-700">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="line-clamp-3 text-sm text-ink-muted">
            {article.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
