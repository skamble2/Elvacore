"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/content";
import { Container } from "./Container";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Elvacore — home"
          className="flex items-center"
        >
          <Image
            src="/Logo.jpg"
            alt="Elvacore"
            width={4121}
            height={2833}
            priority
            sizes="(min-width: 1024px) 160px, 130px"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {site.header.items.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-surface-muted focus-visible:bg-surface-muted lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface lg:hidden">
          <Container className="py-3">
            <ul className="flex flex-col">
              {site.header.items.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = openMobileGroup === item.label;
                return (
                  <li key={item.label} className="border-b border-border last:border-b-0">
                    <div className="flex items-stretch">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex-1 py-3 text-sm font-medium"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="flex-1 py-3 text-sm font-medium">{item.label}</span>
                      )}
                      {hasChildren && (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenMobileGroup(isOpen ? null : item.label)
                          }
                          className="px-3 text-ink-muted"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {hasChildren && isOpen && (
                      <ul className="pb-2 pl-3">
                        {item.children!.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-ink-muted hover:text-ink"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

function NavItem({
  item,
}: {
  item: (typeof site.header.items)[number];
}) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href ?? "#"}
        className="rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-brand-700"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href ?? "#"}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-brand-700"
      >
        {item.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5 text-ink-muted"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>
      <div className="invisible absolute left-0 top-full z-10 min-w-[14rem] translate-y-1 rounded-lg border border-border bg-surface p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ul>
          {item.children!.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                className="block rounded-md px-3 py-2 text-sm text-ink hover:bg-surface-muted hover:text-brand-700"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
