"use client"

import { Button, Card, Input, List, ListItem } from "@material-tailwind/react"
import { useState } from "react"

interface User {
  id: string
  name: string
  age: number
  email: string
  password: string
}

export default function SpecificUser() {
  const [userId, setUserId] = useState("")
  const [userData, setUserData] = useState<User[] | null>(null)

  const fetchUserData = async () => {
    const response = await fetch(
      `/FakeUsersManagmentSystemProject/api/users/${userId}`
    )

    if (response.ok) {
      const res = await response.json()
      setUserData(res.user)
      clearForm()
    } else {
      console.log("Error fetching user data")
      setUserData(null)
    }
  }

  const clearForm = () => {
    setUserId("")
  }

  return (
    <>
      <div>
        <div className="flex">
          <div className="w-72">
            <Input
              crossOrigin=""
              label="Enter User ID"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <Button onClick={fetchUserData} placeholder="">
            Fetch User
          </Button>
        </div>

        {userData ? (
          userData.map((d) => (
            <Card key={d.id} className="w-96 mt-5" placeholder="">
              <List placeholder="">
                <ListItem placeholder="">ID: {d.id}</ListItem>
                <ListItem placeholder="">Name: {d.name}</ListItem>
                <ListItem placeholder="">Age: {d.age}</ListItem>
                <ListItem placeholder="">Email: {d.email}</ListItem>
                <ListItem placeholder="">Password: {d.password}</ListItem>
              </List>
            </Card>
          ))
        ) : (
          <p className="mt-2">Search for a specific user</p>
        )}
      </div>
    </>
  )
}
