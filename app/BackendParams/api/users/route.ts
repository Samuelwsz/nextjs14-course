import { NextResponse } from "next/server"
import { users } from "../../utils/db"

// pagina dentro da pasta api precisam ser chamadas de route.ts

export function GET() {
  const data = users

  return NextResponse.json({ data })
}
