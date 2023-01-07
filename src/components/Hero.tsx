import React, { useState } from 'react'
import Btn from './Btn'
import './Hero.css'
import Typewriter from 'typewriter-effect'

const Hero = () => {

  const [present, appear] = useState(false);
  const handleAppear = () => appear(true);

  const [placeHolder, holdIt] = useState(false);
  const handleHold = () => holdIt(true);

  let button = <></>
  if (placeHolder)
    button = <Btn content={""} to={""} color={"n"}/>
  if (present)
    button = <Btn content={"Find out about me"} to={"#About"} color={"w"}/>

  return (
    <div className="Hero">
        <div className="ContentContainer">
          <div className="Content">
            <Typewriter
            onInit={(typewriter) => {
              typewriter
              .changeDelay(20)
              .typeString("Welcome to Alex Glick's website...")
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(500)
              .callFunction(handleHold)
              .typeString("The purpose of the site is to take you on a tour through my experiences and interests,")
              .pauseFor(1000)
              .typeString(" while also demonstrating some of my technical skills along the way.")
              .pauseFor(1000)
              .typeString(" This is my first React website.")
              .pauseFor(1000)
              .changeDelay(30)
              .typeString(" Let's get started, shall we?")
              .pauseFor(1000)
              .callFunction(handleAppear)
              .start()
              }}
            />
            {button}
          </div>
        </div>
    </div>
  )
}

export default Hero