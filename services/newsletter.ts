import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function subscribeNewsletter(email: string) {
  if (!isSupabaseConfigured || !supabase) {
    return 'mock-' + Date.now();
  }

  try {
    const { data, error } = await supabase
      .from('newsletter')
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      console.error('Error subscribing to newsletter:', error);
      return 'mock-' + Date.now();
    }

    return data.id;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return 'mock-' + Date.now();
  }
}
