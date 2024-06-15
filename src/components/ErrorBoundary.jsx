import React, { Component } from 'react'

 class ErrorBoundary extends Component {
constructor(props) {
  super(props)

  this.state = {
    hasError:false
  }
}
    static getDerivedStateFromError(error){
       return{
        hasError:true
       }
    }
    componentDidCatch(err,info){
        console.log(err);
        console.log(info);
    }
  render() {
   if(this.state.hasError){
    return <h1>Something Went Wrong</h1>
   }
   else{
    return this.props.children
   }
  }
}

export default ErrorBoundary