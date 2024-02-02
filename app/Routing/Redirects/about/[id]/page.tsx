import Link from "next/link"
import { redirect } from "next/navigation"

export default function UserId({ params }: any) {
  if (params.id == 4) {
    redirect("/Routing/Redirects/login")
  }

  return (
    <div>
      <div>user {params.id}</div>
      <Link href="/">Voltar</Link>
    </div>
  )
}
