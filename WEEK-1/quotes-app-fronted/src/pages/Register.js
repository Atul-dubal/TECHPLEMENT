
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// dotenv.config()
function Register() {
  // console.log(process.env.REACT_APP_API_BASE_URL)
  const [formData, setFormData] = useState({
    name: '',
    phone: "",
    email: '',
    password: ''
  })
  const navigator = useNavigate()

  useEffect(()=>{
    // console.log(localStorage.getItem('isLogin'))
    if(localStorage.getItem('isLogin')){
      navigator('/dashboard')
    }
  },[])

  const formSubmit = async (e) => {
    e.preventDefault()
    // console.log(formData)
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_BASE_URL}auth/signup`, { formData })
      // console.log(result)
      if (result.data.StatusCode === 200) {
        alert(result.data.msg)
        navigator('/login')
      } else {
        alert(result.data.msg)
      }
    } catch (err) {
      console.log("Internal Server Error")
    }
  }

  const InputChangeHandler = (e) => {
    // console.log(formData);
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <>
      <div className=' max-w-screen mx-auto'>
        <div className='container '>
          <div className='flex my-16 flex-col justify-center items-center w-[100%]'>
            <form className='flex bg-slate-50 flex-col space-y-3 shadow-md p-4 w-[80%] md:w-[40%] ' onSubmit={formSubmit} action='' method=''>

              <h1 className='font-bold text-3xl text-center'>Register</h1>
              <label>Name</label>
              <input className='p-1' type='text' placeholder='Name' name='name' value={formData.name} onChange={InputChangeHandler} style={{ 'border': '2px solid black' }} required></input>
              <label>Phone Number</label>
              <input className='p-1' type='text' placeholder='Phone Number' name='phone' onChange={InputChangeHandler} value={formData.phoneNumber} style={{ 'border': '2px solid black' }} required ></input>
              <label>Email</label>
              <input className='p-1' type='text' placeholder='Email' name='email' value={formData.email} onChange={InputChangeHandler} style={{ 'border': '2px solid black' }} required></input>
              <label>Password</label>
              <input className='p-1' type='text' placeholder='Password' value={formData.password} onChange={InputChangeHandler} name='password' style={{ 'border': '2px solid black' }} required ></input>

              <br />
              <input type='submit' value='Register' name='submit' className=' bg-blue-700 mx-16 my-2 cursor-pointer text-xl text-white shadow-md hover:bg-blue-300' />

              <a href='/login' ><p className='font-semibold text-center'>I Already Have An Account <span className='text-blue-500 font-bold cursor-pointer'> Login</span></p></a>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
