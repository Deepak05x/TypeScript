"use client"

import React, { useContext, createContext } from 'react'

interface Props{
    children: React.ReactNode
} 


interface Geo{
    lat: string
    lng: string
}


interface Address{
    street: string
    suite: string
    geo: Geo | null
}

interface User{
    id: number
    name: string
    username: string
    email: string
    address: Address | null
}

interface UserContextValues{
    user: User[] | null
    addUser: (user: User) => void
}

const UserContextApi = createContext<UserContextValues | undefined>(undefined)


const UserContext = ({children}: Props) => {
  return (
    <div>
      
    </div>
  )
}

export default UserContext
