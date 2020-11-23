import React from 'react'
import './NavBar.css'

const NavBar = () => {  

    return (
        <nav className="navbar">
            <div className="brand">
                <h3>Seán Lewis</h3>
            </div>

            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>


            <ul className="nav-links">
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#skills">Skills</a></li>
                <li><a className="nav-link" href="#projects">Projects</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
        </nav>
    ) 
}

export default NavBar