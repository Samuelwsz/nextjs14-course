import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center py-56">
      <div>Not Found</div>
      <Link href="/">Voltar</Link>
    </div>
  )
}
