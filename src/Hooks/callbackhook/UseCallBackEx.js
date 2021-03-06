import React,{useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function UseCallBackEx() {
    const [age, setAge] = useState(30)
    const [salary, setSalary] = useState(200000)

    // 1. Use Call back improves performance
    // 2. Use Call creates a memoized functionwhich cause to re render only when deps are updated
    // 3. Use call back should be use when there are several components are rendered under parent component
    const IncSalary = useCallback(
        () => {
            setSalary(prevSal => {
                return prevSal + 100000
            })
        },
        [salary]
    )
    const IncAge = useCallback(
        () => {
            setAge(prevAge => {
                return prevAge + 1
            })
        },
        [age]
    ) 
    return (
        <div>
            <Title/>
            <Count text='Age' count={age}></Count>
            <Button handleClick= {IncAge}> Increment age</Button>
            <Count text='Salary' count={salary}></Count>
            <Button handleClick= {IncSalary}> Increment Salary</Button>
        </div>
    )
}

export default UseCallBackEx
