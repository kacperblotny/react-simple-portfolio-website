import React from 'react'

function Socials() {
  return (
    <>
      <div className='fixed bottom-0 left-0 hidden px-4 md:block'>
        <ul>
          <li className='py-1 duration-150 hover:-translate-y-1'>
            {' '}
            <a
              href='https://www.linkedin.com/in/kacper-b%C5%82otny-b4046924a/'
              target='_blank'
              className='socials2 p-2 text-2xl  hover:text-primary dark:text-white dark:hover:text-primary'
              data-aos='fade-right'
              data-aos-delay='1500'
            >
              <ion-icon name='logo-linkedin' className=''></ion-icon>
            </a>
          </li>
          <li className='py-1 duration-150 hover:-translate-y-1'>
            {' '}
            <a
              href='https://github.com/KacperBlotny'
              target='_blank'
              className='socials2 p-2 text-2xl hover:text-primary dark:text-white dark:hover:text-primary'
              data-aos='fade-right'
              data-aos-delay='1400'
            >
              <ion-icon name='logo-github' className=''></ion-icon>
            </a>
          </li>
          <li className='py-1 duration-150 hover:-translate-y-1'>
            {' '}
            <a
              href='https://www.instagram.com/'
              target='_blank'
              className='socials2 p-2 text-2xl hover:text-primary dark:text-white dark:hover:text-primary'
              data-aos='fade-right'
              data-aos-delay='1300'
            >
              <ion-icon name='logo-instagram' className=''></ion-icon>
            </a>
          </li>
          <li className='py-1 duration-150 hover:-translate-y-1'>
            <a
              href='https://twitter.com/'
              target='_blank'
              className='socials2 p-2 text-2xl hover:text-primary dark:text-white dark:hover:text-primary'
              data-aos='fade-right'
              data-aos-delay='1200'
            >
              <ion-icon name='logo-twitter' className=''></ion-icon>
            </a>
          </li>
          <li>
            <div className='mx-auto mt-2 flex h-24 w-px bg-black dark:bg-white'></div>
          </li>
        </ul>
      </div>
      <div className='vertical-rl fixed bottom-0 right-0 hidden px-6 md:block'>
        <a
          href='mailto:blotnykacper@gmail.com'
          className='verticalText cursor-pointer text-left duration-150 hover:-translate-y-1 hover:text-primary dark:text-white dark:hover:text-primary'
          data-aos='fade-left'
          data-aos-delay='1000'
        >
          blotnykacper@gmail.com
        </a>
        <div className='mx-auto mt-4 flex h-24 w-px bg-black dark:bg-white'></div>
      </div>
    </>
  )
}

export default Socials
