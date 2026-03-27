"use client"

import { useEffect, useState } from "react"

const Home =()=>{
  const [data, setData] = useState([])
   const fetchData = async()=>{
    try {
      const response = await fetch("https://dummyjson.com/posts")
      const result = await response.json()
      setData(result.posts)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
   }
   useEffect(()=>{
    fetchData()
   },[])
  return <>
  <h1 className="font-roboto">hi i am learning next js</h1>
  <button className="bg-yellow-400" onClick={()=>alert("hi")}>Click me</button>
  {
    data.map((el)=>{
      return <li>{el.title}</li>
    })
  }
  </>
}

export default Home