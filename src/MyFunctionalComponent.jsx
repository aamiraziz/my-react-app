import React from 'react'
import PropTypes from 'prop-types'


function MyFunctionalComponent ({ name, age, isStudent }) {
    return (
        <div>
            <p>Name: {name} </p>
            <p>Age: {age} </p>
            <p>Is Student: {isStudent ? 'Yes' : 'No'} </p>
        </div>
    )
}

MyFunctionalComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default MyFunctionalComponent