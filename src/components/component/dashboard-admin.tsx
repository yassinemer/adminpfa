"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsiveBar } from '@nivo/bar';
import { TableHead, TableRow, TableHeader, TableBody, Table } from '@/components/ui/table';

export function DashboardAdmin() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/orders/topSold/')
      .then((response) => {
        const fetchedProducts = response.data.map((item) => ({
          id: item.product_id,
          name: item.product_name,
          brand: item.product_brand,
          totalSold: item.total_sold,
          totalProfit: item.total_profit,
        }));
        setProducts(fetchedProducts);

        // Fetch sales data for each product
        const salesPromises = fetchedProducts.map(product =>
          axios.get(`http://localhost:8000/orders/saleGraph/${product.id}`)
            .then(response => ({
              productId: product.id,
              productName: product.name,
              sales: response.data
            }))
        );

        Promise.all(salesPromises)
          .then((salesResponses) => {
            const aggregatedSalesData = salesResponses.flatMap(({ productName, sales }) =>
              sales.map(item => ({
                name: `${productName} - ${item.month}`,
                count: item.total_sale_quantity,
              }))
            );
            setSalesData(aggregatedSalesData);
          })
          .catch((error) => {
            console.error('Error fetching sales data:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
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
              <TableHead>Brand</TableHead>
              <TableHead>Total Sold</TableHead>
              <TableHead>Total Profit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableHead>{product.id}</TableHead>
                <TableHead>{product.name}</TableHead>
                <TableHead>{product.brand}</TableHead>
                <TableHead>{product.totalSold}</TableHead>
                <TableHead>{product.totalProfit}</TableHead>
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
