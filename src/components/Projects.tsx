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
                title={'Shindell Research Group'}
                content={<><p>Here are my repositories associated with my work in the Shindell Group. Data is not included, and methods are inefficient because I was teaching myself Pandas prior to instruction in it through my coursework. Got the job done well enough though!</p></>}
                link={''}/>
                <ListCard 
                title={'Mini Amazon'}
                content={<><p>This was my final project for Duke's CS316 class (Introduction to Database Systems). My project group was 2 instead of the usual 5. I coded this project with my friend Adrian in a Hackathon-like manner over the course of a few sleepless days.</p><p>The website functions as a mini-Amazon type store in which buyers and sellers can join the site and perform the basic functions associated with an online marketplace. Technologies used are Jinja2 (similar to Python), a touch of JS, HTML, CSS, and SQL with Flask to tie together the stack.</p></>}
                link={'https://github.com/aglick24/mini-amazon-pin-pals'}/>
                <ListCard 
                title={'Pro Bowl Snubs'}
                content={<><p>This was my final project for Duke's CS216 class (Everything Data) in which I worked with a group. Our group's goal was to create models to predict the likelihood of an NFL player (in four offensive skill positions) being in the Pro Bowl based upon a variety of their statistics.</p><p>We created a K-nearest neighbors model and a logistic regression with high training and test accuracy rates. We then used a recursive feature elimination to determine the statistics that best predict Pro Bowl selection. Finally, we looked at which players were the biggest snubs (false positives) and flakes (false negatives) at each position between 2010 and 2020.</p><p>Technologies used are Python, Pandas, and machine learnning packages such as <code>sklearn</code>.</p></>}
                link={'https://github.com/aglick24/cs216-pro-bowl'}/>
                <ListCard 
                title={'This website!'}
                content={<><p>The React website that you are currently on is my first attempt at writing an entire WebApp alone.</p><p>I put this site together over a couple days in January 2023, and I hope you are enjoying it!</p><p>A lot of credit goes to the internet and a wide array of tutorials that helped me learn ReactJS on the fly. Technologies used are ReactJS and imported modules.</p></>}
                link={'https://github.com/aglick24/my-app'}/>
            </div>
        </div>
    </div>
  )
}

export default Projects