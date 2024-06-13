"use client";

import axios from "axios";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

export function CreateProd() {
  const [formData, setFormData] = useState({
    product_name: "",
    product_photo: "",
    product_brand: "",
    product_price: "",
    product_description: "",
    product_category: "",
    product_quantity: "",
    product_model_id: "",
    
  });

  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are not empty
    const isFormValid = Object.values(formData).every(value => value.trim() !== "");
    console.log(formData);
    if (isFormValid) {
      axios.post(`${process.env.NEXT_PUBLIC_API}products/create/`, formData)
        .then(response => {
          toast({
            title: "Product created successfully!",
            action: <ToastAction altText="ok">ok</ToastAction>,
          })
        })
        .catch(error => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        });
    } else {
      toast({
        title: "Please fill in all fields",
        description: "Please fill in all fields",
        
      })
      
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
              Product Name
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="product_name"
              placeholder="Enter product name"
              type="text"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="photo">
              Product Photo
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="product_photo"
              placeholder="Enter photo link"
              type="text"
              onChange={handleChange}
            />
          </div>

        {
          formData.product_photo && (
            <div>
              <img src={formData.product_photo} 
              alt={formData.product_name} 
              className="w-32 h-32 object-cover rounded-md" />
            </div>
          )
        }

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="brand">
              Product Brand
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="product_brand"
              placeholder="Enter product brand"
              type="text"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold  text-gray-700 dark:text-gray-300" htmlFor="price">
              Product Price
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="product_price"
              placeholder="Enter product price"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="description">
              Product Description
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="product_description"
              placeholder="Enter product description"
              rows={3}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="category">
              Product Category
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="product_category"
              onChange={handleChange}
            >
              <option>Video Games</option>
              <option>Gaming Consoles</option>
              <option>Gaming Accessories</option>
              <option>Gaming Hardware</option>
              <option>Gaming Merchandise</option>
              <option>Gaming Apparel</option>
              <option>Gaming Collectibles</option>

            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="quantity">
              Product Quantity
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="product_quantity"
              placeholder="Enter product quantity"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="model">
              Product Model ID
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              id="product_model_id"
              placeholder="Enter product model ID"
              type="text"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <div className="mt-6 flex justify-end">
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Save Product
        </button>
      </div>
    </div>
  )
}
