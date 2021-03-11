import react, { useState} from 'react';

const ColorForm = (props) => {
    const [newColor, setNewColor] = useState("");
    const colors = [];

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onNewColor(newColor);
    }

    return (
        <form onSubmit = { handleSubmit }>
            <h1>Type a color</h1>
            <input
                onChange = { (e) => setNewColor(e.target.value) }
                value = {newColor}
            ></input>
            <button>Submit</button>
        </form>
    )
}

export default ColorForm;