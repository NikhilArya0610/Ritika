'use client';

import Link from 'next/link';
import { Instagram, AtSign, MapPin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-200/70 bg-brand-100/70 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Ritika Atelier</p>
          <h3 className="max-w-xl text-3xl font-semibold text-brand-950">
            Curated luxury for modern living.
          </h3>
          <p className="max-w-lg text-sm leading-7 text-brand-700">
            Discover elevated home essentials and thoughtful objects designed for calm, elegant interiors.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Explore</p>
            <Link href="/collections" className="block text-sm text-brand-700 hover:text-brand-950">
              Collections
            </Link>
            <Link href="/products" className="block text-sm text-brand-700 hover:text-brand-950">
              Products
            </Link>
            <Link href="/about" className="block text-sm text-brand-700 hover:text-brand-950">
              About
            </Link>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Contact</p>
            <div className="flex items-center gap-2 text-sm text-brand-700">
              <AtSign className="h-4 w-4" />
              <span>hello@ritikaatelier.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-brand-700">
              <MapPin className="h-4 w-4" />
              <span>London • Paris • Milan</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-brand-700">
              <Instagram className="h-4 w-4" />
              <Link href="https://instagram.com/ritikaatelier" className="hover:text-brand-950">
                @ritikaatelier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
