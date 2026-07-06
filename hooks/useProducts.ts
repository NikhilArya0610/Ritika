'use client';

import { useQuery } from '@tanstack/react-query';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Product } from '@/types/models';
import { sampleProducts } from '@/lib/mock-data';

const collectionName = 'products';

async function fetchProducts(category?: string) {
  if (!isSupabaseConfigured || !supabase) {
    return category ? sampleProducts.filter((product) => product.category === category) : sampleProducts;
  }

  try {
    let query = supabase
      .from(collectionName)
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: false });

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching products:', error);
      return sampleProducts;
    }

    return (data || []).map((row) => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      category: row.category,
      description: row.description,
      specifications: row.specifications || {},
      images: row.images || [],
      featured: row.featured || false,
      status: row.status,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    })) as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    return sampleProducts;
  }
}

export function useProducts(category?: string) {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => fetchProducts(category),
    staleTime: 1000 * 60 * 2
  });
}
