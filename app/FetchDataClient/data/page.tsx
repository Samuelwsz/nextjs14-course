"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface Product {
  id: number
  title: string
  // Add other properties as needed
}

export default function DataClient() {
  const [product, setProduct] = useState<Product[] | undefined>(undefined)

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="mb-20">
      <Link href="/FetchDataClient">Voltar</Link>
      <ul>
        {product?.map((p) => (
          <li className="border border-black m-5 py-2 px-4" key={p.id}>
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
