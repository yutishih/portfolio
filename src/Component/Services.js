import React from 'react'
import Tilt from 'react-tilt'
import Icon_1 from '../Images/icon_1.png'
import Icon_2 from '../Images/icon_2.png'
import Icon_3 from '../Images/icon_3.png'
import Icon_4 from '../Images/icon_4.png'
import Brush_6 from '../Images/brush_6.png'
import Brush_7 from '../Images/brush_7.png'
import Service_1 from '../SVGComponents/SVGServices_1'
import Service_2 from '../SVGComponents/SVGServices_2'
import Service_3 from '../SVGComponents/SVGServices_3'
import Service_4 from '../SVGComponents/SVGServices_4'

function Services() {

  return (
    <div className='section-component'>
      <div className='services' id='services'>
        <div className='container'>
          <div className='main_title'>
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
          </div>
          <div className='service_list'>
            <ul>
              <li className='service_left fadeInLeft'>
                <Tilt className='list_inner' options={{perspective: 2000, scale: 1}}>
                  <div>
                    <span className='icon'>
                      <Service_1 />
                      <img src={Icon_1} />
                    </span>
                    <div className='title'>
                      <h3>Email Campaign</h3>
                      <span className='price'>Starts from <span>USD $99</span></span>
                    </div>
                    <div className='text'>
                      <p>I will design and code your email newsletter starting with 3 blocks. This gig is available for Mailchimp, Klaviyo, campaign monitor and more.</p>
                    </div>
                  </div>
                </Tilt>
              </li>
              <li className='service_right fadeInRight'>
                <Tilt className='list_inner' options={{perspective: 2000, scale: 1}}>
                  <div>
                    <span className='icon'>
                      <Service_2 />
                      <img src={Icon_2} />
                    </span>
                    <div className='title'>
                      <h3>Landing Page</h3>
                      <span className='price'>Starts from <span>USD $199</span></span>
                    </div>
                    <div className='text'>
                      <p>I will design and code your one-page website by ReactJS, Wix, or WordPress depends on the requirements of your business, also compatiable with SEO and RWD. </p>
                    </div>
                  </div>
                </Tilt>
              </li>
              <li className='service_left fadeInLeft'>
                <Tilt className='list_inner' options={{perspective: 2000, scale: 1}}>
                  <div>
                    <span className='icon'>
                      <Service_3 />
                      <img src={Icon_3} />
                    </span>
                    <div className='title'>
                      <h3>Customized Website</h3>
                      <span className='price'>Starts from <span>USD $499</span></span>
                    </div>
                    <div className='text'>
                      <p>I will design and build your website with RWD and SEO by ReactJS, Wix, or WordPress, starting from 1 to mutiple pages, 10 times of revisions included.</p>
                    </div>
                  </div>
                </Tilt>
              </li>
              <li className='service_right fadeInRight'>
                <Tilt className='list_inner' options={{perspective: 2000, scale: 1}}>
                  <div>
                    <span className='icon'>
                      <Service_4 />
                      <img src={Icon_4} />
                    </span>
                    <div className='title'>
                      <h3>Customized Portal</h3>
                      <span className='price'>Starts from <span>USD $1,499</span></span>
                    </div>
                    <div className='text'>
                      <p>I will build the portal for your business by ReactJs/WordPress, including the payroll, booking, and adminstration functions.</p>
                    </div>
                  </div>
                </Tilt>
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
    </div>
  )
}

export default Services