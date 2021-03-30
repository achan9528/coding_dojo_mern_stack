// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { useEffect, useState} from 'react';

const ResultsTable = (props) => {
    const [pets, setPets] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res);
                setPets(res.data.pets);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    pets.map((item,key) =>{
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>
                                    <Link to={"/pets/" + item._id}>Details</Link>
                                    <Link to={"/pets/" + item._id + "/edit"}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    )
}

export default ResultsTable;