import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            comments:'',
            topics:''
        }
        
    }
    handleUserName=(event)=>{
        this.setState({
            message:event.target.value
        })
     
    }
    handleComments=(event)=>{
        this.setState({
            comments:event.target.value
        })
     
    }
    handleTopics=(event)=>{
        this.setState({
            topics:event.target.value
        })

    }
    hadleSubmit=(event)=>{
       alert(`${this.state.message} ${this.state.comments} ${this.state.topics}`)
       event.preventDefault()
    }
    render() {

const {message,comments,topics}=this.state
        return (
            <form onSubmit={this.hadleSubmit} >
                <div>
               <label >UserName</label>
               <input type="text" value={message} onChange={this.handleUserName}/>
                </div>
               <div>
                <label >Comments</label>
                <textarea value={comments} onChange={this.handleComments}  cols="20" rows="5"></textarea>
               </div>
               <div>
                <label >Topics</label>
                <select name="topics" value={topics} onChange={this.handleTopics}>
                    <option value="react">React</option>
                    <option value="javascript">Javascript</option>
                    <option value="angular">Angular</option>
                </select>
           
               </div>
               <div>
               <input type="submit" />
               </div>
       
            </form>

        )
    }
}

export default Form