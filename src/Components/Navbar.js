import React from 'react'
// Router setup 
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <ul className="navList">
                <li className="navItem"><Link to="/">Home</Link></li>
                <li className="navItem"><Link to="/feature">Features</Link></li>
                <li className="navItem"><Link to="/download">Download</Link></li>
                <li className="navItem"><Link to="/contact">Contact</Link></li>
                <li className="navItem"><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
