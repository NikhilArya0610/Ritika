'use client';

import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/product/product-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Input } from '@/components/ui/input';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const { data: productsData, isLoading } = useProducts();
  const products = Array.isArray(productsData) ? productsData : [];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="space-y-10">
      <div className="space-y-4 rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft">
        <SectionHeading title="Products" description="Browse the complete catalogue of curated lifestyle and home products." />
        <div className="max-w-md">
          <Input
            placeholder="Search products or categories"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {isLoading ? (
          <div className="rounded-[2rem] border border-brand-200/70 bg-white/80 p-12 text-center text-brand-500">Loading products...</div>
        ) : filteredProducts.length ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="rounded-[2rem] border border-brand-200/70 bg-white/90 p-12 text-brand-700">
            No products match your search. Try a broader keyword or browse the featured collections.
          </div>
        )}
      </div>
    </section>
  );
}
