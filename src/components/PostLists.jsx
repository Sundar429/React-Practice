import axios from 'axios'
import React, { Component } from 'react'

export class PostLists extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: [],
            errormessage: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    post: response.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errormessage: 'Error Retreiving Data '
                })

            }
            )

    }
    render() {
        const { post, errormessage } = this.state
        return (
            <div>List of Post

                {
                    post.length ? post.map(
                        post => <div key={post.id}>{post.title}</div>
                    ) : null
                }
                {
                    errormessage ? <div>{errormessage}</div> : null
                }
            </div>
        )
    }
}

export default PostLists