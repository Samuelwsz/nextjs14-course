import Link from "next/link"

export default function FetchDataServer() {
  return (
    <section>
      <h1>page FetchDataServer</h1>
      <div>
        <Link href="/FetchDataServer/data">Data content</Link>
      </div>
      <Link href="/">Voltar</Link>
    </section>
  )
}
