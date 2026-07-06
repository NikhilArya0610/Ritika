import Image from 'next/image';
import { notFound } from 'next/navigation';
import { WhatsappAction } from '@/components/enquiry/whatsapp-action';
import { SectionHeading } from '@/components/ui/section-heading';
import { getProductBySlug, getProducts } from '@/services/products';
import { ProductCard } from '@/components/product/product-card';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = (await getProducts(product.category)).filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div className="space-y-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8 rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-8 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_0.8fr]">
            <div className="rounded-[2.5rem] bg-brand-100 p-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand-200">
                <Image
                  src={product.images[0] || 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-600">{product.category}</p>
              <h1 className="text-4xl font-semibold text-brand-950">{product.name}</h1>
              <p className="max-w-2xl text-sm leading-7 text-brand-700">{product.description}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="rounded-3xl border border-brand-200/70 bg-brand-100/80 p-4 text-sm text-brand-700">
                    <p className="font-semibold text-brand-950">{key}</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <article className="space-y-6 rounded-[2rem] border border-brand-200/70 bg-brand-50 p-8">
            <SectionHeading title="Product details" />
            <p className="text-sm leading-7 text-brand-700">Explore this product’s heritage, materials, and styling possibilities. Each object is selected for its refined balance of form and function.</p>
          </article>
        </div>
        <aside className="space-y-6">
          <div className="rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-8 shadow-soft">
            <SectionHeading title="Request information" description="Submit a WhatsApp enquiry for pricing and availability." />
            <WhatsappAction product={product} />
          </div>
          <div className="rounded-[2.5rem] border border-brand-200/70 bg-brand-950 p-8 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Details</p>
            <dl className="mt-6 grid gap-4">
              <div className="rounded-3xl bg-black/10 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-brand-200">Status</dt>
                <dd className="mt-2 text-base font-medium">{product.status}</dd>
              </div>
              <div className="rounded-3xl bg-black/10 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-brand-200">Category</dt>
                <dd className="mt-2 text-base font-medium">{product.category}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {relatedProducts.length ? (
        <section className="space-y-6">
          <SectionHeading title="Related products" description="More objects from this collection." />
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
