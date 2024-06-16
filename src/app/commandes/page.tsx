"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";
import { Order } from "../../components/types"; 
import { Input } from '../../components/ui/input';
import OrderStatus from '@/components/ui/p';

const Commande = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/orders/all/')
      .then((response) => {
        const fetchedOrders: Order[] = response.data.orders.map((order: any) => ({
          order_id: order.order_id,
          total_order_price: order.total_order_price,
          order_status: order.order_status
        }));
        // Sort orders by order_id before setting state
        const sortedOrders = fetchedOrders.sort((a, b) => a.order_id - b.order_id);
        setOrders(sortedOrders);
      })
      .catch((error) => {
        console.error('Error fetching orders data:', error);
      });
  }, [searchTerm]);

  const filteredOrders = orders.filter((order) =>
    String(order.order_id).includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Order List</h1>
          <div className="mb-4">
            <Input
              className="block w-full pl-10 pr-4 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50 dark:border-gray-800"
              placeholder="Search id order..."
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-200 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left">Order ID</th>
                  <th className="px-4 py-3 text-left">Total Price</th>
                  <th className="px-4 py-3 text-left">Order Status</th>
                  <th className="px-4 py-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredOrders.map((order) => (
                  <tr key={order.order_id}>
                    <td className="px-4 py-3">{order.order_id}</td>
                    <td className="px-4 py-3">{order.total_order_price}</td>
                    <td className="px-4 py-3"><OrderStatus status={order.order_status} /></td>
                    <td className="px-4 py-3">
                      <Link href={`/commandes/view/${order.order_id}`} className="text-blue-500 hover:underline" prefetch={false}>
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

export default Commande;
