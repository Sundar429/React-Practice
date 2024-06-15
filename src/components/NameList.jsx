import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Sundar', 'Vijay', 'Dhoni']

    const persons = [
        {
            id: 1,
            name: 'Sundar',
            age: 23,
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Ashok',
            age: 24,
            skill: 'Python'
        },
        {
            id: 3,
            name: 'Surya',
            age: 27,
            skill: 'Dot Net'
        }

    ]
    const personList = persons.map((person ,id) => { return <Person person={person} key={person.id}/> })
    return (
        <div>
            <ul>{names.map((name, index) => { return <li key={index}>{name}</li> })}</ul>
            {personList}
        </div>
    )
}

export default NameList