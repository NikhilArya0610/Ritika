'use client';

import type React from 'react';
import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { CollectionCard } from '@/components/collections/collection-card';
import { ProductCard } from '@/components/product/product-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { subscribeNewsletter } from '@/services/newsletter';

const categories = [
  {
    id: 'designation-1',
    name: 'Dining Objects',
    slug: 'dining-objects',
    description: 'Textured ceramics and sculptural serving pieces for elegant tables.',
    featuredImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'designation-2',
    name: 'Living Spaces',
    slug: 'living-spaces',
    description: 'Soft textiles and statement accessories for minimal interiors.',
    featuredImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'designation-3',
    name: 'Wellness',
    slug: 'wellness',
    description: 'Calm fragrances, ritual candles, and objects for a quiet home.',
    featuredImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  }
];

export function HomePage() {
  const { data: productsData, isLoading } = useProducts();
  const products = Array.isArray(productsData) ? productsData : [];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await subscribeNewsletter(email);
      setEmail('');
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-brand-200/70 bg-brand-950 text-white shadow-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-200">New season</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                Discover sculptural essentials for a serene luxury home.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-brand-200/90">
                Ritika Atelier presents carefully selected objects and furniture designed for quiet, sophisticated spaces.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg">Explore Collections</Button>
                <Button variant="secondary" size="lg">
                  Request Information
                </Button>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Signature pieces</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Hand-finished ceramic candleholders</h2>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Curated edit</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Minimal silhouettes, luxurious materials</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading title="Featured Collections" description="A calm edit of rooms, objects, and finishes for every story." />
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CollectionCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Featured products"
            description="Browse artisan-crafted pieces and discover new additions to the Ritika Atelier collection."
          />
          <Button variant="outline" size="sm">
            View All Products
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {isLoading ? (
            <div className="rounded-[2rem] border border-brand-200/70 bg-white/70 p-12 text-center text-brand-500">Loading products...</div>
          ) : products?.length ? (
            products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="rounded-[2rem] border border-brand-200/70 bg-white/70 p-12 text-brand-700">
              No active products are available yet. Add products in Firestore to populate the catalogue.
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-12 rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Newsletter</p>
          <h2 className="text-3xl font-semibold text-brand-950">Receive new collection previews and bespoke launches.</h2>
          <p className="max-w-xl text-sm leading-7 text-brand-600">
            Join our luxury mailing list to receive stories, collection updates, and exclusive insights directly to your inbox.
          </p>
        </div>
        <div className="rounded-[2rem] border border-brand-200/70 bg-brand-950 p-8 text-white shadow-soft">
          <form onSubmit={handleSubscribe} className="space-y-5">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-white text-brand-950"
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" className="w-full sm:w-auto" size="lg">
                Subscribe
              </Button>
              {status === 'success' && <span className="text-sm text-accent">Subscribed successfully.</span>}
              {status === 'error' && <span className="text-sm text-brand-200">Unable to subscribe, please try again.</span>}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
