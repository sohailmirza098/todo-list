import React, {useState, useEffect, useContext} from 'react';
import Todos from "./components/organisms/Todos/Todos";
import Header from './components/molecules/Header/Header';
import AddTodo from './components/molecules/AddTodo/AddTodo';
import Container from '@material-ui/core/Container';
// import { TodoContext } from './components/TodoContext'


import "./App.css";

import { ulid } from 'ulid';

export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('todos.json')
      .then((res) => { return res.json() })
      .then((data) => { 
        setTodos(data);
      })
  }, []);

  const markComplete = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  const delTodo = (id) => {
    console.log('clicked');
    setTodos([...todos.filter(todo => todo.id !== id)]);
  }

  const addTodo = (title) => {
    const newTodo = {
      id: ulid(),
      title: title,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  }

  return (
    
    <Container className="App" maxWidth="sm">
        <Header />
          <React.Fragment>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
          </React.Fragment>
    </Container>
  )
}
