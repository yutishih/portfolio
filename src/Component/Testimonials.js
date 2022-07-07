import React, { Component } from 'react'
import TestimonialCarousel from '../Component/TestimonialCarousel'
import Brush_8 from '../Images/brush_8.png'

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
              <TestimonialCarousel />
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