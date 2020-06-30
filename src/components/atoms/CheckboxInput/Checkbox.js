import React from 'react'

export default function Checkbox(props) {
    return (
        <input type="checkbox" onChange={ () => props.markComplete(props.id) }/>
    )
}
