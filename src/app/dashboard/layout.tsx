import Link from "next/link";
import { ReactNode } from "react"

type Props = {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
  login: ReactNode;
}

export default function DashboardLayout({ children, users, revenue, notifications, login }: Props) {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <ul>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Dashboard settings</Link>
      </ul>
      {children}
      <div>
        {users}
      </div>
      <div>
        {revenue}
      </div>
      <div>
        {notifications}
      </div>
    </div>
  ) : login;
}
