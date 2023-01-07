import React from 'react'
import nbaYoungBoy from './images/NBAYoungBoy.png'
import './About.css'
import Btn from './Btn'

const About = () => {
    return (
        <div className='About' id='About'>
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
                        <p>In middle and high school, I was supremely interested in politics, and I worked as an intern on a congressional campaign that flipped NY-11 blue in 2018 in addition to other political involvements.</p>
                        <p>So as I moved toward college, I thought that Public Policy would be my calling, but my itch to code grew...</p>
                    </div>
                    <Btn content={"What happened next?!"} to={"#Change"} color={"b"}/>
                </div>
            </div>
        </div>
    )
}

export default About