import React from "react";

export class ClassComponent extends React.Component{
    render(){
        const{name}=this.props
       return <h1>The car is {name}</h1>
    }
}