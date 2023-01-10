import React from 'react'
import pitching from '../assets/pitching.svg'
import data from '../assets/data.svg'
import performance from '../assets/performance.svg'

function about() {
  return (
    <div className='flex items-center bg-white text-black dark:bg-darkBg dark:text-white'>
      <img src={data} alt='' className='scale-50' />
      <div className='w-2/5'>
        <span className='flex pb-4'>
          <h2 className='w-fit min-w-fit text-6xl'>About me</h2>
          <div className='my-auto mx-4 flex h-px w-full bg-primary'></div>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas amet
          soluta, porro repudiandae ipsum non!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nemo quae, cum fuga unde quis. Consequatur natus excepturi eos
          delectus!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          dolore!
        </p>
      </div>
    </div>
  )
}

export default about
