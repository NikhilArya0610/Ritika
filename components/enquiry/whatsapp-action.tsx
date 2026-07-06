'use client';

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Product } from '@/types/models';

export function WhatsappAction({ product }: { product: Product }) {
  const [isSaving, setIsSaving] = useState(false);

  async function handleEnquiry() {
    setIsSaving(true);
    
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('enquiries').insert([
          {
            product_id: product.id,
            user_id: null,
            message: `Hi, I am interested in ${product.name}. Please share price, availability, delivery details. Thank you.`,
            status: 'new'
          }
        ]);
      } catch (error) {
        console.error('Error creating enquiry:', error);
      }
    }

    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '')}?text=${encodeURIComponent(
        `Hi,%0A%0AI am interested in ${product.name}.%0A%0APlease share price, availability and delivery details.%0A%0AThank you.`
      )}`,
      '_blank'
    );
    setIsSaving(false);
  }

  return (
    <Button onClick={handleEnquiry} className="w-full" size="lg" disabled={isSaving}>
      <MessageSquare className="mr-3 h-5 w-5" />
      {isSaving ? 'Saving...' : 'Request Information'}
    </Button>
  );
}
