import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser'

// const form = useRef()

// const sendEmail = (e) => {
//   e.preventDefault()

//   emailjs
//     .sendForm(
//       'YOUR_SERVICE_ID',
//       'YOUR_TEMPLATE_ID',
//       form.current,
//       'YOUR_PUBLIC_KEY'
//     )
//     .then(
//       (result) => {
//         console.log(result.text)
//       },
//       (error) => {
//         console.log(error.text)
//       }
//     )
// }

function contactform() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5jneuid',
        'template_xqodktd',
        form.current,
        '61Csob-Y40JCtK9So'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Message sent sucessfully!')
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send message')
        }
      )
  }
  return (
    <div>
      <h2 className='text-4xl text-black dark:text-white'>Contact me!</h2>
      <p className='pb-4 md:w-3/5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        blanditiis temporibus amet fuga, assumenda velit quasi pariatur
        distinctio eos doloribus?
      </p>
      <div className='flex justify-between'>
        <div className='flex flex-col md:flex-row'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='flex flex-col'>
              <label className='font-bold'>Name</label>
              <input
                name='user_name'
                className='w-80 bg-white p-2 text-black'
                required
              />
              <label className='pt-6 font-bold'>Email</label>
              <input
                type='email'
                name='user_email'
                className='w-80 p-2 text-black'
                required
              />
            </div>

            <div className='h-132px mt-8 md:pt-0'>
              <p className='font-bold'>Message</p>
              <textarea
                name='message'
                className='h-full w-80 resize-none p-2 text-black'
              />
            </div>
            <input
              type='submit'
              value='Send'
              className='mr-auto mt-4 flex rounded bg-primary py-1 px-3 text-white duration-150 ease-in hover:scale-105'
            />
          </form>

          <div className='w-full pl-16'>
            <h2 className='text-1xl hidden font-bold md:block'>
              Fell free to contact me here
            </h2>
            <div className='pt-4 '>
              <a
                href='https://www.linkedin.com/in/kacper-b%C5%82otny-b4046924a/'
                target='_blank'
                className='flex items-center text-center text-white duration-300 hover:text-primary'
              >
                <ion-icon name='logo-linkedin'></ion-icon>
                <p className='pl-2'>Linkedin</p>
              </a>
              <a
                href='mailto:blotnykacper@gmail.com'
                className='flex items-center text-center duration-300 hover:text-primary dark:text-white'
              >
                <ion-icon name='mail-outline'></ion-icon>
                <p className='pl-2'>Email</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contactform
