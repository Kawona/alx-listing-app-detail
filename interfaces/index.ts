export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Address {
  city: string;
  country: string;
}

export interface Property {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: Review[];
  category: string[];
  address: {
    city: string;
    country: string;
  }
}
