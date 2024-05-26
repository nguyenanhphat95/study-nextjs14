'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";

const LINKS = [
  { name: 'Login', href: '/login' },
  { name: 'Forgot password', href: '/forgot-password' },
  { name: 'Register', href: '/register' },
]

export default function AuthLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [value, setValue] = useState('');
  return (
    <h1>
      <div>
        <input value={value} onChange={e => setValue(e.target.value)} />
      </div>
      {LINKS.map(link => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link style={{ color: isActive ? 'black' : 'blue' }} href={link.href} key={link.name}>{link.name}</Link>
        )
      })}
    </h1>
  )
}
