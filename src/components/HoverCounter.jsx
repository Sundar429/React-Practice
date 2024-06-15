import React, { Component } from 'react'
import withCounter from './withCounter'

 class HoverCounter extends Component {
    
  render() {
    const{count,increaseCounter}=this.props
    return (
      <div>
        <h1 onMouseOver={increaseCounter}>Hovered {count} Times</h1>
      </div>
    )
  }
}

export default withCounter(HoverCounter,1) 