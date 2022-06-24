import React, { Component } from 'react'
import Testimonial from '../SVGComponents/SVGTestimonial'
import Brush_8 from '../Images/brush_8.png'
import Testimonial_1 from '../Images/testimonial_1.jpg'

export class Testimonials extends Component {
  render() {
    return (
      <div className='section-component'>
        <div className='testimonials'>
          <div className='main_title'>
            <span>Testimonials</span>
            <h3>What My Clients Say</h3>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
          </div>
          <div className='list_wrapper'>
            <div className='total'>
              <div className='in'>
                <ul className='carousel'>
                  <div className='stage-outer'>
                    <div className='stage'>
                      <div className='item'>
                        <li>
                          <div className='icon'>
                            <Testimonial />
                          </div>
                          <div className='text'>
                            <p>Really the Code Quality, Customer Support, and design are awesome and its good support they are giving. They give an instant solution to our needs. Really awesome. I will strongly recommend to my friends. Simply amazing team and amazing theme! Thank you from United States of America!</p>
                          </div>
                          <div className='short'>
                            <div className='image'>
                              <div className='main' style={{backgroundImage: `url(${Testimonial_1})` }}></div>
                            </div>
                            <div className='detail'>
                              <h3>Keita Smith</h3>
                              <span>ABC Group</span>
                            </div>
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className='dots'>
                    <div className='dot'>
                      <span></span>
                    </div>
                    <div className='dot'>
                      <span></span>
                    </div>
                    <div className='dot'>
                      <span></span>
                    </div>
                  </div>
                </ul>
              </div>
              <div className='left_details'>
                <div className='testi_image one fadeIn'></div>
                <div className='testi_image two fadeIn'></div>
                <div className='testi_image three fadeIn'></div>
                <div className='testi_image four fadeIn'></div>
                <span className='circle green animPulse'></span>
                <span className='circle yellow animPulse'></span>
                <span className='circle border animPulse'></span>
              </div>
              <div className='right_details'>
                <div className='testi_image one fadeIn'></div>
                <div className='testi_image two fadeIn'></div>
                <div className='testi_image three fadeIn'></div>
                <span className='circle yellow animPulse'></span>
                <span className='circle purple animPulse'></span>
                <span className='circle border animPulse'></span>
              </div>
            </div>
          </div>
          <div className='brush_8 fadeInRight'>
            <img src={Brush_8} />
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials