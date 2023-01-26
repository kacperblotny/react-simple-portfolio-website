import React from 'react'

function landingpage() {
  return (
    <div className='bg-pri flex h-screen w-screen pt-32'>
      <div className='mx-auto w-4/5'>
        <div className='mx-auto text-black dark:text-white md:w-4/5 md:pt-44'>
          <p
            className='pb-8 text-primary'
            data-aos='fade-right'
            data-aos-delay='700'
          >
            Hello, my name is
          </p>
          <p
            className='text-6xl md:text-7xl'
            data-aos='fade-right'
            data-aos-delay='700'
          >
            Kacper Błotny
          </p>
          <p
            className='pb-8 text-4xl text-gray-400 md:text-7xl'
            data-aos='fade-right'
            data-aos-delay='700'
          >
            I'm a beginner Web developer
          </p>
          <p className='md:w-2/5' data-aos='fade-right' data-aos-delay='700'>
            I'm a web developer specializing in building full-stack web
            applications. Currently I'm focusing on building projects to extend
            my skills and knowledge.
          </p>
          <span data-aos='fade-right' data-aos-delay='900'>
            <a
              href='#readMore'
              className='mt-8 flex h-min w-fit rounded bg-primary px-4 py-2 text-xl text-white transition duration-500 hover:scale-105 hover:bg-blue-600'
            >
              Read more about me!
            </a>
          </span>
        </div>
        <div id='readMore' className='mt-24'></div>
      </div>
    </div>
  )
}

export default landingpage
