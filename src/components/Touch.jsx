import React from 'react'
import Popup from './Popup'
import Contactform from './Contactform.jsx'
import { useState } from 'react'

function Touch() {
  const [buttonPopup, setButtonPopup] = useState(false)

  const [message, setMessage] = useState('')
  const [workTimeDisplay, setWorkTime] = useState('')

  const handleChange = (event) => {
    const business = document.getElementById('business')
    const front = document.getElementById('front')
    const back = document.getElementById('back')

    let workTime = event.target.value
    setWorkTime(workTime)

    let workTimeCounter = 0

    if (business.checked == true) {
      workTimeCounter += 1
    }
    if (front.checked == true) {
      workTimeCounter += 1
    }
    if (back.checked) {
      workTimeCounter += 1
    }

    setMessage(workTimeCounter * workTime * 20)
  }

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
          <div className='mt-16 bg-lightElementBg p-8 dark:bg-darkElementBg'>
            <h2 className='text-xl'>
              Here is a calculator to estimate your spendings on my work, if you
              wish to co-operate!
            </h2>
            <p className='pb-8 text-sm text-gray-600'>
              Note that every service is priced at 20$/h
            </p>
            <div className='flex w-full flex-col'>
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <span className='pb-2'>
                    <input type='checkbox' id='business' />
                    <label for='business' className='pl-2'>
                      Basic business website
                    </label>
                  </span>
                  <span className='pb-2'>
                    <input type='checkbox' id='front' />
                    <label for='front' className='pl-2'>
                      Front-end work
                    </label>
                  </span>
                  <span className='pb-2'>
                    <input type='checkbox' id='back' />
                    <label for='back' className='pl-2'>
                      Back-end work
                    </label>
                  </span>
                </div>
                <div>
                  <span>Price:</span>
                  <span className='flex'>
                    <a id='servicePrice' className='dark:text-white' value='0'>
                      {message}
                    </a>{' '}
                    $
                  </span>
                </div>
              </div>

              <div className='mt-4 rounded p-4 dark:bg-primaryBG'>
                <span className='flex flex-col items-center'>
                  <label for='workTime'>
                    Work time {workTimeDisplay} hours
                  </label>
                  <input
                    type='range'
                    id='workTime'
                    name='workTime'
                    min='15'
                    max='500'
                    className='w-full bg-lightElementBg dark:bg-primaryBG'
                    onChange={handleChange}
                  />
                </span>
                <span className='flex justify-between text-sm'>
                  <p>Min: 15h</p>
                  <p>Max: 500h</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Touch
