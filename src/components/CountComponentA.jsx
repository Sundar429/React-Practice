import React, { useContext } from 'react'
import { UserContext } from '../App'



function CountComponentA() {
    const countContext=useContext(UserContext)
  return (
    <div>CountComponentA -{countContext.countState}
         
       <button onClick={()=>countContext.countDispatch('Increment')}>Increment</button>
       <button onClick={()=>countContext.countDispatch('Decrement')}>Decrement</button>
       <button  onClick={()=>countContext.countDispatch('Reset')}>Reset</button>

    </div>
  )
}

export default CountComponentA