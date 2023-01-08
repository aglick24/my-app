import React, { ReactElement } from 'react'
import './InfoCard.css'

const InfoCard = ({image, alt, title, content, link=undefined}:
  {image:string|ReactElement<any>, alt:string, title:string, content:ReactElement<any, any>, link?: string}) => {

  const Card = 
  <>
    <div className='Pic'>
      {(typeof image === 'string' ? <img src={image as string} alt={alt}/> : image)}
    </div>
    <p><span>{title}</span></p>
    {content}
  </>

  return (link ? <a href={link} target="_blank" className='InfoCard Linked'>{Card}</a> : <div className='InfoCard'>{Card}</div>)
}

export default InfoCard