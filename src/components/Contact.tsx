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
                <li>Resume</li>
                <li>Github</li>
            </ul>
        </div>
        <div className='Form'>
            
        </div>
    </div>
  )
}

export default Contact