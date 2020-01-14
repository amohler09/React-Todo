import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const data = [
  {
    task: 'Unpack Clothes',
    id: 123468,
    completed: false
  },
  {
    task: 'Organize Kitchen',
    id: 685643,
    completed: false
  },
  {
    task: 'Do Dishes',
    id: 365954,
    completed: false
  },
  {
    task: 'Wash Clothes',
    id: 497358,
    completed: false
  },
  {
    task: 'Give the Dog a Bath',
    id: 854965,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super ();

    this.state = {
      todoList: data
    }
  }
  
  render() {
    return (
      <div className='App'>
        <div className='top'>
        <h1>To Do List</h1>
        <TodoForm />
        <TodoList todo={this.state.todoList} />
        </div>
       
      </div>
    );
  }
}

export default App;
