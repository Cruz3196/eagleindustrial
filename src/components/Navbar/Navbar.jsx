import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <a href='/About'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='/Services'>Services</a>
                </li>
                <li className='nav-item'>
                    <a href='/Safety'>Safety</a>
                </li>
                <li className='nav-item'>
                    <a href='/Contact'>Contact</a>
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
