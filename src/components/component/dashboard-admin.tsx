"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsiveBar } from '@nivo/bar';
import { TableHead, TableRow, TableHeader, TableBody, Table } from '@/components/ui/table';
import Image from 'next/image';

export function DashboardAdmin() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch products
    axios.get('http://localhost:8000/products/')
      .then((response) => {
        const fetchedProducts = response.data.products.map((item) => ({
          id: item.product_id,
          name: item.product_name,
          photo: item.product_photo,
          brand: item.product_brand,
          price: item.product_price,
          description: item.product_description,
          category: item.product_category,
          quantity: item.product_quantity,
          model: item.product_model_id,
        }));
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });

    // Fetch sales data
    axios.get('http://localhost:8000/products/topmonth')
      .then((response) => {
        console.log('Sales Data Response:', response.data); // Log the response data
        // Transform the object into an array
        const fetchedSalesData = Object.entries(response.data).map(([month, total_sale]) => ({
          name: month,
          count: total_sale,
        }));
        setSalesData(fetchedSalesData);
      })
      .catch((error) => {
        console.error('Error fetching sales data:', error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Top Selling Products</h2>
        </div>
        <BarChart className="aspect-[16/9]" data={salesData} />
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Top 5 Products With Details</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Model ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableHead>{product.id}</TableHead>
                <TableHead>{product.name}</TableHead>
                <TableHead>
                  <Image
                    src={product.photo}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </TableHead>
                <TableHead>{product.brand}</TableHead>
                <TableHead>{product.price}</TableHead>
                <TableHead>{product.description}</TableHead>
                <TableHead>{product.category}</TableHead>
                <TableHead>{product.quantity}</TableHead>
                <TableHead>{product.model}</TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function BarChart({ data, ...props }) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
