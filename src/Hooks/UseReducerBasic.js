import React,{useReducer} from 'react'

function UseReducerBasic() {

    const initialCount = 0;
    const reducer = (count , action) => {
        switch(action){
            case 'inc':
                return count + 1
            case 'dec' :
                return count - 1
            case 'reset' :
                return initialCount
            default:
                return count
        }
         
            
    }

    // use reducer is alternate to state , it takes one function adn initial state as arg
   const [state, dispatch] = useReducer(reducer, initialCount)

    return (
        <div>
            {state}
            <button type='button' onClick={() => {dispatch('inc')}}>Increment</button>
            <button type='button' onClick={() => {dispatch('dec')}}>Decrement</button>
            <button type='button' onClick={() => {dispatch('reset')}}>Reset</button>
        </div>
    )
}

export default UseReducerBasic
