import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { sampleCategories, sampleProducts } from '@/lib/mock-data';

export async function getAdminDashboardData() {
  if (!isSupabaseConfigured || !supabase) {
    return {
      productCount: sampleProducts.length,
      categoryCount: sampleCategories.length,
      customerCount: 0,
      enquiryCount: 0,
      recentEnquiries: []
    };
  }

  try {
    const [productsRes, categoriesRes, enquiriesRes, recentEnquiriesRes] = await Promise.all([
      supabase.from('products').select('id', { count: 'exact', head: true }).eq('status', 'active'),
      supabase.from('categories').select('id', { count: 'exact', head: true }),
      supabase.from('enquiries').select('id', { count: 'exact', head: true }),
      supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)
    ]);

    return {
      productCount: productsRes.count || 0,
      categoryCount: categoriesRes.count || 0,
      customerCount: 0,
      enquiryCount: enquiriesRes.count || 0,
      recentEnquiries: (recentEnquiriesRes.data || []).map((row) => ({
        id: row.id,
        product_id: row.product_id,
        user_id: row.user_id,
        message: row.message,
        status: row.status,
        created_at: row.created_at
      }))
    };
  } catch (error) {
    console.error('Error fetching admin dashboard data:', error);
    return {
      productCount: sampleProducts.length,
      categoryCount: sampleCategories.length,
      customerCount: 0,
      enquiryCount: 0,
      recentEnquiries: []
    };
  }
}
