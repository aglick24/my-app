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
                        <p>I am from Manhasset, NY, and I am now a senior at Duke, working towards a B.S. dual-major in Computer Science and Public Policy.</p>
                        <p>In high school, I became involved in politics and worked as an intern on a congressional campaign that flipped NY-11 blue in 2018. By my sophomore year of college, my interest grew, and I made CS my first major.</p>
                        <p>With a winding career path. I have been able to succeed in non-traditional routes due to my ability to easily pick up new skills, acquire leadership roles while in school, interdisciplinary avenue of study, and willingness to collaborate with coworkers. Through this work, I am proficient in Java, Python, Typescript, ReactJS, SQL, and more with experience in machine learning, while also being able to clearly communicate complex ideas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About