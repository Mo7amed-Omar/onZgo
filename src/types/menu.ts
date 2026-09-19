export type MenuCategoryKey = 'signature' | 'espresso' | 'brews' | 'bites' | 'refreshers';

export interface MenuCategory {
  id: MenuCategoryKey;
  name: string;
  tagline: string;
  count: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryKey;
  price: string;
  description: string;
  notes?: string[];
  image: string;
  tags?: ('Signature' | 'Seasonal' | 'House Favorite' | 'Single Origin' | 'Plant-Based' | 'Fresh Baked')[];
  featured: boolean;
  intensity?: 1 | 2 | 3 | 4 | 5;
  calories?: string;
  allergens?: string[];
}

