// your components will all go in this `component` directory.

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props);
    
    return (
        <div className='todo-list'>
            {props.tasks.map(task => (
                <Todo 
                key={task.id} 
                task={task}
                toggleItem={props.toggleItem}
                 />
            ))} 
            <button onClick = {props.clear}>Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;