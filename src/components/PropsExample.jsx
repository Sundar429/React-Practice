import React from 'react'

export const PropsExample = ({ name, children }) => {
    // console.log(props)
    return (
        <>
{/* 
            <h1>Hello {props.name}</h1>
            {props.children} */}
            <h1>Hello {name}</h1>
            {children}
        </>

    )
}
