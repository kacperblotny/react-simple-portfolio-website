import React from 'react'

function landingpage() {
  return (
    <div className='bg-pri flex h-screen w-screen pt-16 md:pt-32'>
      <div className='mx-auto w-4/5'>
        <div className='mx-auto text-black dark:text-white md:w-4/5 md:pt-44'>
          <p className='pb-8 text-primary'>Hello, my name is</p>
          <p className='text-7xl'>Kacper Błotny</p>
          <p className='pb-8 text-7xl text-gray-400'>
            I'm a beginner Web developer
          </p>
          <p className='md:w-3/5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut
            fugit esse repellat cumque natus error placeat ullam quidem quisquam
            exercitationem cum fuga ipsam facere officia magni, minus architecto
            recusandae illo ab. Ipsum, excepturi ex!{' '}
            <a href='#' className='text-primary hover:text-primary'>
              Lorem
            </a>
          </p>
          <a
            href='#readMore'
            className='mt-8 flex h-min w-fit rounded bg-primary px-4 py-2 text-xl text-white duration-150 ease-in hover:scale-105 hover:text-white'
          >
            Read more about me!
          </a>
        </div>
        <div id='readMore' className='absolute bottom-0'></div>
      </div>
    </div>
  )
}

export default landingpage
