import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchingUsingFC() {
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[idButton,setIdButton]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })

    },[idButton])
    const handleClick=()=>{
        setIdButton(id)
    }
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <button type="submit" onClick={handleClick}>Fetching Post</button>
        <div>{post.title}</div>
 
        {/* <ul>
            {
                posts.map(post=><li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetchingUsingFC