import React, { Component } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Brush_12 from '../Images/brush_12.png'
import Brush_13 from '../Images/brush_13.png'

export class Contact extends Component {
  render() {
    return (
      <div className='section-component'>
        <div className='contact'>
          <div className='container'>
            <div className='main_title'>
              <span>Contact Me</span>
              <h3>I Want To Hear From You</h3>
              <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
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
                        <span>20, Somewhere in world</span>
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
                        <span><a href="#">hello@dizme.com</a></span>
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
                        <span>+123 456 7890</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='right fadeInRight'>
                <div className='fields'>
                  <form action='/' method='post' className='contact_form' id='contact_form' autoComplete='off'>
                    <div className='returnmessage'></div>
                    <div className='empty_notice'>
                      <span>Please Fill Required Fields</span>
                    </div>
                    <div className='input_list'>
                      <ul>
                        <li>
                          <input id='name' type='text' placeholder="Your Name" />
                        </li>
                        <li>
                          <input id='email' type='text' placeholder="Your Email" />
                        </li>
                        <li>
                          <input id='phone' type='number' placeholder="Your Phone" />
                        </li>
                        <li>
                          <input id='subject' type="text" placeholder="Subject" />
                        </li>
                      </ul>
                    </div>
                    <div className='message_area'>
                      <textarea id='message' placeholder='Write your message here' />
                    </div>
                    <div className='button'>
                      <a id='send_message'>
                        <span>Contact Now</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div className='brush_13 fadeInRight'>
                <img src={Brush_13} />
              </div>
            </div>
            <div className='map fadeInUp'>
              <div className='mapouter'>
                <div className='gmap_canvas'></div>
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
}

export default Contact