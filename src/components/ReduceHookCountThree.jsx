import React, { useReducer } from 'react'


const intialState=0;

const reducer =(state,action)=>{

    switch (action) {
        case 'Increment':
            return state+1
            break;
        case 'Decrement':
            return state-1
            break;
        case 'Reset':
            return intialState
            break;
    
        default:
            return state;
    }

}

function ReduceHookCountThree() {
    const[count,dispatch]=useReducer(reducer,intialState)
    const[countTwo,dispatchTwo]=useReducer(reducer,intialState)

  return (
    <>
        <div>
        Count - {count}
       <button onClick={()=>dispatch('Increment')}>Increment</button>
       <button onClick={()=>dispatch('Decrement')}>Decrement</button>
       <button  onClick={()=>dispatch('Reset')}>Reset</button>

    </div>
    <div>
        Count - {countTwo}
       <button onClick={()=>dispatchTwo('Increment')}>Increment</button>
       <button onClick={()=>dispatchTwo('Decrement')}>Decrement</button>
       <button  onClick={()=>dispatchTwo('Reset')}>Reset</button>

    </div>
    </>

    
  )
}

export default ReduceHookCountThree