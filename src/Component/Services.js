import React from 'react'
import Icon_1 from '../Images/icon_1.png'
import Icon_2 from '../Images/icon_2.png'
import Icon_3 from '../Images/icon_3.png'
import Icon_4 from '../Images/icon_4.png'
import Brush_6 from '../Images/brush_6.png'
import Brush_7 from '../Images/brush_7.png'

function Services() {
  return (
    <div className='section-component'>
      <div className='container'>
        <div className='main_title'>
          <span>Services</span>
          <h3>What I Do for Clients</h3>
          <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
        </div>
        <div className='service_list'>
          <ul>
            <li className='fadeInLeft'>
              <div className='list_inner'>
                <span className='icon'>
                  <img src={Icon_1} />
                </span>
                <div className='title'>
                  <h3>Creative Design</h3>
                  <span className='price'>Starts from<span>$99</span></span>
                </div>
                <div className='text'>
                  <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                </div>
              </div>
            </li>
            <li className='fadeInRight'>
              <div className='list_inner'>
                <span className='icon'>
                  <img src={Icon_2} />
                </span>
                <div className='title'>
                  <h3>Creative Design</h3>
                  <span className='price'>Starts from<span>$99</span></span>
                </div>
                <div className='text'>
                  <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                </div>
              </div>
            </li>
            <li className='fadeInLeft'>
              <div className='list_inner'>
                <span className='icon'>
                  <img src={Icon_3} />
                </span>
                <div className='title'>
                  <h3>Creative Design</h3>
                  <span className='price'>Starts from<span>$99</span></span>
                </div>
                <div className='text'>
                  <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                </div>
              </div>
            </li>
            <li className='fadeInRight'>
              <div className='list_inner'>
                <span className='icon'>
                  <img src={Icon_4} />
                </span>
                <div className='title'>
                  <h3>Creative Design</h3>
                  <span className='price'>Starts from<span>$99</span></span>
                </div>
                <div className='text'>
                  <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='brush_6 fadeInLeft'>
        <img src={Brush_6} />
      </div>
      <div className='brush_7 zoomIn'>
        <img src={Brush_7} />
      </div>
    </div>
  )
}

export default Services