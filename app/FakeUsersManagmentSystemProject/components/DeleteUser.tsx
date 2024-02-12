"use client"

import { Button, Input } from "@material-tailwind/react"
import { FormEvent, useState } from "react"

export default function DeleteUser() {
  const [id, setId] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!id) {
      setMessage("Please enter the user's ID.")
      return
    }

    try {
      const response = await fetch(
        `/FakeUsersManagmentSystemProject/api/users/${id}`,
        {
          method: "DELETE",
        }
      )

      if (response.ok) {
        setMessage("User successfully deleted.")
        clearForm()
      } else {
        const data = await response.json()
        setMessage(
          data.result || "Something went wrong while deleting the user."
        )
      }
    } catch (error: any) {
      setMessage(error.message)
    }
  }

  const clearForm = () => {
    setId("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          crossOrigin=""
          label="User ID"
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Button className="mt-2" type="submit" placeholder="">
          Delete User
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
