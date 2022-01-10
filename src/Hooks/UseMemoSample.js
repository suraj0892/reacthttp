import React,{useState, useMemo} from 'react'

function UseMemoSample() {

    const [CountOne, setCountOne] = useState(0)
    const [CountTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(prevCount => {
            return prevCount + 1
        })
    }

    const incrementTwo = () => {
        setCountTwo(prevCount => {
            return prevCount + 1
        })
    }
 
    const isEven = useMemo(() => {
        let i=0
        while(i < 2000000000){
            i++
        }
        return CountOne % 2 === 0
    }, [CountOne])

    // function isEven() {
    //     let i=0
    //     while(i < 2000000000){
    //         i++
    //     }
        
    //     return CountOne % 2 === 0
    // }

    return (
        <div>
            {CountOne} <button type="button" onClick={incrementOne}>Count One</button>
            <span> {isEven ?  'Even' : 'odd'}</span>
            {CountTwo} <button type="button" onClick={incrementTwo}>Count Two</button>

        </div>
    )
}

export default UseMemoSample
