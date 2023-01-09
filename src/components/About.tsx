import React from 'react'
import nbaYoungBoy from './images/NBAYoungBoy.png'
import './About.css'

const About = () => {
    return (
        <div className='About' id='about'>
            <div className='Container'>
                <div className='Col-1'>
                    <img src={nbaYoungBoy} alt='nbaYoungBoy' className='AboutPic'/>
                </div>
                <div className='Col-2'>
                    <h2>About</h2>
                    <span className='Line'></span>
                    <div className='Content'>
                        <h4>Alex Glick</h4>
                        <p>I am from Manhasset, NY, and I am now a senior at Duke, obtaining a <i>B.S.</i> in Computer Science and Public Policy.</p>
                        <p>In middle and high school, I became involved in politics and worked as an intern on a congressional campaign that flipped NY-11 blue in 2018 in addition to other political work. By the end of high school and beginning of college, my interest grew, from CS being a prospective minor to it being my first major.</p>
                        <p>So as I moved toward college, I thought that Public Policy would be my calling, but I had an itch to get back to the computational...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About