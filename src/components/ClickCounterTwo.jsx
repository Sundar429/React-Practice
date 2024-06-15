import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
    
  render() {
    const{count,increaseCounter}=this.props
    return (
        <div>
        <button onClick={increaseCounter}> Click {count} Times</button>
      </div>
    )
  }
}

export default ClickCounterTwo