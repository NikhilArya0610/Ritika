import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Product } from '@/types/models';
import { sampleProducts } from '@/lib/mock-data';

export async function getProducts(category?: string) {
  if (!isSupabaseConfigured || !supabase) {
    return category ? sampleProducts.filter((product) => product.category === category) : sampleProducts;
  }

  try {
    let query = supabase
      .from('products')
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

export async function getProductBySlug(slug: string) {
  if (!isSupabaseConfigured || !supabase) {
    return sampleProducts.find((product) => product.slug === slug) ?? null;
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'active')
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null;
      }
      console.error('Error fetching product:', error);
      return sampleProducts.find((product) => product.slug === slug) ?? null;
    }

    if (!data) return null;

    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      category: data.category,
      description: data.description,
      specifications: data.specifications || {},
      images: data.images || [],
      featured: data.featured || false,
      status: data.status,
      createdAt: data.created_at,
      updatedAt: data.updated_at
    } as Product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return sampleProducts.find((product) => product.slug === slug) ?? null;
  }
}
