"use client"

import { Button, Card, Input, ListItem } from "@material-tailwind/react"
import { useState } from "react"

export default function SpecificUser() {
  const [userId, setUserId] = useState("")
  const [userData, setUserData] = useState(null)

  const fetchUserData = async () => {
    const response = await fetch(
      `/FakeUsersManagmentSystemProject/api/users/${userId}`
    )

    if (response.ok) {
      const res = await response.json()
      setUserData(res.user)
    } else {
      console.log("Error fetching user data")
      setUserData(null)
    }
  }

  return (
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

          <Button onClick={fetchUserData} placeholder="">
            Fetch User
          </Button>
        </div>
      </div>
    </div>
  )
}
