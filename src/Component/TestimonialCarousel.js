import React from 'react'
import DoubleQuotes from '../SVGComponents/SVGDoubleQuotes'
import Testimonial_1 from '../Images/testimonial_1.jpg'
import Carousel from 'react-bootstrap/Carousel';

function TestimonialCarousel() {

  return (
    <div className='in'>
      <ul className='carousel'>
        <div className='stage-outer'>
          <Carousel className='stage' pause='hover'>
            <Carousel.Item className='item'>
              <li>
                <div className='icon'>
                  <DoubleQuotes />
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
            </Carousel.Item>
            <Carousel.Item className='item'>
              <li>
                <div className='icon'>
                  <DoubleQuotes />
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
            </Carousel.Item>
            <Carousel.Item className='item'>
              <li>
                <div className='icon'>
                  <DoubleQuotes />
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
            </Carousel.Item>
          </Carousel>
        </div>
      </ul>
    </div>
    

  );
}


export default TestimonialCarousel
