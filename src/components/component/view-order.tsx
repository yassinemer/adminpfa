"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import OrderStatus from "../ui/p";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ViewOrder({ id }) {
  const [order, setOrder] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/orders/${id}`)
        .then((response) => {
          setOrder(response.data);
        })
        .catch((error) => {
          console.error("Error fetching order:", error);
        });
    }
  }, [id]);

  const handleDelete = async (e) => {
    const updatedOrder = {
      new_status: "cancelled",
    };

    try {
      // Send the updated order status to the backend
      await axios.post(`http://localhost:8000/orders/update/${id}/`, updatedOrder);
      toast({
        title: "Order updated successfully!",
        description: "Order updated successfully!",
      });

      router.push(`/commandes`);
    } catch (error) {
      console.error("Error updating order:", error);
      toast({
        title: "Error updating order",
        description: "Error updating order",
      });
    }
  };

  return (
    <>
      {order === null ? (
        <></>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
            <div className="grid gap-4 md:gap-10 items-start">
              <div className="hidden md:flex items-start">
                <div className="grid gap-4">
                  <h1 className="font-bold text-3xl lg:text-4xl">Order #{order.order_id}</h1>
                  <h4 className="font-bold text-2xl lg:text-2xl">Total Price: {order.total_order_price}</h4>
                  <div>
                    Status:<OrderStatus status={order.order_status} />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex justify-end gap-2">
                      <Button
                        className="bg-green-500 text-white hover:bg-green-600"
                        variant="outline"
                        onClick={() => router.push(`/commandes/view/${order.order_id}/edit/`)}
                      >
                        Update Status
                      </Button>
                      <Button
                        className="bg-red-500 text-white hover:bg-red-600"
                        variant="outline"
                        onClick={handleDelete}
                      >
                        Cancel Order
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 text-sm leading-loose">
                {order.items.length === 0 ? (
                  <p>No items in this order</p>
                ) : (
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} - {item.quantity} x ${item.price}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
