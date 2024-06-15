import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetchingTwo() {
    const[post,setPost]=useState({})
    const[error,setError]=useState('')
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response=>{
        setLoading(false)
        setError('')
        setPost(response.data)
  
      })
      .catch(error=>{
        setLoading(false)
        setPost({})
        setError('Something went wrong!')
      })
    
    },[])
  return (
    <div>
      {loading?'Loading':post.title}
      {error?error:null}

    </div>
  )
}

export default DataFetchingTwo