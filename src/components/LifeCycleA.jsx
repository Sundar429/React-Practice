import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'Sundar'
   }
   console.log("LifeCycle A Constructor");
 }

 static getDerivedStateFromProps(props,state){
    console.log("LifeCycle A getDerivedStateFromProps ");
    return null
 }
componentDidMount(){
    // setTimeout(()=>{
    //     this.setState({
    //         name:'Meenakshi Sundaram'
    //     })
    // },2000)
    console.log("LifeCycle A componentDidMount");
}
shouldComponentUpdate(){
    console.log("LifeCycle A shouldComponentUpdate");
    return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("LifeCycle A getSnapshotBeforeUpdate");
    return null;
}
componentDidUpdate(){
    console.log("LifeCycle A componentDidUpdate");
}
changeState=()=>{
  this.setState({
    name:'Meenakshi Sundaram'
  })
}

  render() {
    console.log("LifeCycle A render");
    return (
      <div>LifeCycleA
        {/* {this.state.name} */}
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
        
        </div>
    )
  }
}

export default LifeCycleA