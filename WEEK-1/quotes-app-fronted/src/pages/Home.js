import React from 'react'

function Home() {
    return (
        <>
            <div className=' max-w-screen mx-auto my-5'>
                <div className='container '>
                    <div className='flex flex-col justify-center items-center my-5 space-x-3 md:flex-row '>
                        <div className='space-y-2 w-[100%] md:w-[50%] flex flex-col items-center order-2 md:order-1'>
                            <h1 className='font-bold text-center text-2xl lg:text-3xl mt-20'>Quotes Of The Day</h1>
                            <p>Get Various Quotes Of Famous Authors.</p>
                            <p className='px-10'> Your daily source of motivation and wisdom! Each day, we bring you a selection of inspiring quotes from renowned figures and contemporary voices. Whether you need a boost of encouragement, a moment of reflection, or a spark of creativity.</p>
                            <a href='/login'>  <button className='bg-blue-500 w-[200px] px-2 py-2 '>Get Quotes</button></a>
                        </div>
                        <div className=' order-1 md:order-2 flex justify-center items-center w-[350px] h-[350px]'>
                            <img src='/images/technology_boy.jpg' className=' rounded-xl' alt=''></img>
                        </div>
                    </div>
                    {/* <div className='w-[100%]'>
                        <div className='mx-auto shadow-md p-4 bg-blue-50 rounded-md w-[100%] md:w-[600px] text-md space-y-2'>
                            <h1 className='font-bold text-center text-2xl'>Project OverView</h1>
                            <p>Company Name : Techplement</p>
                            <p>Position : Full Stack Web Developer</p>
                            <p>Job Type : Internship</p>
                            <p>Work Type : Online</p>
                            <p>Duration : 1 Month</p>
                            <p>Project Name : Quotes Of The Day Website</p>

                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Home
