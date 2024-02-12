"use client"

import { Button, Input } from "@material-tailwind/react"
import { FormEvent, useState } from "react"

export default function CreateUser() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState<number | undefined>()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!id || !name || !email || !password) {
      alert("Please fill all the input fields")
      return
    }

    try {
      const response = await fetch(
        "/FakeUsersManagmentSystemProject/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, name, age, email, password }),
        }
      )

      if (response.ok) {
        alert("User successfully created.")
        clearForm()
      } else {
        alert("Something went wrong :(")
        return
      }
    } catch (error) {
      alert(error)
      return
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
          label="ID"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          crossOrigin=""
          label="Name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          crossOrigin=""
          label="Age"
          type="number"
          placeholder="Age"
          value={age || ""}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <Input
          crossOrigin=""
          label="Email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          crossOrigin=""
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="mt-2" type="submit" placeholder="">
          Submit
        </Button>
      </form>
    </div>
  )
}
