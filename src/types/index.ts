export interface Product {
  id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  price: number;
  image: string;
  category: 'coffee' | 'fruit';
  customizations: Customization[];
}

export interface Customization {
  id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  price: number;
  type: 'additive' | 'choice';
  options?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedCustomizations: Customization[];
  totalPrice: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  customerLocation?: {
    latitude: number;
    longitude: number;
  };
  whatsappNumber: string;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'delivered';
}

export interface Language {
  code: 'ar' | 'fr' | 'en';
  name: string;
  flag: string;
}

export interface StoreSettings {
  whatsappNumber: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
    addressAr: string;
    addressFr: string;
  };
}
