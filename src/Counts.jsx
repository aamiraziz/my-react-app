/*
    * This file contains code that will calculate the number of clicks on the button
    * This is functional method and will use useState method of react.
    * Dated: July 06, 2025.
    * 
*/

import react, {useState} from "react"

function Counts () {

    const [counts, setCounts] = useState(0)

    return (

        <div>
            <h1>You have clicked {counts} times </h1>
            <button onClick={() => setCounts(counts + 1)}>Click Me</button>
        </div>
    )
}

export default Counts