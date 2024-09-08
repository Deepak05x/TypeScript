
import React from 'react'

type ButtonProp = {
    backgroundColor: string,
    textColor: string,
    pillShape?: boolean
} 

let name:string = "deepak"
let ages: number[] = [1,2,23,4]

const Button = ({backgroundColor, textColor} : ButtonProp) => {

  

  return (
    <div className='bg-black text-white px-12 py-8 text-2xl rounded-lg'>Click Me</div>
  )
}

export default Button