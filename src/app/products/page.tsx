import Link from 'next/link'
import React from 'react'

export default function Products() {
  return (
    <div>
      List Products
      <h1>
        <Link href='/products/1'>Product 1</Link>
      </h1>
      <h1>
        <Link href='/products/2'>Product 2</Link>
      </h1>
      <h1>
        {/* The replace prop replaces the current history state instead of adding new url to the stack */}
        <Link href='/products/2' replace>Product 3</Link>
      </h1>
    </div>
  )
}
