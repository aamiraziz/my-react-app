// import { useState, React } from 'react'
import {React, Component} from 'react'
import './App.css'
// import Variables from './Variables.jsx'
import MyFunctionalComponent from './MyFunctionalComponent'
import MyForm from './MyForm.jsx';

class App extends Component { 

  constructor(props) {
      super(props);
      this.state = {
        message: 'Hello from App component!',
        title: "Mryyy.",
        // shortListedCities: this.props.myFunction()
        name: 'Khanni',
        age: 35,
        isStudent: false
      };
    }

  

  render () {
    const cityArray = ['Karachi', 'Lahore', 'Islamabad', 'Multan', 'Hyderabad']
    const {message, title, name, age, isStudent} = this.state
  
    return (
      <div>
        <h1>{message}</h1>
        <h2> {title} </h2>
        <MyFunctionalComponent name={name} age={age} isStudent={isStudent} />
      </div>
    )
  }
        
}

export default App
