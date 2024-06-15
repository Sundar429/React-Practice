import React, { useState } from 'react'
import { addCustomer as addCustomerAction } from '../Slices/customerSlice'
import {useDispatch} from "react-redux"

function CustomerAdd() {

    const [value, setValue] = useState("")
    // const [customers, setCustomers] = useState([])
    const dispatch=useDispatch();

    function addCustomer() {
        if (value) {
            // setCustomers((prevState) => [...prevState, value])
            dispatch(addCustomerAction(value))
            setValue("")

        }
    }
    return (
        <>
            <div>

                <h3>Add New Customer</h3>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={addCustomer}>Add</button>
                
            </div>
          
        </>

    )
}

export default CustomerAdd