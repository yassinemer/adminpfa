export interface Product {
    id: string;
    name: string;
    photo: string;
    brand: string | null;
    price: number | null;
    description: string | null;
    category: string | null;
    quantity: number | null;
    model_id: string | null;
  }
  export interface Order {
    order_id: number;
    total_order_price: string;
    order_status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  }
  
  