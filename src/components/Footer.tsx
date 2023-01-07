import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Container'>
                <ul>
                    <li className='Nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#About'>About</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#Change'>A change</a>
                    </li>
                    <li className='Nav-item'>
                        <a href='#Work'>My work</a>
                    </li>
                </ul>
                <div className='Bottom'>
                    <span className='Line'></span>
                    <p>2023 Alex Glick. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer