import React, { Component ,PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Sundar'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Sundar'
            })
        }, 2000)
    }
    render() {
        console.log("Parent Component Render");
        return (
            <>
                <div>Parent Component</div>
                {/* <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/> 
            </>


        )
    }
}

export default ParentComp