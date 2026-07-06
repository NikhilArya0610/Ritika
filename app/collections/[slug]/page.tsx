import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProductCard } from '@/components/product/product-card';
import { getCategoryBySlug } from '@/services/categories';
import { getProducts } from '@/services/products';

export default async function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProducts(category.slug);

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-brand-200/70 bg-white/90 shadow-soft">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-transparent to-transparent opacity-70" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-end p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Collection</p>
            <h1 className="text-4xl font-semibold text-brand-950">{category.name}</h1>
            <p className="max-w-2xl text-sm leading-7 text-brand-700">{category.description}</p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-[2rem] bg-brand-100">
            <Image src={category.featuredImage} alt={category.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Products in this collection" description="Explore the curated pieces that define this category." />
        {products.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-brand-200/70 bg-white/90 p-12 text-brand-700">
            No products have been added to this collection yet.
          </div>
        )}
      </section>
    </div>
  );
}
