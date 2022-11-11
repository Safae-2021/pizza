import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='links' >
        <a href="https://www.instagram.com/?hl=fr" target='_blank'>
        <FontAwesomeIcon icon={faInstagram} className='icons' />
        </a>
        <a href="https://twitter.com/?lang=fr" target='_blank'>
        <FontAwesomeIcon icon={faTwitter} className='icons' />
        </a>
        <a href="https://www.facebook.com/" target='_blank'>
        <FontAwesomeIcon icon={faFacebook} className='icons' />
        </a>
        <a href="https://www.linkedin.com/" target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} className='icons' />
        </a>
        </div>
       
        <div className='copyright' >
            <p>&copy; Copyright Pizza store</p>
        </div>
    </div>
  )
}



export default Footer
