"use client";
import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from "../../../../../components/ui/use-toast";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import OrderStatus from '@/components/ui/p';

const EditCommande = ({ params }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const { toast } = useToast()

  useEffect(() => {
    // Fetch the order details and populate the form fields
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/orders/${params.id}`);
        const order = response.data.order;
        if (formRef.current) {
          formRef.current.elements.status.value = order.status;
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };

    fetchOrder();
  }, [params.id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const updatedOrder = {
      new_status: form.elements.status.value,
    };

    try {
      // Send the updated order status to the backend
      await axios.post(`http://localhost:8000/orders/update/${params.id}/`, updatedOrder);
      toast({
        title: "Order updated successfully!",
        description: "Order updated successfully!",
      })
  
      router.push(`/commandes/view/${params.id}`); 
    } catch (error) {
      console.error('Error updating order:', error);
      toast({
        title: "Error updating order",
        description: "Error updating order",
      })
    }
  };

  const handleReturn = () => {
    // Navigate back to the order details page
    router.push(`/commandes/view/${params.id}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card key="1" className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Update Order #{params.id}</CardTitle>
          <CardDescription>Modify the status of the order.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={handleUpdate} className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select name="status">
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending"><OrderStatus status="pending" /></SelectItem>
                  <SelectItem value="confirmed"><OrderStatus status="confirmed" /></SelectItem>
                  <SelectItem value="shipped"><OrderStatus status="shipped" /></SelectItem>
                  <SelectItem value="delivered"><OrderStatus status="delivered" /></SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CardFooter>
              <Button type="submit">Update Order</Button>
              <Button type="button" onClick={handleReturn} className="ml-2">Return</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditCommande;
