"use client"

import Link from "next/link"
import { useState } from "react"

export default function APIwithUI() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  const addNewUserHandler = async () => {
    let response = await fetch("APIwithUI/api", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    })

    response = await response.json()

    if (response.ok) {
      alert("User Successfully Created")
    } else {
      alert("An Error Occured While Creating The User.")
    }
  }

  return (
    <>
      <div className="bg-slate-400 p-5">
        <Link
          href="/"
          className="mb-4 text-slate-700 hover:underline font-semibold"
        >
          Voltar
        </Link>
        <div className="flex flex-col p-5 items-center min-h-screen ">
          <h1 className="text-3xl font-bold mb-8">Add New User</h1>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            placeholder="Enter Age"
          />
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
          />
          <button
            onClick={addNewUserHandler}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Add User
          </button>
        </div>
      </div>
    </>
  )
}
