import React, { ReactElement } from 'react'
import './Card.css'

const Card = ({image, alt, title, content}:
    {image:string|ReactElement<any>, alt:string, title:string, content:ReactElement<any, any>}) => {
  return (
    <div className='Card'>
      <div className='Pic'>
        {(typeof image === 'string' ? <img src={image as string} alt={alt}/> : image)}
      </div>
      <p><span>{title}</span></p>
      {content}
    </div>
  )
}

export default Card