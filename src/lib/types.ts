export interface CatalogProduct {
  id: string;
  name: string;
  description: string;
  category: 'utama' | 'secondary';
  subcategory: string;
  basePrice: number;
  priceUnit: string;
  features?: string[];
  materials?: string[];
  hasCalculator: boolean;
  calculatorType?: 'huruf_timbul' | 'neon_box' | 'rambu' | 'printing_standard';
  imageUrl?: string;
}

export interface OrderItem {
  id: string;
  productName: string;
  calculatorType: string;
  details: {
    wording?: string;
    height?: number;
    width?: number;
    shape?: string;
    material?: string;
    illumination?: string;
    sides?: string;
    quantity: number;
    customNote?: string;
  };
  estimatedPrice: number;
}

export interface OrderDetails {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  requiresInstallation: boolean;
  items: OrderItem[];
  totalPrice: number;
}

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
