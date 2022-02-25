import React from "react";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./nav.css"


const Nav = () => {
    return (
        <div>
            <div className="nav">
            <div className="nav-left">
                <p>Moscow <FiChevronDown /></p>
                <p className="p2">Provite client <FiChevronDown /></p> 
            </div>
            <h1>GAF</h1>
            
            <div className="nav-right">
                <h3>Shop  <div className="line"></div></h3>
            <ul>
                <li> <BsSearch /> </li>
                <li> <FiUser /> </li>
                <li> <HiOutlineMenuAlt4 /> </li>
            </ul>
            </div>
            <div className="nav-line"></div>
        </div>
        </div>
    )
} 

export default Nav;