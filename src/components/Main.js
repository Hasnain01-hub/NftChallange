import { useState, useEffect } from "react";
import React from 'react'
import instagram from '../Images/owner/instagram.png'
import twitter from '../Images/owner/twitter.png'
import more from '../Images/owner/more.png';
import './Punkscard.css';
const Main = ({select,punklistdata}) => {
    const [data, setdata] = useState(punklistdata[0]);
    useEffect(() => {
        setdata(punklistdata[select]);
    }, [punklistdata,select]);
    return (
        <div className="Main">
            <div className="maincontent">
                <div className="punkhighligt">
                    <div className="punkcontainer">
                    <img className="selectedPunk" src={data.image_original_url} alt=''/>


                    </div>
                </div>
                <div className="punkdetails" style={{color:'#fff'}}>
<div className="title"> {data.name}
<span className="itemnumber"> .#{data.token_id}</span>
</div>

                </div>
                <div className="owner">
<div className="ownerimage">
    <img src={data.owner.profile_img_url} alt=''/>
</div>
<div className="ownerdetails">
    <div className="ownernamehadle">
        
            <div style={{color:'#fff'}} className="address">{data.owner.address}</div>

        <div className="ownerhandle">@hasnainsayyed</div>
        
    </div>
    <div className="ownerlink">
            <img src={instagram} alt=''/>
        </div>
        <div className="ownerlink">
            <img src={twitter} alt=''/>
        </div>
        <div className="ownerlink">
            <img src={more} alt=''/>
        </div>

</div>
                </div>
            </div>
            
        </div>
    )
}

export default Main
