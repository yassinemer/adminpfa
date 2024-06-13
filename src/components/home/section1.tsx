"use client";

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Home1 = () => {
  const router = useRouter()	;

  return (
    <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-950">
        <div className="container mx-auto flex flex-col-reverse items-center gap-8 px-4 md:flex-row md:gap-12 lg:gap-20">
          <div className="flex flex-1 flex-col items-start gap-6">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Elevate Your Gaming Experience
            </h1>
            <p className="text-gray-600 dark:text-gray-400 md:text-lg">
            Discover the latest gaming gear and accessories to take your gameplay to the next level.
            </p>
            <Button className="w-full sm:w-auto" size="lg" onClick={()=>{router.push("/products")}} >
              Shop Now
            </Button>
          </div>
          <div className="flex flex-1 justify-center">
            <Image
              alt="Hero Product"
              className="max-w-full rounded-lg shadow-lg"
              height="500"
              src="/home.jpg"
              style={{
                aspectRatio: "500/500",
                objectFit: "cover",
              }}
              width="500"
            />
          </div>
        </div>
      </section>
  )
}

export default Home1