import React,{useEffect, useState} from 'react'

function UseEffectWithCleanUp() {
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
        // clean up function that will remove the event listener
        // when the component is unmounted
        return () => {
            window.removeEventListener('mousemove', mouseMoveListener)
        }
    }, []) // no deps means only one time will be called

    return (
        <div>
            Hooks x - {x} y - {y}
        </div>
    )
}

export default UseEffectWithCleanUp
