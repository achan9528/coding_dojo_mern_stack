import axios from 'axios';
import react, { useState, useEffect } from 'react';
import { Link } from '@reach/router'
import PageTitle from '../components/PageTitle'
import AuthorTable from '../components/AuthorTable'

const Home = (props) => {

    // const [authors, setAuthors] = useState([])

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/authors/")
    //         .then(response => {
    //             console.log(response.data.authors);
    //         }).catch(err => {
    //             console.log(err);++
    //         })
    // }, [])

    return (
        <div>
            <PageTitle title="Favorite authors"></PageTitle>
            <Link to="/new">Add an Author</Link>
            <AuthorTable></AuthorTable>
        </div>
    )

}

export default Home;