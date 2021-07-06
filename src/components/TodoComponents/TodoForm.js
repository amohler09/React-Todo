import React from 'react'

const TodoForm = props => {
     
        return (
            <form onSubmit={props.addItem}>
                <input
                type='text'
                name='taskInput'
                value={props.taskInput}
                onChange={props.handleChanges}
                />
                <button className='add-to-list'>Add Todo Item</button>   
            </form>
        )
    }


export default TodoForm;