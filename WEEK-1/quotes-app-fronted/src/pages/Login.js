import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const InputOnChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const formSubmitHandler = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      const result = await axios.post("http://localhost:2206/auth/signin", {
        formData
      })
      if(result.data.StatusCode === 200){
        console.log(result.data.res)
        localStorage.setItem('UserData', JSON.stringify(result.data.res))
        localStorage.setItem('isLogin', true)
        alert(result.data.msg)
        window.location.replace('/dashboard')
      }else{
        alert(result.data.msg)
      }
    }
    catch (err) {
      console.log("Internal Server Error")
    }
  }
  const navigator = useNavigate()
  useEffect(()=>{
    
    // console.log(localStorage.getItem('isLogin'))
    if(localStorage.getItem('isLogin')){
      navigator('/dashboard')
    }
  },[])
  return (
    <>
      <div className=' max-w-screen mx-auto'>
        <div className='container '>
          <div className='flex my-20 flex-col justify-center items-center w-[100%]'>
            <form className='flex bg-slate-50 flex-col space-y-3 shadow-md p-4 w-[80%] md:w-[40%] ' onSubmit={formSubmitHandler} action='' method=''>

              <h1 className='font-bold text-3xl text-center'>Login</h1>
              <label>Email</label>
              <input className='p-1' type='text' placeholder='Email' name='email' value={formData.email} onChange={InputOnChangeHandler} style={{ 'border': '2px solid black' }} required></input>
              <label>Password</label>
              <input className='p-1' type='text' placeholder='Password' name='password' value={formData.password} onChange={InputOnChangeHandler} style={{ 'border': '2px solid black' }} required ></input>

              <span><input className='mx-1 text-3xl font-bold' type='checkbox' placeholder='Remember Me' />Remember Me</span>
              <br />
              <input type='submit' value='Login' className='p-2 bg-blue-700 mx-16 my-5 cursor-pointer text-xl text-white shadow-md hover:bg-blue-300' />

              <a href='/register' ><p className='font-semibold text-center'>I Don't Have An Account <span className='text-blue-500 font-bold cursor-pointer'> Register</span></p></a>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
