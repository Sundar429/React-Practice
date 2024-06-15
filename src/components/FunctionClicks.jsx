import React from 'react'

export const FunctionClicks = () => {

    const handleClick=()=>{
        console.log("Button Clicked");
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
