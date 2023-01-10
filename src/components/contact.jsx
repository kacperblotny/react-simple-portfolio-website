import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser'

// function SendMail() {
//   let params = {
//     from_name: document.getElementById('fullName').value,
//     email_id: document.getElementById('email_id').value,
//     message: document.getElementById('message').value,
//   }

//   emailjs
//     .send('service_4usd5ki', 'template_xqodktd', params)
//     .then(function (res) {
//       alert('Message sent sucessfully!')
//     })
// }
const form = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
}

function contact() {
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type='text' name='user_name' />
      <label>Email</label>
      <input type='email' name='user_email' />
      <label>Message</label>
      <textarea name='message' />
      <input type='submit' value='Send' />
    </form>
    //  <div className='h-screen w-screen'>
    //    <input
    //      type='text'
    //      id='fullName'
    //      placeholder='Name'
    //      required
    //      className='text-black'
    //    />
    //    <input
    //      type='email'
    //      id='email_id'
    //      placeholder='Email'
    //      required
    //      className='text-black'
    //    />
    //    <textarea
    //      id='message'
    //      placeholder='message...'
    //      required
    //      className='text-black'
    //    ></textarea>
    //    <button
    //      onClick={() => {
    //        let params = {
    //          from_name: document.getElementById('fullName').value,
    //          email_id: document.getElementById('email_id').value,
    //          message: document.getElementById('message').value,
    //        }

    //        emailjs
    //          .send('service_4usd5ki', 'template_xqodktd', params)
    //          .then(function (res) {
    //            alert('Message sent sucessfully!')
    //          })
    //      }}
    //    >
    //      Send
    //    </button>
    //  </div>
  )
}

export default contact
