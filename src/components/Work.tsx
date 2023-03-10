import React from 'react'
import InfoCard from './InfoCard'
import './Work.css'
import rmi from './images/RMI.png'
import duke from './images/Duke.jpg'
import spanning from './images/Spanning.png'
import * as FaIcons from 'react-icons/fa';

const Work = () => {
  return (
    <div className='Work' id='work'>
      <h2>My Work Experience</h2>
      <span className='Line'></span>
      <div className='Content'>
        <InfoCard image={spanning}
        alt={'spanning'}
        title={'Spanning Labs'}
        content={
        <ul>
          <li>March 2023 - present</li>
          <li>Platform to deploy LLMs to revolutionize developer experience and sales engineering teams</li>
          <li>Full-stack software engineer</li>
          <li>Implementing user flows to store data sources for ML pipeline</li>
          <li>Working with Typescript, ReactJS, Next.js, and Firebase</li>
        </ul>}
        link={'https://www.spanninglabs.com/'}/>
        <InfoCard image={<FaIcons.FaApple className="Icon Apple"/>}
        alt={'apple'}
        title={'Apple'}
        content={
        <ul>
          <li>Summer 2022</li>
          <li>Software engineering intern on Apple TV for third-party platforms</li>
          <li>Worked in Typescript on front half of app stack until back-end integration</li>
          <li>Code focused on data analytics and design of user interactions and flow through the app</li>
        </ul>}
        link={'https://www.apple.com/apple-tv-app/devices/'}/>
        <InfoCard image={duke}
        alt={'uta'}
        title={'Duke University Department of Computer Science'}
        content={
          <ul>
            <li>Fall 2021 - present</li>
            <li>Undergraduate teacher's assistant for Duke's CS101</li>
            <li>Teach Python and basic CS principles to a lab of 25 students</li>
            <li>Hold office hours to help students, grade labs and exams</li>
          </ul>}
        link={'https://www.cs.duke.edu'}/>
        <InfoCard image={rmi}
        alt={'rmi'}
        title={'RMI and the Nicholas School of the Environment'}
        content={
          <ul>
            <li>Summer 2021</li>
            <li>US Program Intern at RMI (Rocky Mountain Institute)</li>
            <li>Calibrated in-house Energy Policy Simulator (EPS)</li>
            <li>Nobel data analysis project estimating mortality due to fossil fuel-related air pollution </li>
          </ul>}
        link={'https://rmi.org/us-program/'}/>
        <InfoCard image={<FaIcons.FaGlobeAfrica className="Icon"/>}
        alt={'shindell'}
        title={'Shindell Research Group'}
        content={
          <ul>
            <li>May 2020 - present</li>
            <li>Population, emissions, and damages projections of different shared socioeconomic pathway models</li>
            <li>Co-author of:
              <ul>
                <li>
                  <a href='#publications'>"The Temporal and Spatial Distribution of Health, Labor, and Agriculture Benefits of Climate Change Mitigation in the US"</a> (UN Environment Programme)
                </li>
                <li>
                  <a href='#publications'>"Global Methane Assessment Benefits and Costs of Mitigating Methane Emissions"</a> (Proceedings of the National Academy of Sciences)
                </li>
              </ul>
            </li>
          </ul>}
        link={'https://sites.duke.edu/shindellgroup/'}/>
      </div>
    </div>
  )
}

export default Work