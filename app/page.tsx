import React from 'react'
import Person from '@/components/Person'
import User from '@/components/User'
import Joke from '@/components/Joke'


const Home = () => {

  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center'>
      <Person name={'Deepak'} age={45} isMarried={false} />
      <User />
      <Joke />
    </section>
  )
}

export default Home