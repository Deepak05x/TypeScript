
import React from 'react'

type ButtonProp = {
    backgroundColor: string,
    textColor: string,
    pillShape?: boolean
} 

const Button = ({backgroundColor, textColor} : ButtonProp) => {

  

  return (
    <div className='bg-black text-white px-12 py-8 text-2xl rounded-lg'>Click Me</div>
  )
}

export default Button