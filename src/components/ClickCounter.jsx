import React, { Component } from 'react'
import withCounter from './withCounter'
 class ClickCounter extends Component {
    
  render() {
    const{count,increaseCounter}=this.props
    return (
      <div>
        <button onClick={increaseCounter}>{this.props.name} Click {count} Times</button>
      </div>
    )
  }
}

export default  withCounter(ClickCounter,1) 