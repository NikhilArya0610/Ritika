import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ConvertedHome() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] text-[#000]"> 
      <header className="sticky top-0 z-20 bg-[#3a050d] text-[#fff] backdrop-blur-md">
        <div className="mx-auto max-w-[1180px] grid grid-cols-1 md:grid-cols-3 items-center gap-6 py-6 px-4">
          <nav className="hidden md:flex gap-8 items-center text-sm tracking-wide">
            <a href="/collections/best-seller" className="hover:text-[#e4dfb5]">Best Sellers</a>
            <a href="/collections/new-arrival" className="hover:text-[#e4dfb5]">New Arrivals</a>
            <a href="/collections/rings" className="hover:text-[#e4dfb5]">Rings</a>
          </nav>

          <a href="/" className="flex flex-col items-center justify-center">
            <Image src="/images/ritika_logo.png" alt="Ritika" width={220} height={60} className="object-contain"/>
            <span className="mt-1 text-[12px] font-serif uppercase">Ritika Rajawat Fine Jewellery Atelier</span>
          </a>

          <nav className="hidden md:flex justify-end gap-6 items-center">
            <a href="/pages/contact" className="hover:text-[#e4dfb5]">Contact</a>
            <a href="/search" className="hover:text-[#e4dfb5]">Search</a>
            <a href="/cart" className="inline-flex items-center rounded-full border border-white/20 px-3 py-2">Cart</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-[1180px] grid md:grid-cols-2 gap-8 items-center py-20 px-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-[#b68a47] font-bold">Exquisite Heirlooms</p>
          <h1 className="mt-4 font-serif text-[clamp(28px,5vw,56px)] leading-tight">Timeless Modern Jewellery, Crafted to Be Treasured</h1>
          <p className="mt-6 text-[#6f625a] max-w-2xl">Ritika Rajawat Fine Jewellery Atelier creates modern heirlooms rooted in regal Indian detail, thoughtful craftsmanship, and personal celebration.</p>
          <div className="mt-8 flex gap-4">
            <Button className="bg-[#000] text-white px-6 py-3 rounded-full">Shop Best Sellers</Button>
            <Button variant="outline" className="px-6 py-3 rounded-full">Explore New Arrivals</Button>
          </div>
        </div>
        <div className="rounded-[28px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.12)] bg-gradient-to-br from-[#e4dfb5] to-[#fffdf8] min-h-[420px] flex items-center justify-center">
          <Image src="/images/ritika_fevicon_logo_1.png" alt="feature" width={900} height={600} className="object-cover"/>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] py-12 px-4">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white rounded-[18px] p-6 shadow"> 
            <h3 className="font-serif text-lg">Craftsmanship</h3>
            <p className="mt-2 text-sm text-[#6f625a]">Thoughtful making and refined finishing.</p>
          </div>
          <div className="bg-white rounded-[18px] p-6 shadow"> 
            <h3 className="font-serif text-lg">Gemstones</h3>
            <p className="mt-2 text-sm text-[#6f625a]">Hand-selected natural gemstones.</p>
          </div>
          <div className="bg-white rounded-[18px] p-6 shadow"> 
            <h3 className="font-serif text-lg">Finish</h3>
            <p className="mt-2 text-sm text-[#6f625a]">Tactile, lasting surface treatments.</p>
          </div>
          <div className="bg-white rounded-[18px] p-6 shadow"> 
            <h3 className="font-serif text-lg">Consultation</h3>
            <p className="mt-2 text-sm text-[#6f625a]">Personal appointments by request.</p>
          </div>
        </div>
      </section>

      <footer className="mt-20 bg-[#000] text-[#fff]">
        <div className="mx-auto max-w-[1180px] grid md:grid-cols-4 gap-6 py-16 px-4">
          <div>
            <h3 className="font-serif text-xl">Ritika Rajawat</h3>
            <p className="mt-3 text-[14px] text-[#fffdf8]">Fine Jewellery Atelier</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop</h4>
            <ul className="space-y-2 text-[14px] text-[#fffdf8]">
              <li><a href="/collections/best-seller">Best Sellers</a></li>
              <li><a href="/collections/new-arrival">New Arrivals</a></li>
              <li><a href="/collections/necklace">Necklaces</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-2 text-[14px] text-[#fffdf8]">
              <li><a href="/pages/contact">Contact</a></li>
              <li><a href="/search">Search</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Promise</h4>
            <p className="text-[14px] text-[#fffdf8]">Sustainably sourced metals and hand-finished pieces.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
