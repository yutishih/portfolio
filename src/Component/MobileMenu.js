import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RiCloseFill } from "react-icons/ri";
import Logo from '../Images/logo.png';


function MobileMenu (){

  /*dropdown function*/
  const [ toggleOn, setToggleOn ] = useState(false);

  const toggleHandler = () => {
    if ( toggleOn == false ){
      setToggleOn(true);
    } else {
      setToggleOn(false);
    }
  }

  return (
    <div className='section-component'>
      <div class='mobile_menu'>
        <div className='mobile_menu_inner'>
          <div className='mobile_in'>
            <div className='logo'>
              <a href='#'>
                <img src={Logo} />
              </a>
            </div>
            <div className='trigger'>
              <div className='burger'>
                <div className='burger_box'>
                  <div className='burger_inner'>
                    <a onClick={toggleHandler}>
                      { toggleOn ? <RiCloseFill /> : <FaBars /> }
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"dropdown" + ( toggleOn ? " " : " hide" )}>
          <div className='dropdown_inner'>
            <ul className='anchor_nav fadeInLeft'>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#services">Service</a>
              </li>
              <li>
                <a href="#news">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className='download_cv'>
                <a href="#">Download CV</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MobileMenu