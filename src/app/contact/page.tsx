import { Container } from "@/components/Container";
import { offices, site } from "@/content";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact us",
  description:
    "Talk to Elvacore Technologies — phone, email, address, and message form.",
};

const MAP_QUERY = encodeURIComponent(
  "Orange County Phase-II, Pashan-Sus Road, Pashan, Pune 411021",
);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export default function ContactPage() {
  const office = offices[0];
  const phoneRaw = site.footer.phone?.replace(/\s+/g, "") ?? "";
  const email = site.footer.email ?? "";

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-brand-50 to-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Get in touch
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl md:text-5xl">
            Contact Elvacore
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-muted sm:text-lg">
            Talk to our engineering team about products, integration, training,
            or annual maintenance — by phone, email, or the form below.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Left: contact info + map */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
                  Reach us directly
                </h2>
                <dl className="mt-6 flex flex-col gap-5 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${phoneRaw}`}
                        className="text-base font-medium text-brand-700 hover:text-brand-800"
                      >
                        {site.footer.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${email}`}
                        className="break-all text-base font-medium text-brand-700 hover:text-brand-800"
                      >
                        {email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Address
                    </dt>
                    <dd className="mt-1 text-ink">
                      {office.address}
                      <div className="mt-2">
                        <a
                          href={MAP_OPEN_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800"
                        >
                          Open in Google Maps <span aria-hidden>→</span>
                        </a>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Elvacore Technologies — office location"
                  src={MAP_EMBED_SRC}
                  className="block h-72 w-full sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
