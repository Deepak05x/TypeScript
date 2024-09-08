import React from 'react'
import Button from '@/components/Button'
import Person from '@/components/Person'


const Home = () => {

  return (
    <section className='min-h-screen w-full flex items-center justify-center'>
      <Person name={'Deepak'} age={45} isMarried={false} />
    </section>
  )
}

export default Home