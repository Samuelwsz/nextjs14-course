import { NextResponse } from "next/server"

export async function POST(req: { json: () => any }, res: any) {
  let data = await req.json()
  console.log(data)

  return NextResponse.json({ res: "data send successfully" })
}
