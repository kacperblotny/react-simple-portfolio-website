import React from 'react'
import programming from '../assets/programming.svg'

function landingpage() {
  return (
    <div className='flex h-screen w-screen pt-16 md:pt-32'>
      <div className='mx-auto flex flex-col md:flex-row'>
        <div className='my-auto w-full text-black dark:text-white md:w-96'>
          <div className='m-w-fit'>
            <p>Hello, my name is</p>
            <p className='text-7xl'>Kacper Błotny</p>
            <p className='text-7xl'>Web developer</p>
            <p>
              I'm a beginner software engineer currently specilizing in
              front-end.
            </p>
          </div>
          <div>
            <a
              href='#'
              className='mt-8 flex h-min w-fit rounded bg-primary px-4 py-2 text-xl text-white duration-150 ease-in hover:scale-105 hover:text-white'
            >
              Read more about me!
            </a>
          </div>
        </div>
        <img src={programming} alt='' className='md:pl-12' />
      </div>
    </div>
  )
}

export default landingpage
