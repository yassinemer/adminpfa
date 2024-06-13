"use client";
import { ViewProd } from '@/components/component/view-prod'
import { useRouter } from 'next/router'
import React from 'react'


const Product = ({params}) => {

  console.log(params.id);
  
  return (
    <ViewProd id={params.id}  />
  )
}

export default Product