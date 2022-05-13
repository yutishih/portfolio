import React from 'react'
import { Container } from 'react-bootstrap'
import Portfolio_1 from '../Images/portfolio_1.jpg'

function Portfolio() {
  return (
    <div className='section-component'>
      <div className='portfolio'>
        <Container>
          <div className='title'>
            <span>Portfolio</span>
            <h3>My Amazing Work</h3>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
          </div>
          <div className='portfolio_filter'>
            <ul>
              <li><a>All</a></li>
              <li><a>Youtube</a></li>
              <li><a>Vimeo</a></li>
              <li><a>Soundcloud</a></li>
              <li><a>Popup</a></li>
              <li><a>Detail</a></li>
            </ul>
          </div>
          <div className='portfolio_list fadeInUp'>
            <ul className='gallery_zoom grid'>
              <li className='youtube grid-item'>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <div className='main'></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className='vimeo grid-item'>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <div className='main'></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className='soundcloud grid-item'>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <div className='main'></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className='popup grid-item'>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <div className='main'></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className='popup grid-item'>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <div className='main'></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className='detail grid-item'>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <div className='main'></div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Portfolio