import React,{useState} from 'react'

function UseStateWithObjects() {

    const [Name , setName] = useState({firstName : '' , lastName : ''})

    function nameHandler(event) {
    
         setName({...Name , [event.target.name] : event.target.value})
    }

    return (
        <div>
            <h1> Hello!,  {Name.firstName} {Name.lastName} </h1>
            <input type="text" name="firstName" value={Name.firstName} onChange={(e) => nameHandler(e)}/>
            <input type="text" name="lastName" value={Name.lastName} onChange={(e) => nameHandler(e)}/>
        </div>
    )
}

export default UseStateWithObjects
