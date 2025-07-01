import {React, Component} from 'react'

// import App from './App.jsx'

class Variables extends Component {

    // create constructor and define variables in it
    constructor (props) {

        super(props)
        this.state = {
            name: "Aamir Aziz",
            count: 0,
            cities: ['Lahore', 'Karachi', 'Multan', 'Islamabad', 'Peshawar'],
            title: this.props.titleefe || "Mr."
            
        }

        

    }

     

    // write render function and return output in it
    render () {
        const message = "Hello from variable"
        const shortListedCities = this.state.cities.filter( city => city.length > 6 )

        const alertMessage = () => { alert("Hello") }        
       
        return (
            <div>
                {/* Displaying a literal string */}
                <h1>Variable Component Starts Here.</h1>

                {/* Displaying a variable from state */}
                <p>Name: {this.state.title} {this.state.name} </p>

                { /* Displaying a variable defined in render function */}
                <p>Message: {message} </p>

                { /* Displaying the result of an expression */}
                <p> 3 + 3 = {3 + 3} </p>

                { /* Displaying the list using map */}
                <ul>
                    { this.state.cities.map(city => (<li key={city}> {city} </li>)) }
                </ul>

                { /* Displaying short listed cities */ }
                <ul>
                    {  shortListedCities.map( city => <li key={city}> {city} </li> ) }
                </ul>

               

                { /* Displaying with conditional rendering */}
                {this.state.count > 0 && <p>Count is greater than 0</p> }

                { /* passing function to child component */}
                {/* { <App myFunction={alertMessage} /> } */}
            </div>
        )
    }
}

export default Variables