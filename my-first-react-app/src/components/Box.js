import react, { useState } from 'react';

const ColorBox = (props) => {
    console.log(props.colors);
    const colors = [...props.colors];

    return (
        <ul style ={{listStyleType:"none", width: "100%"}}>
            {
                colors.map( (item,i) =>
                    // const boxStyle = {
                    //     height: "40px", 
                    //     width: "40px", 
                    //     backgroundColor: item,
                    // };

                    <li style={{flexWrap:"wrap", display:"inline-block", margin: "10px"}}>
                        <div key={i} style={{
                            height: "40px", 
                            width: "40px", 
                            backgroundColor: item
                            }}></div>
                    </li>
                )
            }
        </ul>
    )
}

export default ColorBox;