import react, { useState } from 'react'
import Task from './Task'

const ToDoList = (props) => {
    const tasks = [...props.tasks];
    return(
        <ul style={{listStyleType:"none"}}>
            {
                props.tasks.map( (item,i) => 
                    <li key={i}>
                        <Task index={i} name={item} deleteTask={props.removeTask}>{item}</Task>
                        {/* {item}; */}
                    </li>
                )
            }
        </ul>
    )
}

export default ToDoList;