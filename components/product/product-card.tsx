'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/models';

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-brand-200/80 bg-white/80 shadow-soft transition"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <Badge>{product.category}</Badge>
        </div>
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="text-xl font-semibold text-brand-950">{product.name}</h3>
        </Link>
        <p className="text-sm leading-6 text-brand-600 line-clamp-2">{product.description}</p>
      </div>
    </motion.article>
  );
}
