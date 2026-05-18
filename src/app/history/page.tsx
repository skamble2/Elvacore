import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = {
  title: "History",
  description:
    "Origins of Elvacore Technologies — founded in Pune, June 2024.",
};

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

      {/* Founding story */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            Founded in Pune, June 2024
          </h2>
          <div className="mt-6 flex flex-col gap-5 text-ink-muted">
            <p>
              Elvacore Technologies LLP was established in June 2024 as a
              Limited Liability Partnership headquartered in Pashan, Pune. The
              company was founded by professionals with deep roots in
              industrial automation and robotics — drawing on over two decades
              of hands-on R&D, training, and systems integration experience in
              the Indian automation sector.
            </p>
            <p>
              From the outset, Elvacore's mission has been to make world-class
              precision automation hardware, educational platforms, and
              AI-based intelligent control systems accessible to Indian
              industry and academia — with the genuine authorised supply
              chain, application expertise, and end-to-end support that Indian
              machine builders and institutions require.
            </p>
            <p>
              Within months of incorporation, Elvacore secured authorised
              Indian distribution rights for a leading Asia-Pacific
              motion-control manufacturer — combining local presence and
              Indian-market application knowledge with one of the most
              established motion-control product portfolios in the region.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Get in touch"
        title="Want to learn more about our journey?"
        description="We're happy to walk you through Elvacore's services and product lines."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse products"
        secondaryHref="/products"
      />
    </>
  );
}
