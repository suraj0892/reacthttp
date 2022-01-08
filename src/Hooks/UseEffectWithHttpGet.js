import React,{useState, useEffect} from 'react'
import axios from 'axios'

function UseEffectWithHttpGet() {
    
    const[id, setId] = useState(1)

    const[post, setPost] = useState({})

    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then( (response) => {

            setPost(
               response.data
            )
            console.log(post)

        }).catch((error) => {

        });

    }, [id])
    
    return (

        <div>
            <input type="text" value={id} onChange={(event) => setId(event.target.value)}></input>
            {post.title}
        </div>

)
}

export default UseEffectWithHttpGet
