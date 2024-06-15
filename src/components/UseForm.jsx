import React, { useState } from 'react'
import useInput from '../Hooks/useInput'

function UseForm() {
    const[firstName,bindFirstName,resetFirstname]=useInput('')
    const[lastName,bindLastName,resetLastName]=useInput('')
    



    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Hello My Name is ${firstName} ${lastName}`)
        resetFirstname()
        resetLastName()

    }
    return (

        <form onSubmit={submitHandler}>

            <div>
                <label>First Name</label>
                <input {...bindFirstName}value={firstName} type="text" />

            </div>
            <div>
                <label>Last Name</label>
                <input {...bindLastName} value={lastName}  type="text" />

            </div>
            <button>Submit</button>
        </form>

    )
}

export default UseForm