import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();  //this is going to set the location of the path 

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <a href='/' className='brand'>
                    Eagle Industrial 
                </a>
            </div>

        {/* Nav Menu */}
        <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
            <ul className='nav-links'>
                <li className='nav-item'>
                    <a href='/About' className={location.pathname === '/About' ? 'active' : '' }>About</a>
                </li>
                <li className='nav-item'>
                    <a href='/Services' className={location.pathname === '/Services' ? 'active' : '' }>Services</a>
                </li>
                <li className='nav-item'>
                    <a href='/Safety' className={location.pathname === '/Safety' ? 'active' : '' }>Safety</a>
                </li>
                <li className='nav-item'>
                    <a href='/Contact' className={location.pathname === '/Contact' ? 'active' : '' }>Contact</a>
                </li>
            </ul>
        </div>

        {/* Hamburger Icon */}
            <div id="hamburger" className={menuOpen ? 'open' : ''} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
