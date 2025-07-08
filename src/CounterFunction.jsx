/*
  * Date: Wednesday, June 18, 2025
  * This file contains function of counter that will increase or decrease interger value
  * This is functiional based component
  * For functional based component we use useState method in react 
*/

import { React,  useState } from 'react'

function CounterFunction () {

  // Initialize counter value to 0 using useState method
  // declare the setCount function

  const [count, setCountt] = useState(0)

  // To increase the value of count variable
  const Increment = () => {
    // setCountt(count + 1)
    setCountt(prevCount => prevCount + 1)
  }

  // To decrease the value of count variable
  const Decrement = () => {
    // setCountt(count - 1)
    setCountt(prevCount => prevCount - 1)
  }

  // Return Function
  return (

    <div>
      <h1>Counter: { count } </h1>
      <button onClick={Increment} >Increment</button>
      <button onClick={Decrement} >Decrement</button>
    </div>

  )

}

// Export the CounterFunction
export default CounterFunction