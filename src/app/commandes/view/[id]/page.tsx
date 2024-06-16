"use client";
import { ViewOrder } from '@/components/component/view-order'
import { useRouter } from 'next/router'
import React from 'react'


const viewCommande = ({params}) => {

  
  
  return (
    <ViewOrder id={params.id}  />
  )
}

export default viewCommande 