import { downloads } from "@/content";

export const metadata = { title: "Downloads — Elvacore Technologies" };

const categoryLabels: Record<string, string> = {
  brochure: "Brochure",
  manual: "Manual",
  datasheet: "Datasheet",
  software: "Software",
};

export default function DownloadsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        Downloads
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Brochures, manuals, datasheets and software.
      </p>

      <ul className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
        {downloads.map((d) => (
          <li
            key={d.file}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-50">
                {d.title}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {categoryLabels[d.category]}
                {d.description ? ` — ${d.description}` : null}
              </p>
            </div>
            <a
              href={d.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
