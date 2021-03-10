import React, { useState } from 'react';

const HookForm = (props) => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    return(
        <div>
            <form>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setPasswordConfirmation(e.target.value) } />
                </div>
                <div>
                    <input type="submit" value="Create User" />
                </div>
            </form>
            <ul>
                <li>Your First Name: { firstName } </li>
                <li>Your Last Name: { lastName } </li>
                <li>Your Username: { username } </li>
                <li>Your Email: { email } </li>
                <li>Your Password: { password } </li>
                <li>Your Password Confirmation: { passwordConfirmation } </li>
            </ul>
        </div>
        

    );
}

export default HookForm;