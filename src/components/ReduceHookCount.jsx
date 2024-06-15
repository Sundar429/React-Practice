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

function ReduceHookCount() {
    const[count,dispatch]=useReducer(reducer,intialState)

  return (
    <div>
        Count - {count}
       <button onClick={()=>dispatch('Increment')}>Increment</button>
       <button onClick={()=>dispatch('Decrement')}>Decrement</button>
       <button  onClick={()=>dispatch('Reset')}>Reset</button>

    </div>
  )
}

export default ReduceHookCount