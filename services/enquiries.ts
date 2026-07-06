import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function createEnquiry(productId: string, message: string, userId?: string) {
  if (!isSupabaseConfigured || !supabase) {
    return { id: 'mock-' + Date.now(), productId, message, userId: userId ?? '', status: 'new', createdAt: new Date().toISOString() };
  }

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .insert([
        {
          product_id: productId,
          user_id: userId ?? null,
          message,
          status: 'new'
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Error creating enquiry:', error);
      return { id: 'mock-' + Date.now(), productId, message, userId: userId ?? '', status: 'new', createdAt: new Date().toISOString() };
    }

    return {
      id: data.id,
      productId: data.product_id,
      message: data.message,
      userId: data.user_id || '',
      status: data.status,
      createdAt: data.created_at
    };
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return { id: 'mock-' + Date.now(), productId, message, userId: userId ?? '', status: 'new', createdAt: new Date().toISOString() };
  }
}
