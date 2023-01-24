import React from 'react'
import Programming from '../assets/programming.svg'
import Hasbulla from '../assets/hasbulla.png'
import AOS from 'aos'

function about() {
  return (
    <div className='flex w-screen items-center justify-evenly bg-white text-black dark:bg-primaryBG dark:text-white'>
      <div className='flex flex-col p-8 md:w-1/3 md:p-0'>
        <div className='flex' data-aos='fade-right' data-aos-delay='200'>
          <h2 className=' min-w-fit text-4xl'>
            <span className='pr-2 text-primary'>01.</span> About me
          </h2>
          <div className='my-auto mx-4 flex h-px w-full bg-primary'></div>
        </div>
        <div className=''>
          <p className='py-4' data-aos='fade-right' data-aos-delay='200'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sed
            harum temporibus cumque sint repellat adipisci earum tenetur
            reiciendis et! Asperiores sint odit modi veritatis eos fugit
            voluptate. Praesentium, maiores.
          </p>
          <p className='pb-4' data-aos='fade-right' data-aos-delay='300'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
            unde amet. Placeat itaque dolor officiis, tempore, atque, quidem
            enim natus ab quis dignissimos ut vero.
          </p>
          <p className='pb-4' data-aos='fade-right' data-aos-delay='400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            voluptate sint praesentium illo! Rem fuga sapiente magni praesentium
            id laudantium reprehenderit saepe sit! Cumque, molestiae atque nobis
            labore earum repellendus mollitia culpa alias eos dolore odio modi,
            a consequatur rerum.
          </p>
          <ul className='grid grid-cols-2 gap-2 md:grid-cols-3'>
            <li className='flex' data-aos='fade-right' data-aos-delay='150'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              JavaScript (ES6+)
            </li>
            <li className='flex' data-aos='fade-right' data-aos-delay='250'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              TypeScript
            </li>
            <li className='flex' data-aos='fade-right' data-aos-delay='350'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              React
            </li>
            <li className='flex' data-aos='fade-right' data-aos-delay='150'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              Node.js
            </li>
            <li className='flex' data-aos='fade-right' data-aos-delay='250'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              Tailwind CSS
            </li>
            <li className='flex' data-aos='fade-right' data-aos-delay='350'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              Python
            </li>
            <li className='flex' data-aos='fade-right' data-aos-delay='150'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              C++
            </li>
            <li className='flex' data-aos='fade-right' data-aos-delay='250'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              C#
            </li>
            <li className='flex' data-aos='fade-right' data-aos-delay='350'>
              {' '}
              <span className='flex items-center text-primary'>
                <ion-icon name='caret-forward-outline'></ion-icon>
              </span>{' '}
              Magento
            </li>
          </ul>
        </div>
      </div>
      <span className='hidden h-full rounded duration-200 hover:scale-105 md:block'>
        <img src={Hasbulla} alt='' className='flex h-96' data-aos='fade-left' />
      </span>
    </div>
  )
}

export default about
