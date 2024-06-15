import React, { useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponentUsingUCB() {
    const[age,setAge]=useState(25)
    const[salary,setSalary]=useState(25000)
    const increaseSalary=useCallback(()=>{
        setSalary(salary+10000)
    },[age])
    const increaseAge=useCallback(()=>{
        setAge(age+1)
    },[salary])
  return (
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={increaseAge}>Increase Age </Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={increaseSalary}>Increase Salary</Button>


    </div>
  )
}

export default ParentComponentUsingUCB