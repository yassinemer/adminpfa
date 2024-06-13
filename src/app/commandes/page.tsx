"use client";
import React from 'react'
import { Input } from "@/components/ui/input";
import { JSX, SVGProps, useState, useEffect } from "react";
import axios from 'axios';
import Link from "next/link";
import { Sale } from "../../components/types"; // Assuming you have a Sale type defined

const Commande = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products/sales/')
      .then((response) => {
        const fetchedSales = response.data.map((sale: any) => ({
          id: sale.id,
          productName: sale.product_name,
          saleDate: sale.sale_date,
          quantity: sale.quantity,
        }));
        setSales(fetchedSales);
      })
      .catch((error) => {
        console.error('Error fetching sales data:', error);
      });
  }, []);

  const filteredSales = sales.filter((sale) =>
    sale.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Monthly Sales Data</h1>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              className="block w-full pl-10 pr-4 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50 dark:border-gray-800"
              placeholder="Search months..."
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Sales Management</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-200 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left">Product Name</th>
                  <th className="px-4 py-3 text-left">Sale Date</th>
                  <th className="px-4 py-3 text-right">Quantity</th>
                  <th className="px-4 py-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredSales.map((sale, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3">{sale.productName}</td>
                    <td className="px-4 py-3">{sale.saleDate}</td>
                    <td className="px-4 py-3 text-right">{sale.quantity}</td>
                    <td className="px-4 py-3">
                      <Link href={`/sales/view/${sale.id}`} className="text-blue-500 hover:underline" prefetch={false}>
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

export default Commande

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
