import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ProdCard = ({product}) => {
  return (
    <Link href={`/products/view/${product.id}`}>
    <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ">
              <img
                alt="Product Image"
                className="w-full  object-scale-down"
                src={product.photo}
                style={{
                  aspectRatio: '400/300',

                }}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">{product.name}</h3>
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">{product.brand}</h4>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{product.description.slice(0, 25) + (product.description.length > 25 ? '...' : '')}</p>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{product.quantity}</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">${product.price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            </Link>
  )
}

export default ProdCard