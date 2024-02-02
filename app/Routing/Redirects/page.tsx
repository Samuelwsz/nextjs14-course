import Link from "next/link"

export default function Redirects() {
  return (
    <div>
      <div>page redirects</div>
      <div>
        <Link href="/Routing/Redirects/about">about</Link>
      </div>
      <div>
        <Link href="/">Voltar</Link>
      </div>
    </div>
  )
}
