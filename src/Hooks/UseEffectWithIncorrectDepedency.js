import React,{useEffect, useState} from 'react'

function UseEffectWithIncorrectDepedency() {

    const [count, setCount] =  useState(0); 

    // use effect runs when the state is updated
    const tick =() => {
        // uncomment below code and remove deps to achieve teh same output
        // setCount(prevCount => {
        //     return prevCount + 1;
        // })
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return() => {
            clearInterval(interval)
        }
    },[count]) // need to specify deps when set count is not updated based on prev state

   
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffectWithIncorrectDepedency
