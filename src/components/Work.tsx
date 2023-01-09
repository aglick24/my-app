import React from 'react'
import InfoCard from './InfoCard'
import './Work.css'
import rmi from './images/RMI.png'
import duke from './images/Duke.jpg'
import * as FaIcons from 'react-icons/fa';

const Work = () => {
  return (
    <div className='Work' id='work'>
        <div className='Container'>
            <h2>My Work Experience</h2>
            <span className='Line'></span>
            <div className='Content'>
              <InfoCard image={<FaIcons.FaApple className="Icon Apple"/>}
              alt={'apple'}
              title={'Apple'}
              content={<><p>I joined Apple as a software engineeering intern on their Apple TV for third-party platforms team, working on the front-half of the stack up until integration with the back-end from the platform team.</p><p>I coded in Typescript working on the app. My code was aimed to aid data analytics and design with a focus on user interactions and flow through the app, change UI (similar to SwiftUI), fix bugs, and more. I engaged a variety of stakeholders in discussion about data relating to analytics and design, including working alongside half of our team based in Copenhagen. At the end of the summer, I presented on my summer's work to the rest of the Services organization within Apple at the end of the summer.</p></>}
              link={'https://www.apple.com/apple-tv-app/devices/'}/>
              <InfoCard image={duke}
              alt={'uta'}
              title={'Duke University Department of Computer Science'}
              content={<><p>Starting my junior fall at Duke, I have worked as an Undergraduate Teaching Assistant for CS101. In this class, we teach basic CS principles and Python to a wide range of students on campus.</p><p>From avid freshmen ready to absord CS to superseniors that just wanted to try CS before leaving the university, everyone passes through our class. As part of my responsibilities, I teach an hour and fifteen minute lab with about 25 students, host office hours, and grade their lab assignments as well as portions of the whole class's exams. I find my level of student interaction through teaching a 25-person lab and hosting office hours incredibly rewarding.</p></>}
              link={'https://www.cs.duke.edu'}/>
              <InfoCard image={rmi}
              alt={'rmi'}
              title={'RMI and the Nicholas School for the Environment'}
              content={<><p>I received Duke's Stanback Fellowship through the Nicholas School for the Environment in Summer 2021, and I worked on the US Program of the environmental non-profit RMI. I modeled state-level climate policy through their Energy Policy Simulator, worked on calibrating the simulator, and analyzed the resultant data.  We  used the results to advise state government's on their climate action plans, including working through a series of workshops with the New Mexico state government.</p><p>I also conducted a personal project to explore a new method of estimating mortality due to fossil fuel-related air pollution with a database from the Center for Air, Climate and Energy Solutions.</p><p>All data work and coding was done in Python using Pandas.</p></>}
              link={'https://rmi.org/us-program/'}/>
              <InfoCard image={<FaIcons.FaGlobeAfrica className="Icon"/>}
              alt={'shindell'}
              title={'Shindell Research Group'}
              content={<><p>While working for the Shindell Research Group, I conducted data analysis using Pandas in concert with staff from Duke and NASA's Goddard Institute.</p><p>I was a co-author of the "Global Methane Assessment: Benefits and Costs of Mitigating Methane Emissions" (UN Environment Programme) and "The Temporal and Spatial Distribution of Health, Labor, and Agriculture Benefits of Climate Change Mitigation in the US” (Proceedings of the National Academy of Sciences), and was part of the Research Team on Prof Shindell's written and oral testimony to the House Committee on Oversight and Reform about “The Devastating Health Impacts of Climate Change” on August 5th, 2020.</p></>}
              link={'https://sites.duke.edu/shindellgroup/'}/>
            </div>
        </div>
    </div>
  )
}

export default Work