import React from 'react'
import './Contact.css'
import { FaCopy } from 'react-icons/fa'

const Contact = () => {
  const phone = '(516) 589-0170'
  const email = 'aglick17@icloud.com'
  return (
    <div className='Contact' id='contact'>
        <div className='Content'>
            <h2>
                Contact + Info
            </h2>
            <ul>
                <li><button onClick={() => {navigator.clipboard.writeText(phone);}}>{phone} <FaCopy/></button></li>
                <li><button onClick={() => {navigator.clipboard.writeText(email);}}>{email} <FaCopy/></button></li>
                <li><a href='https://drive.google.com/file/d/1ggLXDRTBFk9kIFs0cMyaFBM3nXIw1wmA/view?usp=share_link' target="_blank" rel="noreferrer">Resume</a></li>
                <li><a href='https://github.com/aglick24' target="_blank" rel="noreferrer">Github</a></li>
            </ul>
        </div>
        <div className='Form'>

        </div>
    </div>
  )
}

export default Contact