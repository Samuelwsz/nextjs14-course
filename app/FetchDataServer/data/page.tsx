import Link from "next/link"

interface Product {
  id: number
  title: string
  // Add other properties as needed
}

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")

  const data = await response.json()

  return data
}

export default async function DataServer() {
  let products = await fetchData()

  return (
    <div className="mb-20">
      <Link href="/FetchDataClient">Voltar</Link>
      {products?.map((p: Product) => (
        <p className="border border-black m-5 py-2 px-4" key={p.id}>
          {p.title}
        </p>
      ))}
    </div>
  )
}
