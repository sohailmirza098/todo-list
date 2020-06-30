import React from 'react'

export default function TextInput(props) {
    return (
        <input type="text" name="title" placeholder="Add Todo..." style={{flex:'10', padding: '5px'}} value={props.title} onChange={props.onChange} autoComplete='off' />             
    )
}


