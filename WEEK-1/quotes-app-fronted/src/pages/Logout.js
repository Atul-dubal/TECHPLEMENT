import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigator = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('isLogin')) {
            window.location.replace('/login')
        }
        try {
            localStorage.removeItem('UserData')
            localStorage.removeItem('isLogin')
        } catch (e) {

        }

    },[])
    return (
        <>

        </>
    )
}

export default Logout
