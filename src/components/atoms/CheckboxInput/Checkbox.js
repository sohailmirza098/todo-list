// import React from 'react'

// export default function Checkbox(props) {
//     return (
//         <input type="checkbox" onChange={ () => props.markComplete(props.id) }/>
//     )
// }


import React from 'react'


const Checkbox = (props, { children }) => (
    <input type="checkbox" onChange={ () => props.markComplete(props.id) }/>
)

export default Checkbox; 