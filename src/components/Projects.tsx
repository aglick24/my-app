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
                content={<><p>The React website that you are currently on is my first attempt at writing an entire WebApp on my own.</p><p>I put this site together over a couple days in January 2023, and I hope you are enjoying it!</p><p>A lot of credit goes to the internet and a wide array of tutorials that helped me learn ReactJS on the fly.</p><p>Built with Typescript and the ReactJS framework.</p></>}
                link={'https://github.com/aglick24/my-app'}/>
                <ListCard 
                title={'Mini Amazon'}
                content={<><p>The website functions as a mini-Amazon type store in which buyers and sellers can join the site and perform the basic functions associated with an online marketplace. Built with Jinja2 (similar to Python), a touch of JS, HTML, CSS, and SQL with Flask to tie together the stack.</p></>}
                link={'https://github.com/aglick24/mini-amazon-pin-pals'}/>
                <ListCard 
                title={'Pro Bowl Snubs'}
                content={<><p>Goal: create models to predict the likelihood of an NFL player (in four offensive skill positions) being in the Pro Bowl based upon a variety of their statistics</p><p>Created a K-nearest neighbors model and a logistic regression with high training and test accuracy rates</p><p>Used recursive feature elimination to determine the statistics that best predict Pro Bowl selection.</p><p>Examined which players were the biggest snubs (false positives) and flakes (false negatives) at each position between 2010 and 2020.</p><p>Built ina Jupyter notebook with Python, Pandas, and machine learnning packages such as <code>sklearn</code></p></>}
                link={'https://github.com/aglick24/cs216-pro-bowl'}/>
                <ListCard 
                title={'Shindell Research Group'}
                content={<><p>Repositories associated with my work in the Shindell Group</p><p>Population projections and shared socioeconomic pathway model data analysis</p><p>Data is not included</p></>}
                link={'https://github.com/aglick24'}/>
            </div>
        </div>
    </div>
  )
}

export default Projects