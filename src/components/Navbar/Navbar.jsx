import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();  //this is going to set the location of the path 

    const isNavbar2 = location.pathname === '/Services' || location.pathname === '/Contact';

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${isNavbar2 ? 'navbar2' : ''}`} 
            style={{
                backgroundColor: isNavbar2 ? 'white' : 'transparent',
            }}
        >
            <div className={`navbar-left ${isNavbar2 ? 'navbar2' : ''}`}>
                <a href='/' className={`brand ${menuOpen ? 'open' : ''} ${isNavbar2 ? 'navbar2-brand' : ''}`}>
                    Eagle Industrial 
                </a>
            </div>
        
            {/* Nav Menu */}
            <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
                <ul className={`nav-links ${isNavbar2 ? 'navbar2-links' : ''}`}>
                    <li className='nav-item'>
                        <a href='/About' className={`${location.pathname === '/About' ? 'active' : ''} ${isNavbar2 ? 'navbar2-link' : ''}`}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Services' className={`${location.pathname === '/Services' ? 'active' : ''} ${isNavbar2 ? 'navbar2-link' : ''}`}>Services</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Safety' className={`${location.pathname === '/Safety' ? 'active' : ''} ${isNavbar2 ? 'navbar2-link' : ''}`}>Safety</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Contact' className={`${location.pathname === '/Contact' ? 'active' : ''} ${isNavbar2 ? 'navbar2-link' : ''}`}>Contact</a>
                    </li>
                </ul>
            </div>
        
            {/* Hamburger Icon */}
            <div id="hamburger" className={menuOpen ? 'open' : ''} onClick={handleToggle}>
                <span className={isNavbar2 ? 'navbar2-hamburger' : ''}></span>
                <span className={isNavbar2 ? 'navbar2-hamburger' : ''}></span>
                <span className={isNavbar2 ? 'navbar2-hamburger' : ''}></span>
            </div>
        </nav>
    );
};

export default Navbar;
