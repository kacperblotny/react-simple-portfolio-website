import React from 'react'
import Popup from './Popup'
import Contactform from './Contactform.jsx'
import { useState } from 'react'

function footer() {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className='flex w-full bg-lightElementBg text-black dark:bg-darkElementBg dark:text-white'>
      <div className='m-auto my-16 flex'>
        {/*  */}
        <div>
          <h2 className='text-center'>You can find me here</h2>
          <div className='flex'>
            <a
              href=''
              className='socials p-2 hover:text-primary dark:text-white dark:hover:text-primary'
            >
              <ion-icon name='logo-linkedin' size='large'></ion-icon>
            </a>
            <a
              href=''
              className='socials p-2 hover:text-primary dark:text-white dark:hover:text-primary'
            >
              <ion-icon name='logo-github' size='large'></ion-icon>
            </a>
            <a
              href='#'
              className='socials  p-2 hover:text-primary dark:text-white dark:hover:text-primary'
              onClick={() => setButtonPopup(true)}
            >
              <ion-icon name='mail-outline' size='large'></ion-icon>
            </a>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <Contactform />
            </Popup>
            <a
              href=''
              className='socials p-2 hover:text-primary dark:text-white dark:hover:text-primary'
            >
              <ion-icon name='logo-instagram' size='large'></ion-icon>
            </a>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default footer
