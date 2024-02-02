//"use client"

import Link from "next/link"

export default function User({ params }: any) {
  return (
    <div>
      <div>page user</div>
      <h1>Info about {params.user}</h1>
      <Link href="/Routing/DynamicRoutes/userlist">Voltar</Link>
    </div>
  )
}
