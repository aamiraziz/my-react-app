/*
    * This file uses useReducer function to change counter value.
    * Dated: July 07, 2025.
    * useReducer is the advance of useState to handle multiple states easily
    * it has a reducer function and initial state
    * in reducer function it has state and action.
*/

import {React, useReducer} from 'react'

const initialState = {count: 0}

function reducer (state, action) {

    switch (action.type) {

        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1}
        case 'reset':
            return { count: 0}
        default:
            throw new Error()

    }
}

function CounterR () {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <div>
            <h1>Counts: {state.count} </h1>
            
            <button onClick={ () => dispatch( {type: 'increment'} ) } >+</button>
            <button onClick={ () => dispatch( {type: 'decrement'} )} >-</button>
            <button onClick={ () => dispatch( {type: 'reset'} ) } >Reset</button>
        </div>

    )

}

export default CounterR