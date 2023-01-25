import React from 'react'
import Schumacher from '../assets/schumacher2.png'
import Rpe from '../assets/rpe.png'

function Slider() {
  return (
    <div className='w-screen bg-white dark:bg-primaryBG'>
      <div className='hidden h-72 md:block'></div>
      <div id='projectsScroll'></div>
      <div className='h-48'></div>
      <div
        className='mx-auto flex flex-col px-4 md:w-4/5'
        data-aos='fade-left'
        data-aos-delay='200'
      >
        <div className='bg-blue-700-50 flex px-4 md:ml-auto'>
          <div className='my-auto mx-4 flex h-px bg-primary md:w-96'></div>
          <h2 className=' min-w-fit text-4xl text-black dark:text-white'>
            <span className='pr-2 text-primary'>02.</span> My projects
          </h2>
        </div>
      </div>
      <div
        id='controls-carousel'
        class='relative mx-auto flex aspect-video bg-white text-black dark:bg-primaryBG dark:text-white md:w-3/4'
        data-carousel='static'
        data-aos='fade-in'
        data-aos-delay='200'
      >
        <div class='relative mx-auto aspect-video w-8/12 overflow-hidden rounded-lg md:w-11/12'>
          <div class='hidden duration-700 ease-in-out' data-carousel-item>
            <a href='https://rpelux.pl/' target='_blank'>
              <img
                src={Rpe}
                class='absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 rounded bg-primaryBG'
                alt='...'
              />
            </a>
          </div>
          <div
            class='hidden w-full duration-700 ease-in-out'
            data-carousel-item
          >
            <a href='https://schumacher.pl/' target='_blank'>
              <img
                src={Schumacher}
                class='absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 rounded'
                alt='...'
              />
            </a>
          </div>

          <div class='hidden duration-700 ease-in-out' data-carousel-item>
            <a href='https://rpelux.pl/' target='_blank'>
              <img
                src={Rpe}
                class='absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 rounded bg-primaryBG'
                alt='...'
              />
            </a>
          </div>

          <div
            class=' hidden w-full duration-700 ease-in-out'
            data-carousel-item
          >
            <a href='https://schumacher.pl/' target='_blank'>
              <img
                src={Schumacher}
                class='absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 rounded'
                alt='...'
              />
            </a>
          </div>
        </div>

        <button
          type='button'
          class='group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4'
          data-carousel-prev
        >
          <span class='g inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 group-hover:bg-white/50  dark:bg-gray-50/30 dark:group-hover:bg-gray-100/60 dark:group-focus:ring-gray-800/70'>
            <svg
              aria-hidden='true'
              class='h-6 w-6 text-black dark:text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
            <span class='sr-only'>Previous</span>
          </span>
        </button>

        <button
          type='button'
          class='group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4'
          data-carousel-next
        >
          <span class='g inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 group-hover:bg-white/50  dark:bg-gray-50/30 dark:group-hover:bg-gray-100/60 dark:group-focus:ring-gray-800/70'>
            <svg
              aria-hidden='true'
              class='h-6 w-6 text-black dark:text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
            <span class='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Slider
