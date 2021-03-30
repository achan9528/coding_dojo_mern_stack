import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PetForm from '../components/PetForm';
import PageHeader from '../components/PageHeader';

const PetDescription = (props) => {
    console.log(props.petInfo)
    console.log(props.petInfo.skills)
    // const values = Object.values(props.petInfo.skills)
    // console.log(values)
    if (props.petInfo.skills){
        return (
            <ul styles={{ listStyleType: "none" }}>
                <li>Pet Type: {props.petInfo.type}</li>
                <li>Pet Description: {props.petInfo.description}</li>
                <li>Skills:
                    <ul>
                        {
                            props.petInfo.skills.map( (item,key) => {
                                return(
                                <li key={key}>
                                    {item}
                                </li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
        )
    } else{
        return (
            <ul styles={{ listStyleType: "none" }}>
                <li>Pet Type: {props.petInfo.type}</li>
                <li>Pet Description: {props.petInfo.description}</li>
                <li>Skills: </li>
            </ul>
        )
    }


}

export default PetDescription