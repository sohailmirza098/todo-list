import React from 'react'
import Checkbox from '../../atoms/CheckboxInput/Checkbox';
import RemoveButton from '../../atoms/RemoveButton/RemoveButton';


export default function TodoItem(props) {
  
  const getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    }
  }

  const {id, title} = props.todo;

  return (
    <div style={getStyle()}>
      <p>
        <Checkbox markComplete={ props.markComplete } id={id} /> {' '}
        { title }
        <RemoveButton id={id} delTodo={ props.delTodo } />
      </p>
    </div>
  )
}
