import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Category } from '@/types/models';
import { sampleCategories } from '@/lib/mock-data';

export async function getCategories() {
  if (!isSupabaseConfigured || !supabase) {
    return sampleCategories;
  }

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching categories:', error);
      return sampleCategories;
    }

    return (data || []).map((row) => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      description: row.description,
      featuredImage: row.featured_image
    })) as Category[];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return sampleCategories;
  }
}

export async function getCategoryBySlug(slug: string) {
  if (!isSupabaseConfigured || !supabase) {
    return sampleCategories.find((category) => category.slug === slug) ?? null;
  }

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null;
      }
      console.error('Error fetching category:', error);
      return sampleCategories.find((category) => category.slug === slug) ?? null;
    }

    if (!data) return null;

    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description,
      featuredImage: data.featured_image
    } as Category;
  } catch (error) {
    console.error('Error fetching category:', error);
    return sampleCategories.find((category) => category.slug === slug) ?? null;
  }
}
