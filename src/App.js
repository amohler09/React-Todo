import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const tasks = [
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
// - The `task` field is the todo title that will be shown to the user.
// - The `completed` field should default to `false` and will be the field that we toggle when we complete a todo.
// - The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.


//Add constructor and super
//Set an initial state

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
      state = {
        tasks: [],
        taskInput: ''
    };

  componentDidMount() {
    this.setState({
      tasks: tasks
    })
  }

    //use class methods to update state
  // toggleItem = id => {
  //   //find the item clicked on
  //   //toggle the completed field
  //   //update state with new todo data
  //   const newTodos = this.state.todoList.map(item => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         completed: !item.completed
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   //update item list
  //   this.setState({
  //     tasks: newTodos
  //   });
  // };

  addItem = e => {
    e.preventDefault();
    const newItem = {
      task: this.state.taskInput,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem],
      taskInput: ''
    })
  }

  toggleItem = id => {
    this.setState ( (prevState) => {
      return {
        tasks: prevState.tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task, completed: !task.completed
            }
          } else {
            return task
          }
        })
      }
    })
  }

  clear = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => {
       return  !task.completed
        //return console.log('tasks', task);
      })
    })
  }

  handleChanges = event => {
    //will update the state with each keystroke
    this.setState({
        [event.target.name]: event.target.value
    });
};



  render() {
    return (
      <div className='App'>
        <div className='top'>
          <h1>To Do List</h1>
        <TodoForm 
          addItem={this.addItem} 
          taskInput={this.state.taskInput} 
          
          handleChanges={this.handleChanges}
          />  
        </div>
        <TodoList 
        tasks={this.state.tasks} 
        toggleItem={this.toggleItem} 
        clear={this.clear}
        />
      </div>
    );
  }
}

export default App;

