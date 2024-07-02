import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <div className='max-w-screen mx-auto bg-yellow-100 py-2 '>
        <div className='container' >
          <p className='text-center font-semibold text-xl'>Follow Us On</p>
          <ul className='text-2xl flex space-x-4 py-2 text-teal-800 text-center justify-center'>
            <li className=' cursor-pointer hover:scale-110'><FontAwesomeIcon icon={faFacebook} /></li>
            <li className=' cursor-pointer hover:scale-110'><FontAwesomeIcon icon={faGithub} /></li>
            <li className=' cursor-pointer hover:scale-110'><FontAwesomeIcon icon={faLinkedin} /></li>
            <li className=' cursor-pointer hover:scale-110'><FontAwesomeIcon icon={faInstagram} /></li>
            <li className=' cursor-pointer hover:scale-110'><FontAwesomeIcon icon={faYoutube} /></li>
          </ul>
          <h1 className='font-bold text-center'>Copyright &copy;2024 All Rights Reserved By <span className='font-bold  text-blue-400'>Atul Dubal</span></h1>
        </div>
      </div>
    </>
  )
}

export default Footer
