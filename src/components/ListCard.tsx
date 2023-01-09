import React, { ReactElement } from 'react'
import './ListCard.css'

const ListCard = ({title, content, link=undefined}:
    {title: string, content: ReactElement<any, any>, link?: string}) => {
  
  const Card = (
    <>
      <span className='Line'></span>
      <p className='Title'><span>{title}</span></p>
      {content}
    </>)
  return (link ? <div className='ListCard Linked'><a href={link} target="_blank" rel="noreferrer">{Card}</a></div> : <div className='ListCard'>{Card}</div>)
}

export default ListCard