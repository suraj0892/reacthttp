import React,{useEffect, useState} from 'react'

function UseEffectBasic() {

    const[count, setCount] = useState(0);

   useEffect(() => {
       document.title = `Clicked ${count} times`
   })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}> clicked {count} times</button>
        </div>
    )
}

export default UseEffectBasic
