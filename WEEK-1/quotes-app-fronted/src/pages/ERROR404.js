import React from 'react'


function ERROR404() {
  return (
    <>
      <div className='max-w-screen mx-auto'>
        <div className='container py-10 flex flex-col justify-center items-center'>
          <h1 className='text-[200px] text-center font-bold ' >404</h1>
          <h1 className='text-3xl text-center font-bold '>PAGE NOT FOUND !!</h1>

         <a href='/'> <button className=' my-10 text-white outline-none border-black bg-blue-600 py-3 px-3 rounded-lg shadow-lg'>GO TO HOME PAGE</button></a>
        </div>
      </div>

    </>
  )
}

export default ERROR404
