// import io from 'socket.io-client';
// import '../App.css';
// import MessageBox from './MessageBox'
// import MessageThread from './MessageThread'
import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';

const UpdatePetForm = (props) => {
    const [petName, setPetName] = useState("")
    const [petType, setPetType] = useState("")
    const [petDescription, setPetDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [petSkills, setPetSkills] = useState([])
    
    const [petNameError, setPetNameError] = useState("")
    const [petTypeError, setPetTypeError] = useState("")
    const [petDescriptionError, setPetDescriptionError] = useState("")

    
    useEffect(() => {
        if (props.existingInfo){
            // console.log(props.existingInfo.skills)
            setPetName(props.existingInfo.name)
            setPetDescription(props.existingInfo.description)
            setPetType(props.existingInfo.type)
            if (props.skills){
                console.log(props.skills)
                setPetSkills(props.skills)
                setSkill1(petSkills[0])
                setSkill2(petSkills[1])
                setSkill3(petSkills[2])
            }
            
        }
        
    }, [])

    const submitHandler = (e) =>{
        e.preventDefault()
        setPetNameError("");
        setPetDescriptionError("");
        setPetTypeError("");
        setPetSkills([skill1,skill2,skill3]);
        // console.log(petSkills);
        let errors = props.formAction(petName, petType, petDescription, [skill1,skill2,skill3], setPetNameError, setPetDescriptionError, setPetTypeError)
        
        if (errors > 0){
            console.log(errors)
            for (let i = 0; i < errors.length; i++){
                if (errors[i].cat == "name"){
                    setPetNameError(errors[i].message)
                }
                else if (errors[i].cat == "description"){
                    setPetDescriptionError(errors[i].message)
                } else if (errors[i].cat == "type"){
                    setPetTypeError(errors[i].message)
                }
            }
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                Pet Name
                <input onChange={e=>setPetName(e.target.value)} value={petName} placeholder={props.existingInfo.name}></input>
                {
                    petNameError ?
                    <p style={{color:'red'}}>{petNameError}</p>:
                    ""
                }
            </label>
            <label>
                Pet Type
                <input onChange={e=>setPetType(e.target.value)} value={petType} placeholder={props.existingInfo.type}></input>
                {
                    petTypeError ?
                    <p style={{color:'red'}}>{petTypeError}</p>:
                    ""
                }
            </label>
            <label>
                Pet Description
                <input onChange={e=>setPetDescription(e.target.value)} value={petDescription} placeholder={props.existingInfo.description}></input>
                {
                    petDescriptionError ?
                    <p style={{color:'red'}}>{petDescriptionError}</p>:
                    ""
                }
            </label>
            <label>
                Skill 1
                <input onChange={e=>setSkill1(e.target.value)} value={skill1} placeholder={skill1}></input>
            </label>
            <label>
                Skill 2
                <input onChange={e=>setSkill2(e.target.value)} value={skill2} placeholder={skill2}></input>
            </label>
            <label>
                Skill 3
                <input onChange={e=>setSkill3(e.target.value)} value={skill3} placeholder={skill3}></input>
            </label>
            <button>{props.buttonText}</button>
        </form>
        
    )
}

export default UpdatePetForm