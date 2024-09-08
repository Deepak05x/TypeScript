"use client"

import React, { useState } from 'react'

interface Props {
    name: string;
    age: number
    isMarried: boolean
}

const Person = ({name, age, isMarried}: Props) => {

  const [showInfo, setShowInfo] = useState<boolean>(false)
  const [input, setInput] = useState<string | null>("")

  const handleClick = ()=>{
    setShowInfo((prev)=> !prev)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setInput(event.target.value)
  }

  return (
    <div className='flex flex-col gap-12'>
        {showInfo && (
            <div className='flex flex-col items-center'>
                <p>Name : {name}</p>
                <p>Age : {age}</p>
                <p>Married : {isMarried ? "Yes" : "No" }</p>
            </div>
        )}
        <button onClick={()=>handleClick()}>Click Me</button>
        <p>{name} Bio : <span>{!input ? "No Bio" : input}</span></p>
        <input type="text" onChange={handleChange} className='bg-black text-white' />
    </div>
  )
}

export default Person