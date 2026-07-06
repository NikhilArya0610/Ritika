'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, Search, Heart } from 'lucide-react';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/" className="text-lg font-semibold tracking-tight text-brand-950">
            Ritika Atelier
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-700 transition hover:text-brand-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex" size="sm">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Link href="/login" className="text-sm font-medium text-brand-700 transition hover:text-brand-950">
            Sign in
          </Link>
          <Button size="sm" asChild>
            <Link href="/contact">Enquire</Link>
          </Button>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 text-brand-700 transition hover:bg-brand-100">
            <Heart className="h-5 w-5" />
          </button>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 text-brand-700 transition hover:bg-brand-100 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
