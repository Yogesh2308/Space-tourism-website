import React, { useState } from 'react'
import icon from '../starter-code/assets/shared/logo.svg'
import closeIcon from '../starter-code/assets/shared/icon-close.svg'
import openIcon from '../starter-code/assets/shared/icon-hamburger.svg'
import {NavLink} from "react-router-dom"
import "../css/Navbar.css"
export const Navbar = () => {
    const [isClosed, setIsClosed]= useState(false);
    const toggleMenu = ()=>{
        setIsClosed(!isClosed)
    }
  return (
    <header className="header">
        <div className="container">
            <a href="/" className='logo'>
                <img src={icon} alt="" className='logo' />
            </a>
            <hr />
            <button className='mob-bar' onClick={toggleMenu} style={isClosed ? {display: "none"} : {display: ""}}>
                <img src={openIcon} alt=""/>
            </button>
            <nav className={isClosed ? "navigation mobile-menu" : "navigation"}>
                <button className='close-menu' onClick={toggleMenu}>
                    <img src={closeIcon} alt="" />
                </button>
                <ul className="nav-menu">
                    <li>
                        <NavLink to="/">
                           <strong>00</strong>&nbsp; HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination">
                            <strong>0 1 </strong>&nbsp; DESTINATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew">
                            <strong>0 2 </strong>&nbsp; CREW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/technology">
                            <strong>0 3 </strong>&nbsp; TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
