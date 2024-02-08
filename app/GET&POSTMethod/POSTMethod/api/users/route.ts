import { NextResponse } from "next/server"

// nesse arquivo fui usando o postman para realizar os testes de backend

export async function POST(req: { json: () => any }, res: any) {
  let { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json(
      { error: "required filed not found" },
      { status: 400 }
    )
  }

  return NextResponse.json({ res: "data send successfully" })
}

