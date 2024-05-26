import { Metadata } from 'next'
import React from 'react'

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`)
    }, 100);
  });

  return {
    title: `Products ${title}`,
  }
}
export default function ProductDetailPage({ params }: Props) {
  return (
    <div>ProductDetailPage - {params.productId}</div>
  )
}


