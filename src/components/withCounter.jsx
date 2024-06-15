import React,{Component} from "react";

const withCounter=(WrappedComponent,incrementNumber)=>{
  class WithComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      increaseCounter=()=>{
          this.setState((previousState)=>{
              return{
                  count:previousState.count+incrementNumber
              }
          })
  
      }
      render() {
        // console.log(this.props.name);
        return <WrappedComponent count={this.state.count} increaseCounter={this.increaseCounter}  {...this.props}/>

      }

    }
    return WithComponent


}
export default withCounter

