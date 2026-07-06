'use client';

import { useCategories } from '@/hooks/useCategories';
import { CollectionCard } from '@/components/collections/collection-card';
import { SectionHeading } from '@/components/ui/section-heading';

export default function CollectionsPage() {
  const { data: categoriesData, isLoading } = useCategories();
  const categories = Array.isArray(categoriesData) ? categoriesData : [];

  return (
    <section className="space-y-10">
      <div className="rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft">
        <SectionHeading title="Collections" description="Explore the subject areas that define our design vocabulary." />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <div className="rounded-[2rem] border border-brand-200/70 bg-white/90 p-12 text-center text-brand-500">Loading collections...</div>
        ) : categories.length ? (
          categories.map((category) => <CollectionCard key={category.id} category={category} />)
        ) : (
          <div className="rounded-[2rem] border border-brand-200/70 bg-white/90 p-12 text-brand-700">
            Collections are not available yet. Add category documents in Firestore to populate this page.
          </div>
        )}
      </div>
    </section>
  );
}
