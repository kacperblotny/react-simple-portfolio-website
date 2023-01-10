import React, { useEffect, useState } from 'react'

function navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  )
  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const options = [
    {
      icon: 'sunny',
      text: 'light',
    },
    {
      icon: 'moon',
      text: 'dark',
    },
    {
      icon: 'desktop-outline',
      text: 'system',
    },
  ]

  function onWindowMatch() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }

  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break
    }
  }, [theme])

  darkQuery.addEventListener('change', (e) => {
    if (!('theme' in localStorage)) {
      if (e.matches) {
        element.classList.add('dark')
      } else {
        element.classList.remove('dark')
      }
    }
  })

  return (
    <div className='flex w-screen justify-between bg-red-500'>
      <div className=''>
        <ion-icon name='accessibility-outline'></ion-icon>
      </div>

      <div className='flex'>
        <div className=''>
          <ul className='flex'>
            <li className='m-8 flex'>Projects</li>
            <li className='m-8 flex'>About</li>
            <li className='m-8 flex'>Contact</li>
          </ul>
        </div>

        <div className='flex'>
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`m-auto flex ${theme === opt.text && 'text-sky-600'}`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default navbar
