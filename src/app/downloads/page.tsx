import { downloads } from "@/content";
import { Container } from "@/components/Container";

export const metadata = { title: "Downloads" };

const categoryLabels: Record<string, string> = {
  brochure: "Brochure",
  manual: "Manual",
  datasheet: "Datasheet",
  software: "Software",
};

export default function DownloadsPage() {
  return (
    <Container className="py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
          Downloads
        </h1>
        <p className="mt-2 text-ink-muted">
          Brochures, manuals, datasheets and software.
        </p>
      </div>

      <ul className="mt-8 max-w-3xl divide-y divide-border rounded-xl border border-border bg-surface">
        {downloads.map((d) => (
          <li
            key={d.file}
            className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium text-ink">{d.title}</p>
              <p className="text-sm text-ink-muted">
                {categoryLabels[d.category]}
                {d.description ? ` — ${d.description}` : null}
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
    </Container>
  );
}
