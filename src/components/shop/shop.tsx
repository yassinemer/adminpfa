"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps, useState, useEffect } from "react";
import axios from 'axios'; // Import axios
import { Product } from "../types";
import Link from "next/link";
import Image from 'next/image'; // Import Image component from next/image

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products/')
      .then((response) => {
        const fetchedProducts = response.data.products.map((item: any) => ({
          id: item.product_id,
          name: item.product_name,
          photo: item.product_photo,
          brand: item.product_brand,
          price: item.product_price,
          description: item.product_description,
          category: item.product_category,
          quantity: item.product_quantity,
          model_id: item.product_model_id,
        }));
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Store Collection</h1>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              className="block w-full pl-10 pr-4 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50 dark:border-gray-800"
              placeholder="Search products..."
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Product Management</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-200 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Brand</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-right">Quantity</th>
                  <th className="px-4 py-3 text-left">Model</th>
                  <th className="px-4 py-3 text-left">Photo</th>
                  <th className="px-4 py-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-4 py-3">{product.id}</td>
                    <td className="px-4 py-3">{product.name}</td>
                    <td className="px-4 py-3">{product.brand}</td>
                    <td className="px-4 py-3 text-right">${product.price}</td>
                    <td className="px-4 py-3">{product.description}</td>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3 text-right">{product.quantity}</td>
                    <td className="px-4 py-3">{product.model_id}</td>
                    <td className="px-4 py-3">
                      <img
                        src={product.photo || "/placeholder.svg"}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="rounded-md object-cover"
                      />
                    </td>
                    <td className="px-4 py-3">
                    <Link href={`/products/view/${product.id}`} className="text-blue-500 hover:underline" prefetch={false}>
    View Details
</Link>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

const SearchIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};
