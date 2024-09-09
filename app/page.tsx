import React from 'react'
import Button from '@/components/Button'
import Person from '@/components/Person'
import User from '@/components/User'


const Home = () => {

  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center'>
      <Person name={'Deepak'} age={45} isMarried={false} />
      <User />
    </section>
  )
}

export default Home