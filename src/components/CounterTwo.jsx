import React, { Component } from 'react'

 class CounterTwo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      increaseCounter=()=>{
          this.setState((previousState)=>{
              return{
                  count:previousState.count+1
              }
          })}
     
  render() {
    return (
      <div>
        {this.props.children(this.state.count,this.increaseCounter)}
      </div>
    )
  }
}

export default CounterTwo