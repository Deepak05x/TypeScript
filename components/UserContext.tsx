"use client"

import React, { createContext, useEffect, useState } from 'react'

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

export interface User{
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

const UserContextInitial: UserContextValues = {
    user: null,
    addUser: ()=> {},
}

export const UserContextApi = createContext<UserContextValues>(UserContextInitial)


const UserContext = ({children}: Props) => {

    const [user, setUser] = useState<User[] | null>(null)

    const addUser = (newUser: User)=>{
        setUser((prevUser)=> (prevUser ? [...prevUser, newUser] : [newUser]))
    }

    const fetchUser = async()=>{
        try {
             const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                    throw new Error("Failed to fetch data")
                }else{
                    const data: User[] = await response.json()
                    setUser(data)
                }
        } catch (error) {
                console.log("Failed to run the function")
        }
       
    }

    useEffect(()=>{
        fetchUser()
    },[])

  return (
    <UserContextApi.Provider value={{user, addUser}}>
        {children}
    </UserContextApi.Provider>
  )
}

export default UserContext
