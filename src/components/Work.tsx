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

      <div className='FullScreen'>
        <InfoCard image={spanning}
          alt={'spanning'}
          title={'Spanning Labs'}
          content={
            <ul>
              <li>Feb 2023 - present</li>
              <li>Employee No. 8 and engineer No. 5 on team to create and maintain technical documentation using LLMs</li>
              <li>Designed and led the full-stack implementation of data and ML/LLM pipelines, contributing to powerful retrieval-augmented generation of technical documentation for a large-scale web application</li>
              <li>Managed the development and integration of UX/UI elements, REST APIs, and user metrics systems to optimize web functionality and data accessibility</li>
              <li>Engaged with and coordinated cross-functional team members through design, product, and engineering implementation for our core user flows</li>
              <li>Designed and implemented reusable, modular front-end and back-end systems architectures for scalability</li>
              <li>Researched and fine-tuned LLaMa 2 and experimented with Low Rank Adaptation and Less Is More for Alignment for specific refinement use cases to achieve higher quality results more quickly</li>
              <li>Identified business opportunities to obtain design partnerships with US Pharmacopeia and Workday</li>
              <li>Worked with various technologies such as Typescript, ReactJS, Next.js, Python, PostgreSQL, Tailwind, CSS, PyTorch, REST APIs, Fast API, LangChain, Hugging Face, LLaMa 2, OpenAI, Prisma, Supabase, GCP, Tiptap (editor), Mixpanel (metrics)</li>
            </ul>}
          link={'https://www.spanninglabs.com/'} />
      </div>
      <div className='Content'>
        <InfoCard image={<FaIcons.FaApple className="Icon Apple" />}
          alt={'apple'}
          title={'Apple'}
          content={
            <ul>
              <li>Summer 2022</li>
              <li>Software engineering intern on Apple TV for third-party platforms</li>
              <li>Worked in Typescript on front half of app stack until back-end integration</li>
              <li>Code focused on data analytics and design of user interactions and flow through the app</li>
            </ul>}
          link={'https://tv.apple.com'} />
        <InfoCard image={duke}
          alt={'uta'}
          title={'Duke University Department of Computer Science'}
          content={
            <ul>
              <li>Fall 2021 - May 2023</li>
              <li>Undergraduate teacher's assistant for Duke's CS101</li>
              <li>Teach Python and basic CS principles to a lab of 25 students</li>
              <li>Hold office hours to help students, grade labs and exams</li>
            </ul>}
          link={'https://www.cs.duke.edu'} />
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
          link={'https://rmi.org/us-program/'} />
        <InfoCard image={<FaIcons.FaGlobeAfrica className="Icon" />}
          alt={'shindell'}
          title={'Shindell Research Group'}
          content={
            <ul>
              <li>May 2020 - May 2023</li>
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
          link={'https://sites.duke.edu/shindellgroup/'} />
      </div>
    </div>
  )
}

export default Work