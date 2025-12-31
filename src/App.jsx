import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './components/Card'


const App = () => {
  const [getData, setGetData] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(() => {
    const fetchData = async() =>{
      const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
      setGetData(res.data)
    }
    fetchData()
  }, [index])
  


  return (
    <div >
      <main className='h-full bg-gray-200'>
        <Card data ={getData}/>
        <h1 className='flex min-h-screen justify-center items-center bg-gray-200 text-gray-400 text-4xl   font-semibold'>Loading...</h1>
        <div
        className=' fixed bottom-20 left-1/2 -translate-x-1/2 flex gap-5 px-3 py-2 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg justify-center items-center'>
          <button
          disabled={index === 1}
          onClick={() => {
            if(index>1){setIndex(index-1)}
            setGetData([])
          }}
          className={`font-semibold px-4 py-2 rounded-full text-xl
                      cursor-pointer active:scale-90 transition
                      bg-white/10 backdrop-blur-3xl border border-white/20
                      ${index === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
          >Prev</button>

          <h1 className='font-semibold text-xl'>PAGE {index}</h1>
          <button
          onClick={() => {setIndex(index+1)
            setGetData([])}
          }
          className='  font-semibold px-4 py-2 rounded-full text-xl cursor-pointer active:scale-90 bg-white/10 backdrop-blur-3xl border border-white/20'>Next</button>
        </div>
      </main>
    </div>
  )
}

export default App
