import React, { useEffect, useState } from 'react';

const Results = (props) => {
    const data = [];
    for (const [key,value] of Object.entries(props.results)){
        data.push(
            `${key}: ${value}`
        )
    }
    console.log(data);
    return (
        <div>
            <ul style={{listStyleType:"none"}}>
                {
                    data.map( (item,i) => (
                        <li key={i}>{item}</li>
                        // console.log(item);
                    ))
                }
                
            </ul>
        </div>
    )
}

export default Results;