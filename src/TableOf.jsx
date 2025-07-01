// this file will print the table of input number by the user

import {React, Component} from 'react'
import './assets/styles/TableOf.css'
import styled from 'styled-components'
// import './MyStyle'
// import Title from './MyStyle'
import logo from './assets/images/flag.png'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;


class TableOf extends Component {

    // create constructor and define variables in it

    constructor (props) {

        super (props) 
        this.state = {
            number: this.props.number || 2,
            multipliers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
        
    }

    // write render function and return output in it

    render () {

        // const table = this.state.multipliers.map(multiply => multiply * this.state.number)
        
        return (

            <div className='bgImage'>    

                <Wrapper>
                    <Title>
                    Hello World!
                    </Title>
                </Wrapper>

                <img src={logo} alt='Logo' /> 
                <h1 style={{color:"blue", backgroundColor:"white"}}> Table Of: {this.state.number} </h1>
                <div>
                    {this.state.multipliers.map(multiply => (<p className='tableContent'> {this.state.number} X {multiply} = {multiply * this.state.number} </p>) )}
                </div>
            </div>
        )
    }
}

export default TableOf