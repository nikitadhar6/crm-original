import React from "react";
import "./AsideBar.css"
import {BoxArrowRight,HouseFill} from "react-bootstrap-icons"
const AsideBar=()=>{
    return(
        <>
        <div id="aside-bar">
            <p><HouseFill/>Daskboard</p>
    <p>Pages</p>
    <ul id="aside-bar-list">
<li className="aside-bar-items">Manage Enquiries</li>
<li className="aside-bar-items">Manage Clients</li>
<li className="aside-bar-items">Manage Quotation</li>
<li className="aside-bar-items">Manage Invoice</li>
<li className="aside-bar-items">Manage Reminder</li>
<li className="aside-bar-items">Manage complaints</li>
<li className="aside-bar-items">Manage Enquiry Report</li>
<li className="aside-bar-items">Manage Call Support</li>
<li className="aside-bar-items">Manage Project Camp</li>

    </ul>
    <p> <span><BoxArrowRight/></span>Logout</p>

        </div>
        </>
    )

}
export default AsideBar;