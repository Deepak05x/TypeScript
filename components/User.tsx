"use client"

import React from 'react'
import { useContext } from 'react'
import { UserContextApi } from './UserContext'
import {User as UserType} from './UserContext'


const User = () => {

    const {user, addUser} = useContext(UserContextApi)

  return (
    <div className='flex flex-col items-center w-full py-24 '>
        {user?.map((item: UserType,index:number)=>(
            <div key={index} className='flex gap-12 items-center w-full justify-between text-center'>
                <p className='text-black text-2xl'>{item.name}</p>
                <p>{item?.address?.street}</p>
                <p>{item?.address?.geo?.lat}</p>
                <p>{item.email}</p>
            </div>
        ))}
    </div>
  )
}

export default User
