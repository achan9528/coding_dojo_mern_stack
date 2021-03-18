import axios from 'axios';
import { Link } from '@reach/router'
import { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle'
import EntryForm from '../components/EntryForm'

const UpdateAuthor = (props) => {

    const [placeholder, setPlaceholder] = useState("");

    useEffect( ()=>{
        axios.get("http://localhost:8000/api/authors/" + props.id)
        .then(response=>{
            console.log(response.data.author.name)
            setPlaceholder(response.data.author.name)
        }).catch(err=>{
            console.log(err);
        })
    }, [])

    const submitHandler = (e, name) =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/update/" + props.id, {
            name: name
        })
        .then(response=>{
            console.log(response.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <PageTitle title="Favorite authors"></PageTitle>
            <Link to="/">Home</Link>
            <EntryForm submitHandler={submitHandler} placeholder={placeholder} caption="Update Author"></EntryForm>
        </div>
    )

}

export default UpdateAuthor;