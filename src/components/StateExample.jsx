import React from "react";

export class StateExample extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Hello Welcome All"
        }
    }
 changeMessage(){
       this.setState({
        message: "Thank You All"
       })
 }
    render() {


        return (
            <>
                <h1>{this.state.message}</h1> 
                <button onClick={()=>this.changeMessage()}>Click</button>

            </>

        )
    }

}