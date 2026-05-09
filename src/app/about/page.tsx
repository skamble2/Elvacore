import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ResponsiveCarousel } from "@/components/ResponsiveCarousel";

export const metadata = {
  title: "Company Profile",
  description:
    "Elvacore Technologies LLP — Pune-based supplier of motion control and industrial automation products.",
};

const stats: { value: number | string; label: string }[] = [
  { value: 9, label: "Total Products" },
  { value: 5, label: "Product Categories" },
  { value: "2024", label: "Year Established" },
  { value: 3, label: "Designated Partners" },
];

const glance: { label: string; value: string }[] = [
  { label: "Legal Entity", value: "Limited Liability Partnership (LLP)" },
  { label: "Established", value: "June 2024" },
  { label: "GSTIN", value: "27AALFE8213A1ZQ" },
  {
    label: "MSME Registration",
    value: "Registered under MSME, Government of India",
  },
  {
    label: "Headquarters",
    value:
      "Shop No. 2, Orange County Phase-II, IV S.No. 117/1 & 2, Pashan-Sus Road, Pashan, Pune - 411021",
  },
  {
    label: "Designated Partners",
    value: "Rajwardhan Salunke · Suresh Sonawane · Vinit Benadikar",
  },
  {
    label: "Tech Partner",
    value: "Googol Technology (HK) Limited — Authorised Indian Distributor",
  },
  {
    label: "Services",
    value: "Supply · Installation · AMC · Training · System Integration",
  },
];

type IndustryItem = { name: string; description: string };
type IndustryGroup = {
  heading: string;
  caption: string;
  items: IndustryItem[];
};

const industryGroups: IndustryGroup[] = [
  {
    heading: "Core industrial sectors",
    caption: "Where precision motion meets heavy-duty manufacturing.",
    items: [
      {
        name: "Microelectronics & Semiconductors",
        description:
          "Chip manufacturing, semiconductor component assembly, precision electronics fabrication.",
      },
      {
        name: "Robotics & Automation",
        description:
          "Industrial robots, calibration systems, multi-axis automation lines.",
      },
      {
        name: "CNC Machine Tools",
        description:
          "Precision machining, metal cutting, industrial fabrication, machining centres.",
      },
      {
        name: "Industrial Production Automation",
        description:
          "Factory automation systems, PLCs, motion controllers, conveyor and assembly lines.",
      },
    ],
  },
  {
    heading: "Electronics & processing",
    caption: "High-throughput lines that demand consistent, repeatable motion.",
    items: [
      {
        name: "Electronic Processing & Testing",
        description:
          "PCB testing, electronics assembly automation, functional test rigs.",
      },
      {
        name: "Printing & Packaging",
        description:
          "High-speed printing machines, packaging lines, web-tension control.",
      },
      {
        name: "Plastic Injection & Manufacturing",
        description:
          "Injection moulding systems, clamping force control, cycle-time optimisation.",
      },
    ],
  },
  {
    heading: "Smart & emerging technology",
    caption: "Industry 4.0, machine vision, and AI-led automation.",
    items: [
      {
        name: "Smart Industry / Industry 4.0",
        description:
          "Motion control + industrial IoT integration, real-time data acquisition and analytics.",
      },
      {
        name: "Machine Vision & AI Systems",
        description:
          "Vision-guided automation, defect inspection, AI-assisted quality control.",
      },
      {
        name: "Smart City Applications",
        description:
          "Autonomous cleaning robots, environmental monitoring, smart waste management.",
      },
    ],
  },
];

const services: { title: string; description: string }[] = [
  {
    title: "Product Supply & Distribution",
    description:
      "Authorised supply of Googol Technology products with genuine certification, competitive pricing, and efficient import logistics direct from Hong Kong.",
  },
  {
    title: "Installation Support",
    description:
      "On-site and remote installation assistance for motion controllers, servo drives, PLCs, and complete automation systems — wiring, parameterisation, and first-run commissioning.",
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Structured AMC packages covering scheduled inspections, firmware updates, and priority breakdown support to keep your systems at peak performance.",
  },
  {
    title: "Technical Training",
    description:
      "Hands-on training for engineers and technicians on motion control programming, servo tuning, PLC logic, and AI-based control platforms — at client sites or our Pune centre.",
  },
  {
    title: "System Integration",
    description:
      "End-to-end integration services, designing and building complete automation solutions combining motion controllers, servo drives, PLCs, sensors, and HMI software.",
  },
];

function IndustryCard({ item }: { item: IndustryItem }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5 sm:p-6">
      <div className="h-1 w-10 rounded-full bg-accent-500" aria-hidden />
      <h4 className="text-base font-semibold text-ink">{item.name}</h4>
      <p className="text-sm text-ink-muted">{item.description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-brand-50 to-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            About us
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl md:text-5xl">
            Company Profile
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-muted sm:text-lg">
            Elvacore Technologies LLP is a Pune-based technology company
            established in June 2024, specialising in the supply, distribution,
            and application support of advanced motion control and industrial
            automation products. We serve machine builders, system integrators,
            academic institutions, and R&D laboratories across India.
          </p>
          <p className="mt-4 max-w-3xl text-base text-ink-muted sm:text-lg">
            As the authorised Indian distribution partner of Googol Technology
            (HK) Limited, Elvacore delivers precision automation hardware,
            educational platforms, and AI-based intelligent control systems to
            Indian industry and academia. Our team combines hands-on R&D
            experience with deep application knowledge to deliver complete
            automation solutions — from product supply through installation,
            system integration, training, and ongoing maintenance.
          </p>
        </Container>
      </section>

      {/* Stats — animated counters with gradient text */}
      <section className="border-b border-border bg-surface py-12 sm:py-16">
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="bg-gradient-to-br from-brand-700 to-brand-900 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
                  {typeof s.value === "number" ? (
                    <AnimatedCounter value={s.value} />
                  ) : (
                    s.value
                  )}
                </dt>
                <div
                  aria-hidden
                  className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-accent-500"
                />
                <dd className="mt-3 text-sm font-medium text-ink-muted sm:text-base">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Company at a glance */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            Company at a glance
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <dl className="divide-y divide-border">
              {glance.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-3 sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-ink-muted">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-ink sm:col-span-2">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Our services
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            End-to-end automation support
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            From initial consultation and system design through to commissioning,
            training, and long-term maintenance contracts.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                <p className="text-sm text-ink-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries served — grouped sections, each a carousel on mobile / grid on sm+ */}
      <section className="py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Industries served
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            Where our products are deployed
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            From precision semiconductor fabrication and CNC machining to smart
            city applications and AI-driven Industry 4.0 solutions.
          </p>

          <div className="mt-12 flex flex-col gap-12 sm:gap-14">
            {industryGroups.map((group) => (
              <div key={group.heading}>
                <div className="flex flex-col gap-1 border-l-2 border-accent-500 pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-brand-900 sm:text-xl">
                    {group.heading}
                  </h3>
                  <p className="text-sm text-ink-muted">{group.caption}</p>
                </div>
                <ResponsiveCarousel
                  items={group.items}
                  cols="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  className="mt-6"
                  itemKey={(item) => item.name}
                >
                  {(item) => <IndustryCard item={item} />}
                </ResponsiveCarousel>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Get in touch"
        title="Ready to upgrade your automation?"
        description="Talk to our engineers about your project — we'll spec, supply, install, and support the full solution."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse products"
        secondaryHref="/products"
      />
    </>
  );
}
