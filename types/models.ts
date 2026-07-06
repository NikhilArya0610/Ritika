export type ProductStatus = 'draft' | 'active' | 'archived';

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  featured: boolean;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredImage: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  wishlist: string[];
  createdAt: string;
};

export type Enquiry = {
  id: string;
  userId: string;
  productId: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved';
  createdAt: string;
};

export type HomepageSection = {
  featuredProducts: string[];
  featuredCollections: string[];
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroImage: string;
};

export type SiteSettings = {
  id: string;
  brandName: string;
  description: string;
  contactEmail: string;
  whatsappNumber: string;
  instagramHandle: string;
  themeMode: 'light' | 'dark';
};
