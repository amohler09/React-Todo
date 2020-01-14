import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = event => {
        //will update the state with each keystroke
        this.setState({
            item: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.task);
    }

    //use Class properties to submit form

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='item'
                value={this.state.item}
                onChange={this.handleChanges}
                />
                <button className='add-to-list' name='item' id='item' type='submit'>Add Todo Item</button>
                <button className='clear-list'>Clear Completed Items</button>   
            </form>
        )
    }
}

export default TodoForm;