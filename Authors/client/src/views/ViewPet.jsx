import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import '../App.css';
// import MessageBox from './MessageBox'
// import MessageThread from './MessageThread'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PetForm from '../components/PetForm';
import PageHeader from '../components/PageHeader';
import PetDescription from '../components/PetDescription';

const ViewPet = (props) => {
    const [petInfo, setPetInfo] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props.id)
            .then(res => {
                console.log(res);
                setPetInfo(res.data.pet)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const adoptPet = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/pets/delete" + petInfo.name)
            .then(res => {
                console.log("successfully deleted");
                navigate("/");
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <PageHeader main="Pet Shelter" sub={"Details About: " + petInfo.name} link={backHomeLink}></PageHeader>
            <button onClick={adoptPet}>Adopt {petInfo.name}</button>
            <PetDescription petInfo={petInfo}></PetDescription>
        </div>

    )
}

export default ViewPet;