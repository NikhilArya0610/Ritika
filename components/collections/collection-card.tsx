'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/types/models';

export function CollectionCard({ category }: { category: Category }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-[2rem] border border-brand-200/80 bg-white/80 shadow-soft transition"
    >
      <Link href={`/collections/${category.slug}`} className="block">
        <div className="relative aspect-[3/2] overflow-hidden bg-brand-100">
          <Image
            src={category.featuredImage}
            alt={category.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
      <div className="space-y-2 p-6">
        <Link href={`/collections/${category.slug}`}> 
          <h3 className="text-xl font-semibold text-brand-950">{category.name}</h3>
        </Link>
        <p className="text-sm leading-6 text-brand-600">{category.description}</p>
      </div>
    </motion.article>
  );
}
