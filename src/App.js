// import React, { Component } from "react";
// import Todos from "./components/organisms/Todos";
// import Header from './components/molecules/Header/Header';
// import AddTodo from './components/molecules/AddTodo/AddTodo';


// import { ulid } from 'ulid';

// import "./App.css";

// class App extends Component {
//   state = {
//     todos: []
//   };

//   constructor(props){
//     super(props)
//     this.markComplete = this.markComplete.bind(this)
//     this.delTodo = this.delTodo.bind(this)
//   }

//   markComplete = (id) => {
//     this.setState({todos: this.state.todos.map(todo => {
//       if(todo.id === id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     }) });
//   }


//   delTodo = (id) => {
//     this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
//   }

//   addTodo = (title) => {
//     const newTodo = {
//       id: ulid(),
//       title: title,
//       completed: false
//     };
//     this.setState({
//       todos: [newTodo, ...this.state.todos]
//     });
//   }

//   render() {
//     return (
//         <div className="App">
//           <div className="container">
//             <Header />
//               <React.Fragment>
//                 <AddTodo addTodo={this.addTodo} />
//                 <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
//               </React.Fragment>            
//           </div>
//         </div>
//     );
//   }
// }

// export default App;


import React, {useState, useEffect} from 'react';
import Todos from "./components/organisms/Todos";
import Header from './components/molecules/Header/Header';
import AddTodo from './components/molecules/AddTodo/AddTodo';
import Container from '@material-ui/core/Container';

import "./App.css";

import { ulid } from 'ulid';

export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('todos.json')
      .then((res) => { return res.json() })
      .then((data) => { 
        setTodos(data);
        // console.log(data);
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
    {/* <div className="App"> */}
      {/* <div className="container"> */}
        <Header />
          <React.Fragment>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
          </React.Fragment>            
      {/* </div> */}
    {/* </div> */}
    </Container>
  )
}
