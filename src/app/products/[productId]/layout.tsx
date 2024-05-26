import { PropsWithChildren } from "react";

export default function ProductDetailLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Layout product detail</h1>
      {children}
    </div>
  )
}
