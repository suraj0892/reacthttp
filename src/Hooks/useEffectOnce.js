import React,{useState, useEffect} from 'react'

function UseEffectOnce() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const mouseMoveListener = (event) => {
        console.log('event listener')
        setX(event.clientX)
        setY(event.clientY)
    }
 

    // mimics component Did Mount (class component implementation)
    useEffect(()=>{
        console.log('use Effect called')
        window.addEventListener('mousemove', mouseMoveListener)
    }, []) // no deps means only one time will be called

    return (
        <div>
            Hooks x - {x} y - {y}
        </div>
    )
}

export default UseEffectOnce
