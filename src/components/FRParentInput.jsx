import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
     this.parentRef=React.createRef()
    }
    clickHandler=()=>{
        this.parentRef.current.focus();
    }
  render() {
    return (
      <div>
        <FRInput ref={this.parentRef}/>
        <button onClick={this.clickHandler}>Focus FRInput</button>
      </div>
    )
  }
}

export default FRParentInput