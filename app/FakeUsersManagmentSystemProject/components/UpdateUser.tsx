"use client"

import { Button, Input } from "@material-tailwind/react"
import { FormEvent, useState } from "react"

interface RequestData {
  id: string
  name?: string
  email?: string
  password?: string
}

export default function UpdateUser() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!id) {
      setMessage("Please enter the user's ID.")
      return
    }

    const requestData: RequestData = {
      id,
    }

    if (name) {
      requestData.name = name
    }

    if (email) {
      requestData.email = email
    }

    if (password) {
      requestData.password = password
    }

    try {
      const response = await fetch(
        `/FakeUsersManagmentSystemProject/api/users`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      )

      if (response.ok) {
        setMessage("User information updated successfully.")
        clearForm()
      } else {
        const data = await response.json()
        setMessage(
          data.result || "Something went wrong while updating user information."
        )
      }
    } catch (error: any) {
      setMessage(error.message)
    }
  }

  const clearForm = () => {
    setId("")
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          crossOrigin=""
          type="text"
          label="ID"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          crossOrigin=""
          type="text"
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          crossOrigin=""
          type="text"
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          crossOrigin=""
          type="password"
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="mt-2" type="submit" placeholder="">
          Update User
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
