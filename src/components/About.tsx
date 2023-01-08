import React from 'react'
import nbaYoungBoy from './images/NBAYoungBoy.png'
import './About.css'
import Btn from './Btn'

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
                        <p>My name is Alex Glick, and I am from Manhasset, NY. I was born in Houston, TX, which I will always hold near and dear, but moved to NY at age 2 with my parents and sister.</p>
                        <p>There are a few important things about me that I thought relevant to share:</p>
                        <ul>
                            <li>My whole family is Canadian.</li>
                            <li>I am very ginger.</li>
                            <li>I just had a Led Zeppelin pinky ring made, and it rocks.</li>
                        </ul>
                        <p>As an elementary school-aged child, my mind was quite oriented towards math; however, as I grew older, I became increasingly interested by history and government. In middle and high school, I became involved in politics and worked as an intern on a congressional campaign that flipped NY-11 blue in 2018 in addition to other political work.</p>
                        <p>So as I moved toward college, I thought that Public Policy would be my calling, but I had an itch to get back to the computational...</p>
                    </div>
                    <Btn content={"What happened next?!"} to={"#change"} color={"b"}/>
                </div>
            </div>
        </div>
    )
}

export default About