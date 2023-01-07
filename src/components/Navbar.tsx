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
                        <a href='#About' onClick={closeMenu}>About</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#Change' onClick={closeMenu}>A change</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#Work' onClick={closeMenu}>My work</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar