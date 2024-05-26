"use client"
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
  params: {
    productId: string;
    reviewId: string;
  }
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({ params }: Props) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw Error('Error in review detail');
  }

  if (+params.reviewId === 1) {
    throw Error('This is error message')
  }

  if (+params.reviewId > 1000) {
    notFound();
  }

  return (
    <div>Review - {params.reviewId}, Product - {params.productId}</div>
  )
}
