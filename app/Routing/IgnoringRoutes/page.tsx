import Link from "next/link"

// (auth) deixar o parenteses faz com que a rota auth seja ignorada.
//ao inves de usar /Routing/IgnoringRoutes/auth/login
// pode ser usado dessa maneira /Routing/IgnoringRoutes/login

export default function IgnoringRoutes() {
  return (
    <div className="p-3">
      <div>page IgnoringRoutes</div>
      <div className="flex flex-col">
        <Link href="/Routing/IgnoringRoutes/login">login</Link>
        <Link href="/Routing/IgnoringRoutes/register">register</Link>
        <Link href="/">Voltar</Link>
      </div>
    </div>
  )
}
