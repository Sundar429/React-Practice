// import React from 'react'
import  ReactDOM from 'react-dom'
function PortalDemo() {

  // return (
  //   <h1>PortalDemo</h1>
  // )
 return ReactDOM.createPortal (
    <h1>PortalDemo</h1>,
    document.getElementById('portal-root')

  )
}

export default PortalDemo