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
            <ul className='anchor_nav'>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
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