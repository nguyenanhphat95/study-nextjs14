import Link from "next/link";

export default function HomePage() {
  return (
    <main >
      Home page
      <h1>
        <Link href="/about">About</Link>
      </h1>
      <h1>
        <Link href="/products">Product</Link>
      </h1>

    </main>
  );
}
