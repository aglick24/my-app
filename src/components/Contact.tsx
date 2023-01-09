import React from 'react'
import './Contact.css'
import { FaCopy } from 'react-icons/fa'

const Contact = () => {
  const phone = '(516)589-0170'
  const email = 'aglick17@icloud.com'
  return (
    <div className='Contact' id='contact'>
        <div className='Content'>
            <h2>
                Contact + Info
            </h2>
            <ul>
                <li>{phone}<button onClick={() => {navigator.clipboard.writeText(phone);}}><FaCopy/></button></li>
                <li>{email}<button onClick={() => {navigator.clipboard.writeText(email);}}><FaCopy/></button></li>
                <li><a href='https://drive.google.com/file/d/1NZUCyl0bxcFLoHKXu1P8gl9sxHb1osNF/view?usp=sharing' target="_blank" rel="noreferrer">Resume</a></li>
                <li><a href='https://github.com/aglick24' target="_blank" rel="noreferrer">Github</a></li>
            </ul>
        </div>
        <div className='Form'>
            
        </div>
    </div>
  )
}

export default Contact