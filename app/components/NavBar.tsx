"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <nav>
      {pathname !== "/Layout/login/loginadmin" ? (
        <ul>
          <li>
            <Link href="/Layout/login/loginadmin">Login Admin</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href="/Layout/login/loginuser">Login Regular User</Link>
          </li>
        </ul>
      )}
      {/*
        <ul className="flex gap-3 justify-center">
          <li>
            <Link href="/Layout">login main</Link>
          </li>
          <li>
            <Link href="/Layout/login/loginadmin">login admin</Link>
          </li>
          <li>
            <Link href="/Layout/login/loginuser">login user</Link>
          </li>
        </ul>
      */}
    </nav>
  )
}
