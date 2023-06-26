import React from "react";

import "./FirstContain.css"

const FirstContain = ({ detailData }) => {
    return (
        <>
            <div id="main-card">
                <div id="welcome-container">
                    <h1>Hi Arya, You are Welcome</h1>
                </div>
                <div id="card-parent">
                    {

                        detailData.map((elem, index) => {
                            return (
                                <>
                                    <div key={index} id="card">
                                        <img src={elem.icon} alt="" />
                                        <div id="firstContain-main-card">
                                            <div id="left-firstContain"> <h5>{elem.title}</h5></div>
                                            <div id="right-firstContain">
                                                <img src={elem.image} style={{ width: "100px" }} alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })

                    }
                </div>


            </div>
        </>
    )
}
export default FirstContain;