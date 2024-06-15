import React, { useMemo, useState } from 'react'

function CounterUsingUM() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const increaseOne = () => {
        setCountOne(countOne + 1)
    }
    const increaseTwo = () => {
        setCountTwo(countTwo + 1)
    }
    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000) i++
        return countOne % 2 == 0
    }, [countOne])


    return (
        <>
            <div>
                <button onClick={increaseOne}>Count One - {countOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={increaseTwo}>Count Two - {countTwo}</button>
            </div>
        </>

    )
}

export default CounterUsingUM