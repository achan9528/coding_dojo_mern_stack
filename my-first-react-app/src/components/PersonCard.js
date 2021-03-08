import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <ul>
                    <li>Age: {age}</li>
                    <li>Hair Color: {hairColor}</li>
                </ul>
            </div>
        )
    }
}

export default PersonCard