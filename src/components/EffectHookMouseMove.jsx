import React, { useEffect, useState } from 'react'

function EffectHookMouseMove() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logMousePosition=(e)=>{
        console.log("Mouse Event Called ");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("useEffect Called");
        window.addEventListener('mousemove',logMousePosition)


        return ()=>{
            console.log("Component Unmount");
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
    Hooks X - {x} Y -{y}
    </div>
  )
}

export default EffectHookMouseMove