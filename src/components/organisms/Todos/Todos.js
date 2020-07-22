import React from 'react';
import TodoItem from '../../molecules/TodoItem/TodoItem';

export default function Todos(props) {

  // if(props.todos.empty()) return (<React.Fragment></React.Fragment>)
  return (
    <div data-testid="todosid">
    {props.todos.map((todo) => (
      <TodoItem  key={ todo.id } todo={todo} markComplete={props.markComplete} delTodo={props.delTodo} />
  ))}
    </div>
  )
}

