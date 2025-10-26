export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'rent' | 'sell';
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  image_url: string;
  features: string[];
  status: 'available' | 'pending' | 'sold' | 'rented';
  created_at: string;
  updated_at: string;
}
