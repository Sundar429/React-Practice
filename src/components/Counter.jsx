import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      
    }
    increase(){
   
        // this.setState({
        //     count:this.state.count+1
        // },
        // ()=>{
        //     console.log("Call back value",this.state.count);
        // }
        // )
        // console.log(this.state.count);


        this.setState((prevState)=>({
            count:prevState.count+1
         }))
         console.log(this.state.count);
      }
   increaseValue(){
    this.increase()
    this.increase()
    this.increase()
    this.increase()
    this.increase()
   }
  render() {
    return (
        <>
           <div>Count - {this.state.count}</div>
           <button onClick={()=>this.increaseValue()}>Increment</button>
        </>
   
    )
  }
}

export default Counter