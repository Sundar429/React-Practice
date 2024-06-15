import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {
    static contextType=UserContext
  render() {

    return (
        <>
            Component E Context {this.context}
           <ComponentF/>
        </>

    )
  }
}

export default ComponentE