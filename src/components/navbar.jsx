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
    <div className='fixed z-50 w-screen'>
      <nav
        className='bg-lightElementBg p-4 opacity-90 shadow-2xl dark:bg-darkElementBg'
        data-aos='fade-in'
        data-aos-delay='200'
      >
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <a
            href='#'
            class='flex items-center text-primary'
            data-aos='fade-down'
            data-aos-delay='500'
          >
            Kacper Błotny | Portoflio
          </a>
          {/* Hamburger */}
          <button
            data-collapse-toggle='navbar-dropdown'
            type='button'
            class='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-lightElementBg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='navbar-dropdown'
            aria-expanded='false'
          >
            <svg
              class='h-6 w-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
          {/* Hamburger */}
          <div class='hidden w-full md:block md:w-auto' id='navbar-dropdown'>
            <ul class='mt-4 flex flex-col rounded-lg border border-gray-300 bg-lightElementBg p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium md:dark:bg-darkElementBg'>
              <li>
                <a
                  href='#readMore'
                  class='block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-lightElementBg dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
                  data-aos='fade-down'
                  data-aos-delay='500'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#projectsScroll'
                  class='block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-lightElementBg dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
                  data-aos='fade-down'
                  data-aos-delay='500'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#contactScroll'
                  class='block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-lightElementBg dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
                  data-aos='fade-down'
                  data-aos-delay='500'
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  id='dropdownNavbarLink'
                  data-dropdown-toggle='dropdownNavbar'
                  class='flex w-full items-center justify-between rounded bg-lightElementBg py-2 pl-3 pr-4 font-medium text-gray-700  hover:text-primary focus:text-primary dark:border-gray-700 dark:bg-darkElementBg dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:hover:dark:text-white'
                >
                  <p data-aos='fade-down' data-aos-delay='500'>
                    Dropdown{' '}
                  </p>
                  <svg
                    class='ml-1 h-5 w-5'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id='dropdownNavbar'
                  class='z-10 hidden w-screen divide-y rounded font-normal md:w-auto'
                >
                  <ul
                    class='py-1 text-sm'
                    aria-labelledby='dropdownLargeButton'
                  >
                    <li className='ml-8 w-fit rounded bg-white p-1 shadow-xl dark:bg-darkElementBgSecondary md:m-0'>
                      <div className='m-2 flex border-gray-400'>
                        {options?.map((opt) => (
                          <button
                            key={opt.text}
                            onClick={() => setTheme(opt.text)}
                            className={`m-1 flex bg-gray-200 text-black transition-all duration-300 hover:bg-gray-600 dark:border-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500 ${
                              theme === opt.text && 'text-black'
                            }`}
                          >
                            <ion-icon name={opt.icon}></ion-icon>
                          </button>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar
