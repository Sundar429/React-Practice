import React, { Component } from 'react'

export class HoverCounterTwo extends Component {

  render() {
    const{count,increaseCounter}=this.props
    return (
        <div>
        <h1 onMouseOver={increaseCounter}>Hovered {count} Times</h1>
      </div>
    )
  }
}

export default HoverCounterTwo