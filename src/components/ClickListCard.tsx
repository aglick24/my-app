import React, { ReactElement } from 'react'
import './ClickListCard.css'
import ListCard from './ListCard'

const ClickListCard = ({title, content, link}:
    {title: string, content: ReactElement<any, any>, link: string}) => {
  return (
    <div className='ClickListCard'>
        <a href={link} target="_blank">
            <ListCard title={title} content={content}/>
        </a>
    </div>
  )
}

export default ClickListCard