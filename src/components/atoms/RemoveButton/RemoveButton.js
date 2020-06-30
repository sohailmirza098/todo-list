import React from 'react'

export default function RemoveButton(props) {
    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    return (
        <button onClick={() => props.delTodo(props.id)} style={btnStyle}>x</button>
    )
}
