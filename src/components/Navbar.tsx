import React, { useState } from 'react'
import { FaHome, FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='Header'>
            <nav className='Navbar'>
                <a href='/' className='Home'>
                    <FaHome/>
                </a>
                <div className='Hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30}/>)
                        : (<FaBars size={30}/>)}

                </div>
                <ul className={click ? "Nav-menu active" : "Nav-menu"}>
                    <li className='Nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#work' onClick={closeMenu}>Work</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#publications' onClick={closeMenu}>Publications</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact + Info</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar