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
export interface Sale {
    month: string;
    total_sale: number;
    id:string,
          productName: string,
          saleDate: string,
          quantity: number,
  }
  