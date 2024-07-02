import React, { useEffect, useState } from 'react'
import Quotecard from '../components/Quotecard'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Dashboard() {

  const [APIDATA, setAPIDATA] = useState(
    {
      _id: '',
      quote: '',
      author: ''
    }
  )

  const navigator = useNavigate()
  const [ManyRecords, setManyRecords] = useState([])
  const [SearchQuery, setSearchQuery] = useState('')
  const [SearchQueryResult, setSearchQueryResult] = useState([])

  // console.log(APIDATA)

  const LoadData = async () => {

    try {
      if (!localStorage.getItem("isLogin")) {
        navigator('/login')
      }
      if (SearchQuery.length <= 0) {
        const data = await axios.get(`${process.env.REACT_APP_API_BASE_URL}api/quotes`)
        console.log("Random Quotes : ", data.data)
        setAPIDATA(data.data)
        // console.log(APIDATA)
      } else {
        const data = await axios.get(`${process.env.REACT_APP_API_BASE_URL}api/quotes/author/${SearchQuery}`)
        console.log("Search Quotes By Author Name : ", data.data)
        setSearchQueryResult(data.data)
        console.log(SearchQueryResult)
      }


    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    LoadData()
    if (SearchQuery === '') {
      setInterval(LoadData, 5000)
    }
  }, [SearchQuery]);
  return (
    <>
      <div className=' max-w-screen mx-auto mb-20'>
        <div className=' container flex flex-col justify-center items-center'>
          {/* Search By Author Name Section */}
          <div className=' w-[100%] my-3 py-3 flex justify-center items-center' >
            <input type='text' placeholder='Search By Author Name' className='p-2 w-[60%] ' onChange={(e) => { setSearchQuery(e.target.value) }} value={SearchQuery} style={{ "border": "2px solid black" }} ></input>
            {/* <button className='px-3 py-2 bg-blue-500 rounded-sm flex justify-end items-end' onClick={LoadData}>Search</button> */}
          </div>
          {/* Display Quotes Of The Day */}
          <button className='px-3 py-2 bg-blue-500 rounded-sm flex justify-end items-end' onClick={LoadData}>Refresh</button>
          {/* <Quotecard data={APIDATA} /> */}
          <div className='flex justify-center flex-wrap flex-row items-center w-[100%]'>
            {SearchQuery === '' ? <Quotecard styledata='w-[80%] md:w-[40%] ' data={APIDATA} /> :
              SearchQueryResult.length === 0 ? <h1 className='m-20 text-3xl'>No Quote Found For This Author</h1> :
                SearchQueryResult.length === 1 ? <Quotecard styledata='w-[80%] md:w-[40%] mx-10' data={SearchQueryResult[0]} /> :
                  SearchQueryResult.map((item, index) => {
                    return <Quotecard key={index} styledata='w-[80%] md:w-[40%] mx-10' data={item} />
                    // console.log(item)
                  })
            }

          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard
