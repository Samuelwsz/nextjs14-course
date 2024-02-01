import Link from "next/link"

// o que eu escrever na url vai aparecer como params na pagina user

export default function UserList() {
  return (
    <div>
      <div>page user list</div>
      <Link href="/">Voltar</Link>
    </div>
  )
}
