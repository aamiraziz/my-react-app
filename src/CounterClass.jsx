/* 
    * Date: Wednesday, June 18, 2025
    * This file contains the counter class that will increase or decrease the counter value.
    * This is class based component.
    * For class based component, we use setState method.
*/

import { React, Component } from 'react'

class CounterClass extends Component {

    // Write Constructior
    constructor (props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    // To increase counter value
    increment = () => {

        // to change value we 'll use this.setState
        this.setState( {count: this.state.count + 1} )

    }

    // To decrease the value
    decrement = () => {

        this.setState( {count: this.state.count - 1} )

    }

    // Render Function: This function will render the output shown to user on html page
    render() {

        return (

            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.increment} >Increment</button>
                <button onClick={this.decrement} >Decrement</button>
            </div>

        )
    }

}

export default CounterClass