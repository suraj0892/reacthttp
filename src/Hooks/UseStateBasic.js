import React,{useState} from 'react'

function UseStateBasic() {

    const [Count, setCount] = useState(0)

    const increment = () => {
        setCount(Count+1)
    }
    return (
        <div>
            <button onClick={increment}>Clicked {Count} time(s)</button>
        </div>
    )
}

export default UseStateBasic
