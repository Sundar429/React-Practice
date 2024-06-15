import React, { useReducer } from 'react'


const intialState={
    firstCounter:0,
    secondCounter:10
};

const reducer =(state,action)=>{

    switch (action.type) {
        case 'Increment':
            return {...state,firstCounter: state.firstCounter + action.value}
            break;
        case 'Decrement':
            return{...state,firstCounter: state.firstCounter - action.value}
            break;
        case 'Increment2':
            return {...state,secondCounter: state.secondCounter + action.value}
            break;
        case 'Decrement2':
            return{...state,secondCounter: state.secondCounter - action.value}
            break;
        case 'Reset':
            return intialState
            break;
    
        default:
            return state;
    }

}

function ReduceHookCountTwo() {
    const[count,dispatch]=useReducer(reducer,intialState)

  return (
    <div>
        First-Counter - {count.firstCounter}
        Second-Counter - {count.secondCounter}
       <button onClick={()=>dispatch({type:'Increment',value:1})}>Increment</button>
       <button onClick={()=>dispatch({type:'Decrement',value:1})}>Decrement</button>
       <button onClick={()=>dispatch({type:'Increment',value:5})}>Increment 5</button>
       <button onClick={()=>dispatch({type:'Decrement',value:5})}>Decrement 5</button>
       <div>
       <button onClick={()=>dispatch({type:'Increment2',value:1})}>Increment Counter 2</button>
       <button onClick={()=>dispatch({type:'Decrement2',value:1})}>Decrement Counter 2</button>
       </div>
       <button  onClick={()=>dispatch({type:'Reset'})}>Reset</button>

    </div>
  )
}

export default ReduceHookCountTwo