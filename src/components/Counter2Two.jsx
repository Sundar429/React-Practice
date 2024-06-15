import React from 'react'
import useCount from '../Hooks/useCount'

function Counter2Two() {
    const[count,increment,decrement,reset]=useCount(10,10)
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2Two