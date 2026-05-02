import Link from "next/link";
import { site } from "@/content";
import { Container } from "./Container";

const socialLabels: Record<string, string> = {
  facebook: "Facebook",
  twitter: "Twitter",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  instagram: "Instagram",
};

export function SiteFooter() {
  const { footer } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-brand-900 text-brand-100">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-base font-semibold text-white">Elvacore</p>
          {footer.tagline && (
            <p className="mt-2 max-w-xs text-sm text-brand-200">
              {footer.tagline}
            </p>
          )}
          {footer.socialLinks.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {footer.socialLinks.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-200 hover:text-white"
                  >
                    {socialLabels[s.platform] ?? s.platform}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {footer.columns.map((col) => (
          <div key={col.heading}>
            <p className="text-sm font-semibold text-white">{col.heading}</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-brand-200">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1">
          <p className="text-sm font-semibold text-white">Contact</p>
          <address className="mt-3 flex flex-col gap-1 text-sm not-italic text-brand-200">
            {footer.address && <span>{footer.address}</span>}
            {footer.phone && (
              <a href={`tel:${footer.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {footer.phone}
              </a>
            )}
            {footer.email && (
              <a href={`mailto:${footer.email}`} className="hover:text-white">
                {footer.email}
              </a>
            )}
          </address>
        </div>
      </Container>

      <div className="border-t border-brand-800">
        <Container className="flex flex-col items-start justify-between gap-2 py-6 text-xs text-brand-300 sm:flex-row sm:items-center">
          <p>© {year} Elvacore Technologies. All rights reserved.</p>
          <p>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
