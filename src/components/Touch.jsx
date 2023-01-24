import React from 'react'
import Popup from './popup'
import Contactform from './Contactform.jsx'
import { useState } from 'react'

function Touch() {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <>
      <div
        id='contactScroll'
        className='flex w-screen flex-col items-center justify-evenly bg-white pt-48 text-black dark:bg-primaryBG dark:text-white'
      >
        <div className='flex flex-col px-12 pb-8 md:w-2/3 md:p-0'>
          <div className='flex pb-8' data-aos='fade-right' data-aos-delay='200'>
            <h2 className='text-4xl md:min-w-fit'>
              <span className='pr-2 text-primary'>04.</span> Let's get in touch
            </h2>
            <div className='my-auto mx-4 flex h-px bg-primary md:w-full'></div>
          </div>
        </div>
        <div className='flex flex-col p-4'>
          <div>
            <h2 className='text-center text-2xl'>
              Feel free to contact me on my social medias or via email!
            </h2>
            <div className='flex justify-center'>
              <a
                href='https://www.linkedin.com/in/kacper-b%C5%82otny-b4046924a/'
                target='_blank'
                className='socials p-2 hover:text-primary dark:text-white dark:hover:text-primary'
              >
                <ion-icon name='logo-linkedin' size='large'></ion-icon>
              </a>
              <a
                href='https://github.com/KacperBlotny'
                target='_blank'
                className='socials p-2 hover:text-primary dark:text-white dark:hover:text-primary'
              >
                <ion-icon name='logo-github' size='large'></ion-icon>
              </a>
              <a
                href='https://twitter.com/'
                target='_blank'
                className='socials p-2 hover:text-primary dark:text-white dark:hover:text-primary'
              >
                <ion-icon name='logo-twitter' size='large'></ion-icon>
              </a>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                className='socials p-2 hover:text-primary dark:text-white dark:hover:text-primary'
              >
                <ion-icon name='logo-instagram' size='large'></ion-icon>
              </a>
              <a
                href='#popupMail'
                id='popupMail'
                className='socials  p-2 hover:text-primary dark:text-white dark:hover:text-primary'
                onClick={() => setButtonPopup(true)}
              >
                <ion-icon name='mail-outline' size='large'></ion-icon>
              </a>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Contactform />
              </Popup>
            </div>
          </div>
          <div className='pt-16'>
            <h2 className='text-xl'>
              Here is a calculator to estimate your spendings on my work, if you
              wish to co-operate!
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Touch
