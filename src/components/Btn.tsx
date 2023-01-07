import React, { useState } from 'react'
import './Btn.css'

const Btn = ({ content, to, color }: {content: string, to: string, color: string}) => {    

  return (
    <div className={("Btn-" + color)}>
        <a href={to}><span>{content}</span></a>
    </div>
  )
}

export default Btn;