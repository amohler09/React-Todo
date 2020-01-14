import React from 'react';
import { render } from 'react-dom';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }


handleChanges = e => {
    this.setState({
        todoText: e.target.value
    });
};

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input
            type='text'
            name='item'
            value={this.state.todoText}
            onChange={this.handleChanges}
            />
            <button type='submit'>Add Todo Item</button>
            <button>Clear Completed Tasks</button>
        </form>
    );
  }
}

export default TodoForm;