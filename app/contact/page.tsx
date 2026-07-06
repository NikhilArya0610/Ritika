'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createEnquiry } from '@/services/enquiries';
import { WhatsappAction } from '@/components/enquiry/whatsapp-action';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await createEnquiry('', `Contact enquiry from ${name} - ${email}: ${message}`);
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="space-y-8 rounded-[2.5rem] border border-brand-200/70 bg-white/90 p-10 shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-950">Send a bespoke enquiry</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-700">
            Share your requirements, and our curated team will respond with product availability and styling advice.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" required />
            <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" required />
          </div>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={6}
            placeholder="Leave a short message about your enquiry"
            className="w-full rounded-2xl border border-brand-200 bg-white/90 px-4 py-4 text-sm text-brand-950 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-accent/20"
            required
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" size="lg">
              Send enquiry
            </Button>
            {status === 'success' && <p className="text-sm text-accent">Message submitted. We will reach out shortly.</p>}
            {status === 'error' && <p className="text-sm text-brand-700">Something went wrong. Please try again.</p>}
          </div>
        </form>
      </section>
      <aside className="space-y-8 rounded-[2.5rem] border border-brand-200/70 bg-brand-950 p-10 text-white shadow-soft">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Request information</p>
          <h2 className="text-3xl font-semibold">Chat directly via WhatsApp.</h2>
          <p className="text-sm leading-7 text-brand-200/90">
            If you need product details, availability, or delivery guidance, use our WhatsApp flow for a quick response.
          </p>
        </div>
        <WhatsappAction product={{ id: '', name: 'Ritika Atelier Collection', slug: '', category: 'Contact', description: '', specifications: {}, images: ['https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'], featured: true, status: 'active', createdAt: '', updatedAt: '' }} />
      </aside>
    </div>
  );
}
