import React from 'react'
import ListCard from './ListCard'
import './Projects.css'

const Projects = () => {
  return (
    <div className='Projects' id='projects'>
        <div className='Container'>
            <h2>My Projects </h2>
            <span className='Line'></span>
            <div className='Content'>
                <ListCard 
                title={'This website!'}
                content={<><p>I put this site together over a couple days in January 2023, and I hope you are enjoying it.</p><p>Helped me learn ReactJS on the fly!</p><p>Built with Typescript and the ReactJS framework.</p></>}
                link={'https://github.com/aglick24/my-app'}/>
                <ListCard 
                title={'Mini Amazon'}
                content={<><p>Website functions as a mini-marketplace store for buyers and sellers</p><p>Built with Jinja2 (similar to Python), a touch of JS, HTML, CSS, and SQL with Flask to tie together the stack.</p></>}
                link={'https://github.com/aglick24/mini-amazon-pin-pals'}/>
                <ListCard 
                title={'Pro Bowl Snubs'}
                content={<><p>Goal: models to predict an NFL player (in four offensive skill positions) being in the Pro Bowl based on their statistics</p><p>Created a K-nearest neighbors model and a logistic regression with high training and test accuracy rates</p><p>Used recursive feature elimination to determine the statistics that best predict Pro Bowl selection</p><p>Built in a Jupyter notebook with Python, Pandas, and machine learning packages such as <code>sklearn</code></p></>}
                link={'https://github.com/aglick24/cs216-pro-bowl'}/>
                <ListCard 
                title={'Shindell Research Group'}
                content={<><p>Repositories associated with my work in the Shindell Group</p><p>Population projections and shared socioeconomic pathway model data analysis</p><p>Data is not included</p></>}
                link={'https://github.com/aglick24'}/>
                <ListCard 
                title={'CACES Mortality Estimates'}
                content={<><p>Repository associated with my work at RMI</p><p>Mortality estimates using data from the Center for Air, Climate, and Energy Solutions and the National Emissions Inventory as a novel method</p><p>Data is included</p></>}
                link={'https://github.com/aglick24/rmi_health_impacts'}/>
            </div>
        </div>
    </div>
  )
}

export default Projects