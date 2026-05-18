import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = {
  title: "Why Choose Elvacore",
  description:
    "Six clear advantages that make Elvacore Technologies the preferred partner for industrial automation and academic research projects across India.",
};

const advantages = [
  {
    title: "Authorised Indian Distributor",
    description:
      "Direct authorised supply chain ensures genuine products, valid warranties, factory-level technical documentation, and competitive import pricing.",
  },
  {
    title: "End-to-End Solution Provider",
    description:
      "From motion control cards and servo drives to AI training rigs, we cover the complete automation spectrum — supply, installation, integration, training, and AMC.",
  },
  {
    title: "MSME Registered",
    description:
      "Registered under India's MSME framework, enabling preferential vendor status for eligible government and PSU procurement processes.",
  },
  {
    title: "Deep Technical Expertise",
    description:
      "Hands-on R&D and industrial automation experience to support system design, servo commissioning, PLC programming, and field troubleshooting — backed by over two decades of domain knowledge.",
  },
  {
    title: "Academic & Industrial Focus",
    description:
      "Dedicated product lines for both industrial machine builders and engineering institutions — bridging the gap between education and real-world automation practice.",
  },
  {
    title: "Proven Global Partnership",
    description:
      "Backed by internationally award-winning motion-control technology — products deployed across 30+ countries with a heritage of academic and industrial innovation since the late 1990s.",
  },
];

export default function VisionPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-brand-50 to-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Corporate vision
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl md:text-5xl">
            Why choose Elvacore
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-muted sm:text-lg">
            Six clear advantages that make Elvacore Technologies the preferred
            partner for industrial automation and academic research projects
            across India.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <div
                key={a.title}
                className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-base font-semibold text-ink">{a.title}</h2>
                <p className="text-sm text-ink-muted">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Get in touch"
        title="Ready to start your next project?"
        description="From spec to commissioning to AMC — talk to our team about how Elvacore can support your automation roadmap."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse products"
        secondaryHref="/products"
      />
    </>
  );
}
