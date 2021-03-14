import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [selectedValue, setSelectedValue] = useState("")
    const [typedValue, setTypedValue] = useState("")

    const choices = [
        "",
        "planets",
        "people"
    ]

    const selectHandler = (e) => {
        setSelectedValue(e.target.value);
    }

    const typedHandler = (e) => {
        setTypedValue(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(selectedValue);
        console.log(typedValue);
        props.submitHandler(selectedValue, typedValue);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="choices">Search for:</label>
                <select name="choices" value={selectedValue} onChange={(e) => { selectHandler(e) }}>
                    {
                        choices.map((item, i) => (
                            <option key={i} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="number">Id:</label>
                <input name="number" value={typedValue} onChange={(e) => { typedHandler(e) }}></input>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Search;