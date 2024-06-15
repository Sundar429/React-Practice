import React from 'react'
import './myStyle.css'
function MyStyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font`}>MyStyleSheet</h1>
    </div>
  )
}

export default MyStyleSheet