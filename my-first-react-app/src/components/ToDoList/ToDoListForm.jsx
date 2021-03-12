import react, { useState } from 'react'

const ToDoListForm = (props) => {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTask(newTask);
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
            ></input>
            <button>Submit</button>
        </form>

    )
}

export default ToDoListForm;