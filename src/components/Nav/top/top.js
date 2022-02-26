import React from "react";
import "./top.css"

const Top = () => {
    return(
        <div className="top">
            <div className="top-left">
                <p> <div className="red-line"></div> &nbsp; &nbsp; New </p>
            </div>
            <div className="top-center">
                <ul>
                    <li >Special&nbsp;Projects</li>
                    <li className="news"><p>News</p></li>
                    <li>Promo</li>
                </ul>
            </div>
            <div className="top-right">
                <p className="all">All News</p>
            </div>
        </div>
    )
}

export default Top