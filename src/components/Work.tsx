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
              content={
              <ul>
                <li>Software engineeering intern on Apple TV for third-party platforms (Summer 2022)</li>
                <li>Worked in Typescript front-half of the stack up until integration with the back-end from the platform team</li>
                <li>Code focused on aiding data analytics and design with a focus on user interactions and flow through the app, changing UI (similar to SwiftUI), fixing bugs, and more.</li>
                <li>Engaged a variety of stakeholders in discussion about data relating to analytics and design</li>
                <li>Presented on work to the rest of the Services organization at the end of the summer</li>
              </ul>}
              link={'https://www.apple.com/apple-tv-app/devices/'}/>
              <InfoCard image={duke}
              alt={'uta'}
              title={'Duke University Department of Computer Science'}
              content={
                <ul>
                  <li>Undergraduate teacher's assistant for Duke's CS101 (since Fall 2021)</li>
                  <li>Teach Python and basic CS principles to a lab of 25 students</li>
                  <li>Hold office hours to help students individually</li>
                  <li>Grade labs and exams in the class</li>
                </ul>}
              link={'https://www.cs.duke.edu'}/>
              <InfoCard image={rmi}
              alt={'rmi'}
              title={'RMI and the Nicholas School of the Environment'}
              content={
                <ul>
                  <li>US Program Intern at RMI through Nicholas School of the Environment's Stanback Fellowship (Summer 2021)</li>
                  <li>Calibrated their Energy Policy Simulator and used it to model the impacts state-level climate action on emissions</li>
                  <li>Analyzed model data to advise state government's on their climate action plans, specifically through a series of workshops with the New Mexico state government</li>
                  <li>Conducted personal project estimating mortality due to fossil fuel-related air pollution using a database from the Center for Air, Climate, and Energy Solutions</li>
                </ul>}
              link={'https://rmi.org/us-program/'}/>
              <InfoCard image={<FaIcons.FaGlobeAfrica className="Icon"/>}
              alt={'shindell'}
              title={'Shindell Research Group'}
              content={
                <ul>
                  <li>Undergraduate research assistant in group focusing on climate, air quality, and policy research (since May 2020)</li>
                  <li>Population, emissions, and damages projections of different shared socioeconomic pathway models</li>
                  <li>Co-author of <a href='#publications'>"The Temporal and Spatial Distribution of Health, Labor, and Agriculture Benefits of Climate Change Mitigation in the US" (UN Environment Programme)</a> and <a href='#publications'>"Global Methane Assessment Benefits and Costs of Mitigating Methane Emissions" (Proceedings of the National Academy of Sciences)</a></li>
                </ul>}
              link={'https://sites.duke.edu/shindellgroup/'}/>
            </div>
        </div>
    </div>
  )
}

export default Work