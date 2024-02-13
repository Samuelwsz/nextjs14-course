"use client"

import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

const NavbarAuth = () => {
  const { data: session } = useSession()

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto">
        <ul className="flex justify-between">
          <div className="one flex">
            <li className="mx-4">
              <Link href="/" className="text-white font-bold">
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/dashboard" className="text-white font-bold">
                Dashboard
              </Link>
            </li>
          </div>

          <div className="auth flex">
            {!session ? (
              <>
                <li className="mx-4">
                  <Link href="/login" className="text-white font-bold">
                    Login
                  </Link>
                </li>
                <li className="mx-4">
                  <Link href="/register" className="text-white font-bold">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <p className="mb-4">{session.user?.email}</p>

                <li>
                  <button
                    onClick={() => {
                      signOut()
                    }}
                    className="p-2 px-5 mb-[2rem] bg-red-600 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarAuth
