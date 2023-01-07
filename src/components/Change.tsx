import React from 'react'
import feder from './images/Feder.jpeg'
import glassbones from './images/Glassbones.jpg'
import './Change.css'

const Change = () => {
    return (
        <div className='Change' id='Change'>
            <h2><span>A change</span></h2>
            <div className='Container'>
                <div className='Col-1'>
                    <img src={feder} alt='feder'/>
                </div>
                <div className='Col-2'>
                    <div className='Col-2-Content'>
                        <p>I went to Duke and began taking Public Policy and Computer Science courses because I think government action and technology are the most effective ways to make positive impact at-scale.</p>
                        <p>I liked my computational work a lot and made some cool friends :)</p>
                        <p>So I bumped my CS minor to be my first major. I am now receiving a B.S. in Computer Science and Public Policy.</p>
                    </div>
                    <img src={glassbones} alt='glassbones'/>
                </div>
            </div>
        </div>
    )
}

export default Change