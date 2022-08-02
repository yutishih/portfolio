import React, { useContext, Component } from 'react'
import { MouseContext } from '../Context/MouseContext';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Brush_12 from '../Images/brush_12.png'
import Brush_13 from '../Images/brush_13.png'
import GoogleMap from './GoogleMap';
import ContactForm from './ContactForm';

function Contact (){

  // const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className='section-component'>
      <div className='contact' id='contact'>
        <div className='container'>
          <div className='main_title'>
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>Please fill out the form on this section to contact with me. Or message me between 9:00 a.m. and 5:00 p.m. ET, Monday through Friday</p>
          </div>
          <div className='contact_inner'>
            <div className='left fadeInLeft'>
              <ul>
                <li>
                  <div class="list_inner">
                    <div class="icon orangeBackground location">
                      <FaMapMarkerAlt />
                    </div>
                    <div class="short">
                      <h3>Address</h3>
                      <span>Naples, Florida, U.S</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <div class="icon greenBackground email">
                      <FaEnvelope />
                    </div>
                    <div class="short">
                      <h3>Email</h3>
                      <span><a href="#">yutishih@gmail.com</a></span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <div class="icon purpleBackground phone">
                      <FaPhoneAlt />
                    </div>
                    <div class="short">
                      <h3>Phone</h3>
                      <span>+1 (469) 369-5372</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='right fadeInRight'>
              <ContactForm />
            </div>
            <div className='brush_13 fadeInRight'>
              <img src={Brush_13} />
            </div>
          </div>
          <div className='map fadeInUp'>
            <div className='mapouter'>
              <div className='gmap_canvas'>
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
        <div className='brush_12'>
          <img src={Brush_12} />
        </div>
      </div>
    </div>
  )
}

export default Contact