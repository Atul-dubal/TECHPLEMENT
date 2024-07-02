import React from 'react'

function Quotecard(prop) {
    console.log("Quotes Card Data : ",prop)
    return (
        <>
            <div className={`${prop.styledata} my-10 p-3 rounded-2xl`} style={{ "border": "2px solid black" }}>
                <h1 className='text-center font-bold py-4 text-xl underline '>Quotes Of The Day</h1>

                <h3> {prop.data.quote} </h3>

                <p className='text-right px-10 text-slate-500 '>{prop.data.author}</p>
            </div>
        </>
    )
}

export default Quotecard
