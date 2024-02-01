"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Page1() {
  const router = useRouter()

  const navigate = (page: string) => {
    router.push(page)
  }

  return (
    <div className="p-3">
      <div>UseRouter</div>

      <div className="my-3">
        <button
          className="border border-black px-2 py-1"
          onClick={() => navigate("page2")}
        >
          Go to page2
        </button>
      </div>

      <Link href="/" className="bg-gray-400 text-white p-1 rounded-md">
        Voltar
      </Link>
    </div>
  )
}
