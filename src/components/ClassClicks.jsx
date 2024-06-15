import React, { Component } from 'react'

 class ClassClicks extends Component {
    handleClick(){
        console.log("Button Clicked in CC");
    }
  render() {

    return (
      <div>
        
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default ClassClicks