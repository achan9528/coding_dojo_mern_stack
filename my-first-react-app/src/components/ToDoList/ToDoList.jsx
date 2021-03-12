import react, { useState } from 'react'
import Task from './Task'

const ToDoList = (props) => {
    const tasks = [...props.tasks];
    return(
        <ul style={{listStyleType:"none"}}>
            {
                tasks.map( (item,i) => 
                    <li>
                        <Task key={i} index={i} name={item} deleteTask={props.removeTask}>{item}</Task>
                        {/* {item}; */}
                    </li>
                )
            }
        </ul>
    )
}

export default ToDoList;