import React from 'react';

const Todo = props => {
    return (
        <div className='todo'>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;