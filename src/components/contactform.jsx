import React from 'react'

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
  return (
    <div>
      <h2 className=' text-4xl text-black dark:text-white'>Contact me!</h2>
      <p className='w-3/5 pb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        blanditiis temporibus amet fuga, assumenda velit quasi pariatur
        distinctio eos doloribus?
      </p>
      <div className='flex justify-between'>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <label className='font-bold'>Name</label>
            <input type='text' name='user_name' className='w-80 p-2' required />
            <label className='pt-6 font-bold'>Email</label>
            <input
              type='email'
              name='user_email'
              className='w-80 p-2'
              required
            />
          </div>

          <div className='h-132px px-4'>
            <p className='font-bold'>Message</p>
            <textarea name='message' className='h-full w-80 resize-none p-2' />
          </div>

          <div className='w-full'>
            <h2 className='text-1xl font-bold'>Fell free to contact me here</h2>
            <div className='pt-4 '>
              <span className='flex text-center duration-300 hover:text-primary'>
                <ion-icon name='logo-linkedin' size='large'></ion-icon>
                <p className='pl-2'>Linkedin</p>
              </span>
              <span className='flex text-center duration-300 hover:text-primary'>
                <ion-icon name='mail-outline' size='large'></ion-icon>
                <p className='pl-2'>Email</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <input
        type='submit'
        value='Send'
        className='mr-auto mt-4 flex rounded bg-primary py-1 px-3 text-white'
      />
    </div>
  )
}

export default contactform
