"use client"

import { Card, List, ListItem } from "@material-tailwind/react"
import { useEffect, useState } from "react"

interface User {
  id: string
  name: string
}
export default function AllUsers() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch("/FakeUsersManagmentSystemProject/api/users")
      const usersInfo = await response.json()
      setUsers(usersInfo.data)
    }
    fetchAllUsers()
  }, [])

  return (
    <div>
      {users &&
        users.map((user) => (
          <Card key={user.id} className="mb-4" placeholder="">
            <List placeholder="">
              <ListItem placeholder="">{user.name}</ListItem>
            </List>
          </Card>
        ))}
    </div>
  )
}
