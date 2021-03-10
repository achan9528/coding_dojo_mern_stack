// import React, { Component } from 'react';

// class PersonCard extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             age: props.age,
//         }
//     }

//     birthday = () =>{
//         this.setState({age: this.state.age + 1});
//     }

//     render(){
//         const { firstName, lastName, age, hairColor } = this.props;
//         return (
//             <div>
//                 <h2>{lastName}, {firstName}</h2>
//                 <ul>
//                     <li>Age: {this.state.age}</li>
//                     <li>Hair Color: {hairColor}</li>
//                 </ul>
//                 <button onClick={ this.birthday }>Birthday button for {firstName} {lastName}</button>
//             </div>
//         )
//     }

// }

// export default PersonCard;

import React from 'react';
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
// 

export default PersonCard;
