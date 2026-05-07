import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = {
  title: "Company Profile",
  description:
    "Elvacore Technologies LLP — Pune-based supplier of motion control and industrial automation products.",
};

const stats = [
  { value: "9", label: "Total Products" },
  { value: "5", label: "Product Categories" },
  { value: "2024", label: "Year Established" },
  { value: "3", label: "Designated Partners" },
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

const industryGroups: { heading: string; items: { name: string; description: string }[] }[] = [
  {
    heading: "Core industrial sectors",
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

      {/* Stats */}
      <section className="border-b border-border bg-surface py-10 sm:py-12">
        <Container>
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-ink-muted">{s.label}</dd>
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
                className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6"
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

      {/* Industries served */}
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
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {industryGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-800">
                  {group.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-medium text-ink">{item.name}</p>
                      <p className="mt-0.5 text-sm text-ink-muted">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
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
