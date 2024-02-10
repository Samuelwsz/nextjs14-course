import { users } from "@/app/FakeUsersManagmentSystemProject/utils/db"
import fs from "fs"
import { NextResponse } from "next/server"

// 2. Get Specific User
export async function GET(
  _: any,
  res: { params: PromiseLike<{ id: any }> | { id: any } }
) {
  const { id } = await res.params
  const user = users.filter((u) => u.id === id)

  return NextResponse.json({ user })
}

// 3. Login
export async function POST(req: any, res: any) {
  let { name, email, password } = await req.json()
  const { id } = await res.params

  const user = users.find((u) => u.id === id)

  if (!user) {
    return NextResponse.json({ result: "User not found" })
  }

  const { name: uName, email: uEmail, password: uPassword } = user

  {
    /* const {
    name: uName,
    email: uEmail,
    password: uPassword,
  } = users.find((u) => u.id === id)*/
  }

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: "Successfully logged in" })
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Please fill all the input fileds" })
  } else {
    return NextResponse.json({ result: "Invalid Credentials" })
  }
}

// 6. Delete User
export async function DELETE(req: any, res: any) {
  const { id } = await res.params

  // Find the index of the user to delete in the users array
  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 })
  }

  // Remove the user from the users array
  users.splice(userIndex, 1)

  // Update the user data in the db.js file
  updateUserData()

  return NextResponse.json({ success: "User Successfully Deleted" })
}

function updateUserData() {
  const updatedData = `export const users = ${JSON.stringify(users, null, 2)};`
  fs.writeFileSync(
    "./app/FakeUsersManagmentSystemProject/utils/db.ts",
    updatedData,
    "utf-8"
  )
}
