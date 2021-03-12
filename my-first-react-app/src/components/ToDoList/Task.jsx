import react, { useState } from 'react'

const Task = (props) => {
    const [name, setName] = useState(props.name);
    const[isComplete, setIsComplete] = useState(false);
    const[labelStyle, setLabelStyle] = useState({textDecorationLine: "none"})

    const setStatus = (e)=>{
        if (isComplete==true){
            setIsComplete(false);
            setLabelStyle({
                textDecorationLine:"none"
            })
        } else{
            setIsComplete(true);
            setLabelStyle({
                textDecorationLine:"line-through"
            })
        }
    }

    const deleteTask = (e,i) => {
        console.log(e)
        e.preventDefault();
        props.deleteTask(i);
    }

    return(
        <form>
            <label style={labelStyle}>
                <input type="checkbox" checked={isComplete} onChange={e => setStatus(e)}/> {name}
            </label>
            <button onClick={(e) => deleteTask(e,props.index)}>Delete</button>
        </form>
    )
}

export default Task;