import React, { useState } from 'react';

const HookForm = (props) => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(email.length < 1){
            setEmailError("Email must be provided!");
        } else if (email.length < 5){
            setEmailError("Email must be at least 5 characters!")
        }
    }

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        if(firstName.length < 1){
            setFirstNameError("First name must be provided!");
        } else if (firstName.length < 2){
            setFirstNameError("First name must be at least 2 characters!")
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if(lastName.length < 1){
            setLastNameError("Last name must be provided!");
        } else if (lastName.length < 2){
            setLastNameError("Last name must be at least 2 characters!")
        }
    }

    const passwordHandler = (e) => {
        setLastName(e.target.value);
        if(password.length < 1){
            setPasswordError("Password must be provided!");
        } else if (password.length < 2){
            setPasswordError("Password must be at least 2 characters!")
        }
    }

    const passwordConfirmationHandler = (e) => {
        setPasswordConfirmation(e.target.value);
        if(passwordConfirmation.length != password){
            setPasswordConfirmationError("Password Confirmation must match!");
        } else{
            setPasswordConfirmationError("")
        }
    }

    return(
        <div>
            {/* <form onSubmit={e.preventDefault()}>
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
            </ul> */}

            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p>:
                        ''
                    }
                </div>

                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ firstNameHandler } />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{firstNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ lastNameHandler } />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{lastNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label> 
                    <input type="text" onChange={ passwordHandler } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password Confirmation: </label> 
                    <input type="text" onChange={ passwordConfirmationHandler } />
                    {
                        passwordConfirmationError ?
                        <p style={{color:'red'}}>{passwordConfirmationError}</p>:
                        ''
                    }
                </div>
                {/* <div>
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
                </div> */}
            </form>
        </div>
        

    );
}

export default HookForm;