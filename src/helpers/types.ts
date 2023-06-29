export type FetchedProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type Product = Pick<
  FetchedProduct,
  'id' | 'title' | 'price' | 'description' | 'rating' | 'category' | 'thumbnail'
>;

export type CartItem = {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  amount: number;
};
