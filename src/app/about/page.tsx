import { Metadata } from "next"

// export const metadata = {
//   title: 'About',
// }

export const metadata: Metadata = {
  title: {
    absolute: 'About'
  }
}

export default function AboutPage() {
  return (
    <div>AboutPage</div>
  )
}
