"use client";

import React, { useEffect, useRef } from 'react';
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

const EditProd = ({ params }) => {
  const formRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/products/detail/${params.id}`);
        const item = response.data.product; // Access nested product object
        if (formRef.current) {
          formRef.current.elements.id.value = item.product_id;
          formRef.current.elements.name.value = item.product_name;
          formRef.current.elements.brand.value = item.product_brand;
          formRef.current.elements.price.value = item.product_price;
          formRef.current.elements.description.value = item.product_description;
          formRef.current.elements.category.value = item.product_category;
          formRef.current.elements.quantity.value = item.product_quantity;
          formRef.current.elements.model_id.value = item.product_model_id;
          formRef.current.elements.photo.value = item.product_photo;
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const updatedProduct = {
      product_id: form.elements.id.value,
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
      await axios.put(`http://localhost:8000/products/update/${params.id}/`, updatedProduct);
      alert('Product updated successfully!');
      router.push(`/products/view/${params.id}`); 
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card key="1" className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Update Product</CardTitle>
          <CardDescription>Modify the details of your product.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={handleUpdate} className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="id">ID</Label>
                <Input disabled id="id" name="id" placeholder="Product ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Product Name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" name="brand" placeholder="Brand Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" name="price" placeholder="Price" type="text" pattern="[0-9]+(.[0-9]+)?" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" placeholder="Product Description" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select  name="category" defaultValue="">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="casque">Casque</SelectItem>
                      <SelectItem value="clavier">Clavier</SelectItem>
                      <SelectItem value="souris">Souris</SelectItem>
                      <SelectItem value="laptop">Laptop</SelectItem>
                      <SelectItem value="desktop">Desktop</SelectItem>
                      <SelectItem value="tapis">Tapis</SelectItem>
                      <SelectItem value="webcam">Webcam</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" name="quantity" placeholder="Quantity" type="number" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="model_id">Model ID</Label>
                <Input id="model_id" name="model_id" placeholder="Model ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photo">Photo</Label>
                <Input id="photo" name="photo" placeholder="Photo" type="text" />
              </div>
            </div>
            <CardFooter>
              <Button type="submit" className="ml-auto">Update Product</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProd;