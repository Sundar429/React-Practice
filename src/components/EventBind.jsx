import React, { Component } from 'react'

 class EventBind extends Component {
constructor(props) {
  super(props)

  this.state = {
     message:"Good Morning"
  }
  //Binding in Class Constructor
//   this.clickHandler=this.clickHandler.bind(this)
}
// clickHandler(){
//     this.setState({
//         message:"Thank You !"
//     })
//     console.log(this);
// }

//Arrow function as property to a constructor
clickHandler=()=>{
    this.setState({
        message:"Thank You !"
    })
    // console.log(this);
}
  render() {
    return (
        <>
            <div>{this.state.message}</div>
            
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
            <button onClick={this.clickHandler}>Click</button>
        </>
  
    )
  }
}

export default EventBind