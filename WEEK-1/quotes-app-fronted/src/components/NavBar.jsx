import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [isLogin , setIsLogin ] = useState(localStorage.getItem('isLogin')? localStorage.getItem('isLogin'): false)
  // console.log(JSON.parse(localStorage.getItem('UserData')).name)
  useEffect(()=>{
    if(localStorage.getItem('isLogin')){
      setIsLogin(localStorage.getItem('isLogin'))
    }
  })
  return (
    <>
      <div className=' max-w-screen mb-14  py-3 bg-yellow-100 mx-auto '>
        <div className=' container  flex  justify-around items-center'>
          <div className=''>
            <Link to='/' >  <h1 className='font-bold text-center md:text-left text-xl lg:text-3xl'>Quotes Of The Day</h1></Link>
          </div>
          <div className={isLogin ? "hidden" : ''}>
            <Link to='/login' > <button className='py-2 px-3 mx-3 bg-yellow-300 border-slate-950 hover:bg-yellow-600 font-semibold  rounded-lg md:text-xl' >Login</button> </Link>
            <Link to='/register' > <button className='py-2 px-3 mx-3 bg-yellow-300 border-slate-950 hover:bg-yellow-600 font-semibold  rounded-lg md:text-xl' >Register</button> </Link>
          </div>
          <div className={isLogin ? ''
            : 'hidden'}>
            <p>{isLogin? JSON.parse(localStorage.getItem('UserData')).name : ''}</p>
            <Link to={'/logout'} >LogOut</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
