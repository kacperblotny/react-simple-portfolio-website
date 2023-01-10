import React from 'react'
import programming from '../assets/programming.svg'

function landingpage() {
  return (
    <div className='flex h-screen w-screen pt-16 md:pt-32'>
      <div className='mx-auto flex w-4/5 md:flex-row'>
        <div className='my-auto text-black dark:text-white md:w-3/5'>
          <p>Hello, my name is</p>
          <p className='text-7xl'>Kacper Błotny</p>
          <p className='text-7xl'>Web developer</p>
          <p>
            I'm a beginner software engineer currently specilizing in front-end.
          </p>
          <a
            href='#'
            className='mt-8 flex h-min w-fit rounded bg-primary px-4 py-2 text-xl text-white duration-150 ease-in hover:scale-105 hover:text-white'
          >
            Read more about me!
          </a>
        </div>
        <img src={programming} alt='' className='md:w-3/5 md:pl-12' />
      </div>
    </div>
  )
}

export default landingpage
