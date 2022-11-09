// importing dependencies 
import React from 'react';
import Button from './Button'; 
import '../styles/Footer.css';
import { Link } from "react-router-dom"

const Footer = () => {
  return(
    <div className='footer-bar'>

      <Link to='/home'>
        <img className='footer-logo-font' src={require('../img/Ekkremis-logo-dark.png')} alt="Ekkremis" height='auto' width='250px'/>
      </Link>

      <div>
        <a href='https://github.com/oslabs-beta/Ekkremis/blob/main/lICENSE'>© 2022 Ekkremis | MIT License</a>
      </div>

      <a href='https://github.com/oslabs-beta/Ekkremis'>
        <img className='footer-github-logo' src={require('../img/github.png')} alt="Ekkremis" height='auto' width='50px'/>
      </a>

      <a href=''>
        <img className='footer-medium-logo' src={require('../img/medium.png')} alt="Ekkremis" height='auto' width='50px'/>
      </a>
      
    </div>
  )
}
export default Footer;