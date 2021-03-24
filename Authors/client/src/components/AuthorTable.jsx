import axios from 'axios';
import react, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'


const AuthorTable = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/")
            .then(response => {
                console.log(response.data.authors);
                setAuthors(response.data.authors);
                setLoaded(true);
            }).catch(err => {
                console.log(err);
            })
    }, [])


    const toUpdatePage = (e, item) => {
        e.preventDefault();
        navigate('/edit/' + item._id);
    }

    const deleteAuthor = (e, item) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/authors/delete/" + item._id)
            .then(response => {
                setAuthors(authors.filter(a => a._id != item._id));
            }).catch(err => {
                console.log(err);
            })
    }

    // if (loaded){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((item, i) => {
                            return(
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>
                                        <button onClick={e => toUpdatePage(e, item)}>Edit</button>
                                        <button onClick={e => deleteAuthor(e, item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    // }
    // return null;
}

export default AuthorTable;