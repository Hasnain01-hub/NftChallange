import React from 'react'
import eth from './../Images/weth.png';
import './Punkscard.css';
const Punkcards = ({id,name,traits,image}) => {
    return (
        <div className="collectioncard">
            <img src={image} alt="image"/>
            <div className="detail">

            
            <div className="name">
                {name}<div className="id"> .#{id}</div>
            </div>
            
            <div className="pricecontainer">
                <img src={eth} className="eathimage" alt=''/>
                <div className="price">{traits[0]?.value}</div>
            </div>
            </div>
        </div>
    )
}

export default Punkcards
