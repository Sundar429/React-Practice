import React, { Component } from 'react'
import { ChildComponent } from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent"
      }
 this.greetParent=this.greetParent.bind(this)
    }
greetParent(chilldName){
    alert(`Hello ${this.state.parentName} from ${chilldName}`)
}

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent