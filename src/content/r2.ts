/**
 * Build a public URL for a file stored in the Cloudflare R2 bucket.
 *
 * Set `NEXT_PUBLIC_R2_PUBLIC_URL` to either:
 *   - the bucket's r2.dev subdomain, e.g. `https://pub-xxxxx.r2.dev`
 *   - or your custom domain, e.g. `https://media.elvacore.com`
 *
 * Pass the object key (path within the bucket), e.g. `r2("manuals/foo.pdf")`.
 */
export function r2(key: string): string {
  const base = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
  if (!base) {
    throw new Error(
      "NEXT_PUBLIC_R2_PUBLIC_URL is not set, add it to .env.local before referencing R2 files.",
    );
  }
  const trimmedBase = base.replace(/\/+$/, "");
  const trimmedKey = key.replace(/^\/+/, "");
  // URL-encode each path segment so filenames with spaces or special chars
  // (e.g. "Datasheet - iDEABOX Pro.pdf") resolve correctly on R2.
  const encodedKey = trimmedKey
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${trimmedBase}/${encodedKey}`;
}
