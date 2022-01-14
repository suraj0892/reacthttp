import React,{useRef, useState, useEffect} from 'react'

function UseRefBasic2() {

    const [timer, setTimer] = useState(0)
    const intervalRef =  useRef()


    useEffect(() => {
        console.log(new Date('2022-01-10 14:00:00'))   
        intervalRef.current  = setInterval(() => {
            setTimer(prevValue => prevValue + 1)
        }, 1000)

        return () => {
           clearInterval(intervalRef.current) 
        }
    }, [])

    return (
        <div>
            {timer}
            <button onClick={() => clearInterval(intervalRef.current)}> Clear Interval</button>
        </div>
    )
}

export default UseRefBasic2
