// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import '../App.css';
// import MessageBox from './MessageBox'
// import MessageThread from './MessageThread'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PetForm from '../components/PetForm';
import PageHeader from '../components/PageHeader';

const NewPet = () => {

    const backHomeLink = () => {
        return (
            <Link to="/">back to home</Link>
        )
    }

    const submitAction = (
        petName, petType, petDescription, petSkills, setPetNameError,
        setPetDescriptionError, setPetTypeError) => {
        let errors = []
        console.log(petSkills)
        axios.post("http://localhost:8000/api/pets/new",
            {
                name: petName,
                type: petType,
                description: petDescription,
                skills: petSkills,
                // skill1: skill1,
                // skill2: skill2, 
                // skill3: skill3,
            })
            .then(data => {
                console.log(data);
                navigate('/')
            }).catch(err => {
                if (err.response){
                    console.log(err.response.data)
                    if (err.response.data.errors.name){
                        setPetNameError(err.response.data.errors.name.message)
                    }
                    if (err.response.data.errors.description){
                        setPetDescriptionError(err.response.data.errors.description.message)
                    }
                    if (err.response.data.errors.type){
                        setPetTypeError(err.response.data.errors.type.message)
                    }
                    return errors
                } else if (err.request){
                    console.log(err.request)
                } else{
                    console.log("something else");
                }
            })
        console.log("test2")
        return errors
    }

    return (
        <div>
            <PageHeader main="Pet Shelter" sub="Know a new pet needing a home?" link="/" linkTitle="Home"></PageHeader>
            <PetForm buttonText="Add Pet" formAction={submitAction}></PetForm>
        </div>

    )
}

export default NewPet