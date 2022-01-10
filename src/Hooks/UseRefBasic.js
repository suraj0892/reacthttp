import React,{useRef, useEffect} from 'react'

function UseRefBasic() {

    const ref = useRef(null)

    useEffect(() => {
        
        ref.current.focus()
       
    }, [])

    return (
        <div>
            <input ref ={ref} type="text"></input>
        </div>
    )
}

export default UseRefBasic
