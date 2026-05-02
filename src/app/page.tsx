export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 text-center dark:bg-black">
      <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
        Elvacore
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Coming soon.
      </p>
      <a
        href="/downloads"
        className="mt-8 text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
      >
        Downloads
      </a>
    </main>
  );
}
