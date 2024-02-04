import Link from "next/link"

export default function FetchDataClient() {
  return (
    <section>
      <h1>page FetchDataClient</h1>
      <div>
        <Link href="/FetchDataClient/data">Data content</Link>
      </div>
      <Link href="/">Voltar</Link>
    </section>
  )
}
