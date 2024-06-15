import React, { Component } from 'react'

export class LifeCycleB extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'Sundar'
   }
   console.log("LifeCycle B Constructor");
 }

 static getDerivedStateFromProps(props,state){
    console.log("LifeCycle B getDerivedStateFromProps ");
    return null

 }
componentDidMount(){
    // setTimeout(()=>{
    //     this.setState({
    //         name:'Meenakshi Sundaram'
    //     })
    // },2000)
    console.log("LifeCycle B componentDidMount");
}
shouldComponentUpdate(){
  console.log("LifeCycle B shouldComponentUpdate");
  return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log("LifeCycle B getSnapshotBeforeUpdate");
  return null;
}
componentDidUpdate(){
  console.log("LifeCycle B componentDidUpdate");
}
  render() {
    console.log("LifeCycle B render");
    return (
      <div>LifeCycleB
    
        
        </div>
    )
  }
}

export default LifeCycleB