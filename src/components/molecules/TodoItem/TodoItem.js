import React from 'react'
import Checkbox from '../../atoms/CheckboxInput/Checkbox';
import RemoveButton from '../../atoms/RemoveButton/RemoveButton';


export default function TodoItem(props) {
  
  const getStyle = () => {
    console.log(props.todo);
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    }
  }

  // const {title} = props.todo;

  return (
    
    <div style={getStyle()} data-testid="todoid" >
        <Checkbox markComplete={ props.markComplete } id={props.todo.id} />
        { props.todo.title }
        <RemoveButton id={props.todo.id} delTodo={ props.delTodo } value={'x'}/>

    </div>
  )
}
