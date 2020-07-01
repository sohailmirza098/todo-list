import React from 'react';
import TodoItem from '../molecules/TodoItem/TodoItem';

export default function Todos(props) {

  return props.todos.map((todo) => (
    <TodoItem key={ todo.id } todo={todo} markComplete={props.markComplete} delTodo={props.delTodo} />
  ));
}

