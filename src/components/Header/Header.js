import React from "react";
 
import { List, Search, Server, PencilSquare, GearFill, BellFill } from 'react-bootstrap-icons';
import "./Header.css"
const Header = () => {
    return (
        <>
            <div id="main-header">
                <div id="left-header">
                    <ul id="left-header-list">
                        <li className="header-items"><img style={{ width: "150px" }} src={"images/logo-inverse2.png"} alt="utharaIcon" /></li>
                        <li className="left-header-items"><List style={{color:"#007bff"}} /></li>
                        <li className="left-header-items"><Search style={{color:"#007bff"}}/></li>
                        <li className="left-header-items"><Server /></li>
                        <li className="left-header-items">Statistics</li>
                        <li className="left-header-items"><PencilSquare /></li>
                        <li className="left-header-items">Projects</li>
                        <li className="left-header-items"><GearFill /></li>
                        <li className="left-header-items">Settings</li>

                    </ul>
                </div>
                <div id="right-header">
                    <ul id="right-header-list">
                        <li className="right-header-items"><BellFill className="bell" /></li>
                        <li className="right-header-items"><img style={{ borderRadius: "50%", width: '60px' }} src={"images/profile-1.png"} alt="profile" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;
