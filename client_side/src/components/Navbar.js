import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/spectalyzer-logo-25_no-bg.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: '#ffffff' }} />
                    ) : (
                        <FaBars size={30} style={{ color: '#ffffff' }} />
                    )}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>
                            About Us
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#how-works' onClick={closeMenu}>
                            How It Works
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>
                            Testimonial
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact-us' onClick={closeMenu}>
                            Contact Us
                        </a>
                    </li>
                    <li
                        className='nav-item register-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <a href='/register' onClick={closeMenu}>
                            Register{' '}
                            <FontAwesomeIcon icon={faChevronDown} size='2xs' />
                        </a>
                        {dropdown && (
                            <ul className='dropdown-menu'>
                                <li className='nav-item'>
                                    <Link to="/student">Student</Link>
                                </li>
                                <li>
                                <Link to="/therapist">Therapist</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className='nav-item'>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className='nav-item'>
                        <a href='#' onClick={closeMenu}>
                            <FontAwesomeIcon className='search-icon-nav' icon={faMagnifyingGlass} />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
