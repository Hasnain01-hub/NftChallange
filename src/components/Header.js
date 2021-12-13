import React from 'react'
import './Header.css';
import logo from './../Images/header/cryptopunk-logo.png';
import searchicon from './../Images/header/search.png';
import themelogo from './../Images/header/theme-switch.png';
const Header = () => {
    return (
        <div className="header">
             <div className="logo">
                 <img src={logo} className="punklogo" alt="this is logo"/>
             </div>
             <div className="searchbar">
                 <div className="searchicon">
                     <img src={searchicon} alt="searchicon"/>
                 </div>
                 <input type="text" className="searchinput" placeholder="search"/>
                 </div>
                 <div className="headeritem">
                     <p>Drops</p>
                     <p>Market Place</p>
                     <p>Create</p>
                 </div>
                 <div className="headeractions">
                     <div className="themelogo">
                         <img src={themelogo} className="themeswitch" alt='logo'/>
                     </div>
                 </div>
                 <div className="gradientb">get in</div>
        </div>
    )
}

export default Header
