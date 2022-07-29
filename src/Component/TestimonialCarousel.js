import React from 'react'
import ThumbUp from '../SVGComponents/SVGThumbUp'
import Testimonial_1 from '../Images/testimonial_1.jpg'
import Testimonial_5 from '../Images/testimonial_5.jpg'
import Testimonial_6 from '../Images/testimonial_6.jpg'
import Carousel from 'react-bootstrap/Carousel';



function TestimonialCarousel() {

  return (
    <div className='in'>
      <ul className='carousel'>
        <div className='stage-outer'>
          <Carousel className='stage' controls={false} interval={null}>
            <Carousel.Item className='item'>
              <li>
                <div className='icon'>
                  <ThumbUp />
                </div>
                <div className='text'>
                  <p>This guy has been a BIG WIN for us. The page looks great and modern, we are so excited to have this page be the first thing new in our start-up business.</p>
                </div>
                <div className='short'>
                  <div className='image'>
                    <div className='main' style={{backgroundImage: `url(${Testimonial_1})` }}></div>
                  </div>
                  <div className='detail'>
                    <h3>Kiara Ann A</h3>
                    <span>Avery Group</span>
                  </div>
                </div>
              </li>
            </Carousel.Item>
            <Carousel.Item className='item'>
              <li>
                <div className='icon'>
                  <ThumbUp />
                </div>
                <div className='text'>
                  <p>Yuti is a perfect designer that we have ever collaborted with, he was passionate and responsive about working with us to build our marketing campaign, highly recommend this service!</p>
                </div>
                <div className='short'>
                  <div className='image'>
                    <div className='main' style={{backgroundImage: `url(${Testimonial_6})` }}></div>
                  </div>
                  <div className='detail'>
                    <h3>Stan S</h3>
                    <span>JW Construction Co.</span>
                  </div>
                </div>
              </li>
            </Carousel.Item>
            <Carousel.Item className='item'>
              <li>
                <div className='icon'>
                  <ThumbUp />
                </div>
                <div className='text'>
                  <p>It took a while to get on the same page for us, this developer was easy to communicate and willing to take advices to make the project better. The work is exactly what we are asking for. Great job!</p>
                </div>
                <div className='short'>
                  <div className='image'>
                    <div className='main' style={{backgroundImage: `url(${Testimonial_5})` }}></div>
                  </div>
                  <div className='detail'>
                    <h3>Joe, L</h3>
                    <span>Synapse, LLC</span>
                  </div>
                </div>
              </li>
            </Carousel.Item>
          </Carousel>
        </div>
      </ul>
    </div>
    

  );
}


export default TestimonialCarousel
