import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import '../App.css';
// import MessageBox from './MessageBox'
// import MessageThread from './MessageThread'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import UpdatePetForm from '../components/UpdatePetForm';
import PageHeader from '../components/PageHeader';

const UpdatePet = (props) => {

    const [existingInfo, setExistingInfo] = useState({})
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/" + props.id)
        .then(res=>{
            console.log(res)
            setExistingInfo(res.data.pet);
        }).catch(err=>{
            console.log(err);
        })
    }, [])

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
        axios.put("http://localhost:8000/api/pets/update/" + props.id,
            {
                name: petName,
                type: petType,
                description: petDescription,
                skills: petSkills
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
            <PageHeader main="Pet Shelter" sub={"Edit " + existingInfo.name} link="/" linkTitle="Home"></PageHeader>
            <UpdatePetForm buttonText="Update Pet" formAction={submitAction} existingInfo={existingInfo} skills={existingInfo.skills}></UpdatePetForm>
        </div>

    )
}

export default UpdatePet