import React from 'react'

function popup(props) {
  return props.trigger ? (
    <>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div
          className='fixed inset-0 h-full w-full bg-black opacity-40'
          onClick={() => props.setTrigger(false)}
        ></div>
        <div className='mx-auto mt-64 flex max-h-fit px-4 py-8 md:mt-96'>
          <div className='relative mx-auto w-full rounded-md bg-white p-4 shadow-lg dark:bg-darkElementBg md:w-3/5'>
            <div className='mt-2 text-center sm:ml-4 sm:text-left'>
              {props.children}
              <button
                className='mt-2 ml-auto flex rounded-md bg-red-600 px-2 py-1 text-white outline-none ring-red-600 ring-offset-2 focus:ring-2'
                onClick={() => props.setTrigger(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ''
  )
}

export default popup
