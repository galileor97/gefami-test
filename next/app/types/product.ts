export interface ProductSpecifications {
  [key: string]: string | string[];
}

export interface ProductAvailability {
  inStock: boolean;
  quantity: number;
  warehouse: string;
}

export interface ProductRatings {
  average: number;
  totalReviews: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  brand: string;
  description: string;
  specifications: ProductSpecifications;
  availability: ProductAvailability;
  ratings: ProductRatings;
  tags: string[];
  createdAt: string;
  updatedAt: string;
} 