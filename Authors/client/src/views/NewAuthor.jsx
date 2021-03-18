import axios from 'axios';
import { Link, navigate } from '@reach/router'
import PageTitle from '../components/PageTitle'
import EntryForm from '../components/EntryForm'

const NewAuthor = (props) => {

    const submitHandler = (e, name) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", {
            name: name
        })
            .then(response => {
                navigate('/')
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <PageTitle title="Favorite authors"></PageTitle>
            <Link to="/">Home</Link>
            <EntryForm submitHandler={submitHandler} caption="Enter New Author"></EntryForm>
        </div>
    )

}

export default NewAuthor;