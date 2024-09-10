"use client"

import React, { useState } from 'react'

interface Attachments{
    fallback: string
    text: string
}

interface Joke{
    attachments : Attachments[]
    username: string 
}

const Joke = () => {

    const [joke, setJoke] = useState<Joke | null>(null)

    const handleRandomClick = async()=>{
        try{
            const response = await fetch("https://icanhazdadjoke.com/slack")
            if(response.ok){
                const data: Joke = await response.json()
                setJoke(data)
            }else{
                throw new Error("Data fetching failed")
            }    
        }catch (error){
            console.log("The function failed", error)
        }
    }

    console.log(joke)

    return (
        <section className='flex flex-col items-center gap-12'>
            <button onClick={()=>handleRandomClick()}>Click Me</button>
            <p>{joke?.attachments[0]?.fallback}</p>
        </section>
    )
}

export default Joke
