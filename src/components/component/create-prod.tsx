"use client";
import React, { useRef } from 'react';
import axios from 'axios';
import {
  CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useToast } from "../ui/use-toast";

const CreateProd = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const { toast } = useToast()

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const newProduct = {
      product_name: form.elements.name.value,
      product_brand: form.elements.brand.value,
      product_price: form.elements.price.value,
      product_description: form.elements.description.value,
      product_category: form.elements.category.value,
      product_quantity: form.elements.quantity.value,
      product_model_id: form.elements.model_id.value,
      product_photo: form.elements.photo.value,
    };

    try {
      await axios.post(`http://localhost:8000/products/create/`, newProduct);
      toast({
        title: "Product created successfully!",
        description: "Product created successfully!",
      })
  
      router.push(`/products`); 
    } catch (error) {
      console.error('Error creating product:', error);
      toast({
        title: "Error creating product",
        description: "Error creating product",
      })
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card key="1" className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Create New Product</CardTitle>
          <CardDescription>Fill in the details of your new product.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={handleCreate} className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Product Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" name="brand" placeholder="Brand Name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" name="price" placeholder="Price" type="number" step="0.01" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" placeholder="Product Description" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select  name="category" defaultValue="">
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                  <SelectItem value="Video Games">Video Games</SelectItem>
<SelectItem value="Gaming Consoles">Gaming Consoles</SelectItem>
<SelectItem value="Gaming Accessories">Gaming Accessories</SelectItem>
<SelectItem value="Gaming Hardware">Gaming Hardware</SelectItem>
<SelectItem value="Gaming Merchandise">Gaming Merchandise</SelectItem>
<SelectItem value="Gaming Apparel">Gaming Apparel</SelectItem>
<SelectItem value="Gaming Collectibles">Gaming Collectibles</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" name="quantity" placeholder="Quantity" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model_id">Model ID</Label>
                <Input id="model_id" name="model_id" placeholder="Model ID" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo">Photo</Label>
              <Input id="photo" name="photo" placeholder="Photo" type="text" />
            </div>
            <CardFooter>
              <Button type="submit" className="ml-auto">Create Product</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProd;
