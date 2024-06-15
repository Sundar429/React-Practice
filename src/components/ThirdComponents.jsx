import React from 'react'
import PropTypes from 'prop-types';


//PropsTypes & DefaultProps

export const ThirdComponents = (props) => {
  return (
    <>
    <div className="firstTable">
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>isMarried</th>
                <td>{props.isMarried ? "Yes" : "No"}</td>
            </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

ThirdComponents.protoTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isMarried:PropTypes.bool
}

ThirdComponents.defaultProps={
    name:"No Name",
    age:0,
    isMarried:false
}