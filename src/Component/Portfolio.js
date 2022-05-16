import React from 'react'
import { Container } from 'react-bootstrap'
import Empty from '../Images/empty.jpg'
import Empty_2 from '../Images/empty_2.jpg'
import Portfolio_1 from '../Images/portfolio_1.jpg'
import Portfolio_2 from '../Images/portfolio_2.jpg'
import Portfolio_3 from '../Images/portfolio_3.jpg'
import Portfolio_4 from '../Images/portfolio_4.jpg'
import Portfolio_5 from '../Images/portfolio_5.jpg'
import Portfolio_6 from '../Images/portfolio_6.jpg'
import Brush_4 from '../Images/brush_4.png'
import Brush_5 from '../Images/brush_5.png'

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
              <li><a href="#" className='current'>All</a></li>
              <li><a href="#" className='current'>Youtube</a></li>
              <li><a href="#" className='current'>Vimeo</a></li>
              <li><a href="#" className='current'>Soundcloud</a></li>
              <li><a href="#" className='current'>Popup</a></li>
              <li><a href="#" className='current'>Detail</a></li>
            </ul>
          </div>
          <div className='portfolio_titles'>
            Magic Art
            <span className='work_cat'>Soundcloud</span>
          </div>
          <div className='portfolio_list fadeInUp'>
            <ul className='gallery_zoom grid' style={{position: 'relative', height: 957.126}}>
              <li className='youtube grid-item' style={{position:'absolute', left: 0, top: 0}}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_1})`}}></div>
                    </a>
                  </div>
                  <div className='mobile_title'>
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className='vimeo grid-item' style={{position:'absolute', left: 448.328, top: 0}}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_2})`}}></div>
                    </a>
                  </div>
                  <div className='mobile_title'>
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className='soundcloud grid-item' style={{position:'absolute', left: 896.656, top: 0}}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_3})`}}></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className='popup grid-item' style={{position:'absolute', left: 448.328, top: 367.688}}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_5})`}}></div>
                    </a>
                  </div>
                  <div className='mobile_title'>
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className='popup grid-item' style={{position:'absolute', left: 0, top: 589.438}}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_4})`}}></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className='detail grid-item' style={{position:'absolute', left: 896.656, top: 589.438}}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_6})`}}></div>
                    </a>
                  </div>
                  <div className='mobile_title'>
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
        <div className='brush_4 zoomIn'>
          <img src={Brush_4} />
        </div>
        <div className='brush_5 fadeInRight'>
          <img src={Brush_5} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio