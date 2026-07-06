import { Category, Product } from '@/types/models';

export const sampleCategories: Category[] = [
  {
    id: 'collection-1',
    name: 'Dining Objects',
    slug: 'dining-objects',
    description: 'Textured ceramics and sculptural serving pieces for elegant tables.',
    featuredImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'collection-2',
    name: 'Living Spaces',
    slug: 'living-spaces',
    description: 'Soft textiles and statement accessories for minimal interiors.',
    featuredImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  }
];

export const sampleProducts: Product[] = [
  {
    id: 'product-1',
    name: 'Ceramic Pillar Candleholder',
    slug: 'ceramic-pillar-candleholder',
    category: 'dining-objects',
    description: 'A hand-finished ceramic candleholder with a tactile matte glaze.',
    specifications: {
      Material: 'Stoneware',
      Height: '18 cm',
      Finish: 'Matte ivory'
    },
    images: ['https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'],
    featured: true,
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'product-2',
    name: 'Textured Linen Throw',
    slug: 'textured-linen-throw',
    category: 'living-spaces',
    description: 'A soft linen throw designed for understated comfort in modern interiors.',
    specifications: {
      Material: 'Linen',
      Size: '140 x 200 cm',
      Care: 'Dry clean only'
    },
    images: ['https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'],
    featured: true,
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];
