import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { SolutionCard } from "@/components/SolutionCard";
import { ResponsiveCarousel } from "@/components/ResponsiveCarousel";
import { solutions } from "@/content";

export const metadata = {
  title: "Solutions",
  description:
    "Tailored automation systems combining precision motion, servo, PLC, and AI training products into complete deployments.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-brand-50 to-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Solutions
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl md:text-5xl">
            Solutions across industries
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-muted sm:text-lg">
            Tailored systems combining precision automation products into
            complete, deployment-ready solutions, designed, supplied, and
            supported by Elvacore.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ResponsiveCarousel
            items={solutions}
            cols="md:grid-cols-3"
            itemKey={(s) => s.slug}
          >
            {(solution) => <SolutionCard solution={solution} />}
          </ResponsiveCarousel>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Get in touch"
        title="Discussing a deployment?"
        description="Tell us about your project and we'll spec the right combination of products and integration support."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Browse products"
        secondaryHref="/products"
      />
    </>
  );
}
