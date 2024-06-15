import React, { Component } from 'react'
import Fragment2 from './Fragment2'

export class Fragment1 extends Component {
  render() {
    return (
      <table>
        <tbody>
            <tr>
                <Fragment2/>
            </tr>
        </tbody>
      </table>
    )
  }
}

export default Fragment1