"use client";

import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";

export function ViewProd({ id }) {
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {

      axios.get(`${process.env.NEXT_PUBLIC_API}/products/detail/${id}/`)
        .then(response => {
          setProduct(response.data.product);
          console.log(response.data.product);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    }
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${process.env.NEXT_PUBLIC_API}/products/delete/${id}`)
      .then(() => {
        toast({
        title: "Product deleted successfully",
        description: "Product deleted successfully",
      })
        router.push('/products'); 
      })
      .catch(error => {
        toast({
          title: "Error deleting product",
          description: "Error deleting product"+error,
        })
      });
  };

  return (
    <>
      {product === null ? (
        <></>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 ">
            <div className="grid gap-4 md:gap-10 items-start">
              <div className="hidden md:flex items-start">
                <div className="grid gap-4">
                  <h1 className="font-bold text-3xl lg:text-4xl">{product.product_name}</h1>
                  <h4 className="font-bold text-2xl lg:text-2xl">REF:{product.product_model_id}</h4>
                  <div>
                    
                    <p className="text-gray-500 dark:text-gray-400">{product.product_brand}</p>
                  </div>
                  <div className="text-3xl font-bold">{product.product_price}</div>
                  
                  <div className="flex items-center gap-2">
                    <Label className="text-base" htmlFor="quantity">Quantity</Label>
                    
                      
                    <span className="text-gray-500 dark:text-gray-400">({product.product_quantity} in stock)</span>
                  </div>
                  <div className="flex gap-2">
                    
                    <div className="flex justify-end gap-2">
                      <Button 
                        className="bg-green-500 text-white hover:bg-green-600" 
                        variant="outline"
                        onClick={() => router.push(`/products/view/${product.product_id}/edit/`)}
                      >
                        Update
                      </Button>
                      <Button 
                        className="bg-red-500 text-white hover:bg-red-600" 
                        variant="outline"
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 text-sm leading-loose">
                <p>{product.product_description}</p>
              </div>
            </div>
            <div className="grid gap-3 items-start">
              <div className="grid gap-4">
                <img
                  alt="Product Image"
                  className="aspect-square object-scale-down border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={600}
                  src={product.product_photo}
                  width={600}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}