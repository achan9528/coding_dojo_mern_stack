import { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const EntryForm = (props) => {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const cancelHandler = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (name.length < 1) {
            setNameError("Name required!");
        } else if (name.length < 3) {
            setNameError("Name must be at least 3 characters long!");
        } else {
            console.log(err);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            {props.caption}
            <div>
                <label>
                    Name:
                    <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder={props.placeholder}></input>
                    {
                        nameError ?
                            <p style={{ color: "red" }}>{nameError}</p> :
                            ""
                    }
                </label>
            </div>
            <button onClick={cancelHandler}>Cancel</button>
            <button>Submit</button>
        </form>
    )

}

export default EntryForm;
