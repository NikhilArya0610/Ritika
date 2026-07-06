import { SectionHeading } from '@/components/ui/section-heading';

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4 rounded-[2rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-600">About Ritika Atelier</p>
        <h1 className="text-4xl font-semibold text-brand-950">A modern approach to luxury living.</h1>
        <p className="max-w-3xl text-base leading-8 text-brand-700">
          Ritika Atelier is a curated catalogue of premium home objects, textiles and furnishings created for quiet interiors.
          Our edit blends tactile materials, minimal silhouettes, and thoughtful details inspired by modern craftsmanship.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-brand-200/70 bg-brand-100/80 p-8 shadow-soft">
          <SectionHeading title="Design philosophy" description="Elegance through restraint, quality through craft." />
        </article>
        <article className="rounded-[2rem] border border-brand-200/70 bg-brand-100/80 p-8 shadow-soft">
          <SectionHeading title="Collections" description="Objects, lighting, textiles, and accessories for tranquil interiors." />
        </article>
        <article className="rounded-[2rem] border border-brand-200/70 bg-brand-100/80 p-8 shadow-soft">
          <SectionHeading title="Bespoke service" description="Personal enquiries sent directly to our atelier team via WhatsApp." />
        </article>
      </div>
    </section>
  );
}
