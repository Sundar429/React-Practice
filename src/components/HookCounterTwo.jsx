import React, { useState } from 'react'

function HookCounterTwo() {
    const intialCount=0;

   const[count,setCount]= useState(intialCount);
   const increaseFive=()=>{
    for(let i=0;i<5;i++){

      setCount(previousCount => previousCount+1)
    }
   }
  return (
    <div>
        Count :{count}
        <button onClick={()=>setCount(intialCount)}>Reset</button>
        <button onClick={()=> setCount(previousCount => previousCount+1)}>Increment</button>
        <button onClick={()=> setCount(previousCount => previousCount-1)}>Decrement</button>
        <button onClick={increaseFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo