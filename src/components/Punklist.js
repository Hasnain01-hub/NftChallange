import React from 'react'
import Punkcards from './Punkcards'
import './Punkscard.css';
const Punklist = ({punklistdata,selectedpunk}) => {
    return (
        <div className="punklist">
            {punklistdata.map(punk => (
<div onClick={()=> selectedpunk(punk.token_id)}>
<Punkcards
key={punk.token_id}
id={punk.token_id}
name={punk.name}
image={punk.image_original_url}
traits={punk.traits}
/></div>
            ))}
            
        </div>
    )
}

export default Punklist
