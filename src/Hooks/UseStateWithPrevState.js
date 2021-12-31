import React,{useState} from 'react'

function UseStateWithPrevState() {

    const [count, setCount] =  useState(0)


    const clickHandler = (incrementBy) => {

        for(let i=0; i <incrementBy; i++){
            setCount((prevCount) => {
                return prevCount + 1
            })
        }

    }

    return (
        <div>
            <h1> { count }</h1>
            <br></br>
            <button onClick={() => {setCount(0)}}>reset</button>   
            <button onClick={() => clickHandler(1)}>increment by 1</button> 
            <button onClick={() => clickHandler(2)}>increment by 2</button> 
            <button onClick={() => clickHandler(5)}>increment by 5</button> 

        </div>
    )
}

export default UseStateWithPrevState
