// importing dependencies 
import React from 'react';
import Button from './Button'; 
import '../styles/topBar.css';
import { Link } from "react-router-dom"

const TopBar = () => {
  return(
    <div className='top-bar'>
      <img className='header-logo' src={require('../img/Ekkremis-logo-dark.png')} alt="Ekkremis" height='100px' width='180px'/>
      <div className='login-button-container'>
        <Link to='/home'>
          <Button 
            className="FPbutton"
            children="About"
          />
        </Link>
        <Link to='/docs'>
          <Button 
            className="FPbutton"
            children="Docs"
          />
        </Link>
        
        <a href='https://github.com/oslabs-beta/Ekkremis'> 
          <Button 
            className="FPbutton"
            children="Github"
          />
        </a>
          
        <a href='https://www.google.com/'>
          <Button 
            className="FPbutton"
            children="Blog"
          />
        </a>
      </div>
    </div>
  )
}
export default TopBar;