import react, { useState } from 'react'

const PokemonList = (props) => {
    // console.log(props.pokemon[0].name);
    return(       
        <div>
            <ul>
                {   
                    props.pokemon.map( (item,i) => (
                            <li key={i}>
                                {item.name}
                            </li>                            
                            // console.log(item)
                        ))
                }
            </ul>
        </div>
        
        
    )
}

export default PokemonList;