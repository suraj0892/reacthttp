import axios from 'axios'
import React, { Component } from 'react'

export class HttpGet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value : []
        }
    }
    

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts').then( (response) => {

            this.setState({
                value : response.data
            })

        }).catch((error) => {

        });

      
    }


    render() {
       
     const {value} = this.state
     console.log(value)
        return (
            <div>
               {value.map(d => <h1 key={d.id}> {d.id} {d.title}</h1>)}
            </div>
        )
    }
}

export default HttpGet
