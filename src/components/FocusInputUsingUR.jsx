import React, { useEffect, useRef } from 'react'

function FocusInputUsingUR() {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>

            <h2>Focus Input Element using useRef</h2>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInputUsingUR