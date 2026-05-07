import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = {
  title: "History",
  description:
    "Origins of Elvacore Technologies and our partnership with Googol Technology (HK) Limited.",
};

const pillars = [
  {
    title: "Motion Control Technology",
    description:
      "Multi-axis DSP+FPGA controllers, EtherCAT and proprietary gLink bus, real-time interpolation.",
  },
  {
    title: "Servo Drive Technology",
    description:
      "High-bandwidth servo drives with auto-tune, anti-vibration algorithm, and 26-bit encoder resolution.",
  },
  {
    title: "Machine Vision Technology",
    description:
      "Vision-guided automation, AI-based inspection and intelligent control integration.",
  },
  {
    title: "Mechanical Design Optimisation",
    description:
      "System-level co-design combining motion, drive, and structural engineering expertise.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-brand-50 to-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Our story
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl md:text-5xl">
            History
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-muted sm:text-lg">
            A young Indian company backed by a quarter-century of motion-control
            engineering experience.
          </p>
        </Container>
      </section>

      {/* Origins */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            Founded in Pune, June 2024
          </h2>
          <p className="mt-4 text-ink-muted">
            Elvacore Technologies LLP was established in June 2024 as a Limited
            Liability Partnership headquartered in Pashan, Pune. From day one,
            our mission has been to bring world-class precision automation
            hardware, educational platforms, and AI-based intelligent control
            systems to Indian industry and academia — supported by genuine
            authorised supply, deep technical expertise, and end-to-end service.
          </p>
          <p className="mt-4 text-ink-muted">
            Within months of incorporation, Elvacore secured authorised Indian
            distribution rights for Googol Technology (HK) Limited, allowing us
            to combine local presence and Indian-market application experience
            with one of the most established motion-control product portfolios
            in the Asia-Pacific region.
          </p>
        </Container>
      </section>

      {/* Tech partner */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Technology partner
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            Googol Technology (HK) Limited
          </h2>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <p className="text-ink-muted">
              Founded in 1999 by internationally renowned scholars from the Hong
              Kong University of Science and Technology (HKUST), Googol
              Technology is the first high-tech company in the Asia Pacific
              region specialising in R&D, production, and marketing of motion
              controllers and controller-based systems.
            </p>
            <p className="text-ink-muted">
              Their products are deployed across more than 30 countries in
              industries spanning microelectronics, robotics, CNC machine
              tools, printing, packaging, and production automation — backed by
              25+ years of motion-control leadership and multi-award-winning
              product engineering.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
            Four core technology pillars
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-6"
              >
                <h4 className="text-base font-semibold text-ink">{p.title}</h4>
                <p className="text-sm text-ink-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Get in touch"
        title="Want to learn more about our partnership?"
        description="We're happy to walk you through Elvacore's services and Googol's product lines."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse products"
        secondaryHref="/products"
      />
    </>
  );
}
