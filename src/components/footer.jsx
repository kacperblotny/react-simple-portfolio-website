import React from 'react'
import Popup from './Popup'
import Contactform from './Contactform.jsx'
import { useState } from 'react'

function footer() {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className='flex w-full bg-lightElementBg text-black dark:bg-darkElementBg dark:text-white'>
      <div className='mx-auto my-8 flex'>
        {/*  */}
        <div>
          <h2 className='text-center'>You can find me here</h2>
          <div className='flex'>
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
          <p className='pt-8 text-center text-sm text-gray-500'>
            Designed and built by Kacper Błotny
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default footer
