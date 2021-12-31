import React, { Component } from 'react'
import axios from 'axios'
export class HttpPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId : '', 
             title : '',
             body : ''
        }
    }
    
    onChangeHandler = (event) => {
        this.setState(
            {[event.target.name] : event.target.value}
        )
        console.log(this.state)
    }

    submitHandler = async (event) => {
        event.preventDefault()

        await axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then((response) => {
            console.log(response)
        }).catch((error) => {

        })
        console.log('after await')

    }

    render() {
       const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.onChangeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.onChangeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body}  onChange={this.onChangeHandler}  />
                    </div>
                    <div>
                       <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default HttpPost
