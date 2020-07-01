// import React, { Component } from "react";
// import TodoItem from '../molecules/TodoItem/TodoItem';
// import PropTypes from 'prop-types';

// class Todos extends Component {

//   render() {
//     return this.props.todos.map((todo) => (
//       <TodoItem key={ todo.id } todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
//     ));
//   }
// }

// // PropTypes
// Todos.propTyes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired 
// }

// export default Todos;

import React from 'react';
import TodoItem from '../molecules/TodoItem/TodoItem';

export default function Todos(props) {

  return props.todos.map((todo) => (
    <TodoItem key={ todo.id } todo={todo} markComplete={props.markComplete} delTodo={props.delTodo} />
  ));
}

