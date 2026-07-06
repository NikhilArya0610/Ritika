'use client';

import { useQuery } from '@tanstack/react-query';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Category } from '@/types/models';
import { sampleCategories } from '@/lib/mock-data';

async function fetchCategories() {
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

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5
  });
}
