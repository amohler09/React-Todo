import React from 'react';
import './Todo.css'

const Todo = props => {
    return(
        <div
        className={`${props.task.completed ? 'completed' : ''}`}
        onClick={() => props.toggleItem(props.task.id)}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo;
