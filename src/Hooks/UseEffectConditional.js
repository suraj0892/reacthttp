import React,{useEffect, useState} from 'react'

function UseEffectConditional() {

    const[count, setCount] = useState(0);
    const[name , setName] = useState('')

   useEffect(() => {
       console.log('document title is updated!!!')
       document.title = `Clicked ${count} times`
   }, [count]) // the dependencies are like watchers when the value is changed , the component is rerendered

    return (
        <div>
            <input type="text" value={name} onChange={(event) => {
                setName(event.target.value)
            }}></input>
            <button onClick={() => setCount(count + 1)}> clicked {count} times</button>
        </div>
    )

}

export default UseEffectConditional
