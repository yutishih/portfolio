import React, { useState } from 'react'
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

  // show or hide, change the order of items
  const [showYoutube, setShowYoutube] =  useState(true);
  const [showVimeo, setShowVimeo] =  useState(true);
  const [showSoundcloud, setShowSoundcloud] =  useState(true);
  const [showPopup, setShowPopup] =  useState(true);
  const [showDetail, setShowDetail] =  useState(true);

  const [valueFirstItem, setValueFirstItem] =  useState(true);
  const [valueSecondItem, setValueSecondItem] =  useState(true);
  const [valueThirdItem, setValueThirdItem] =  useState(true);
  const [valueFourthItem, setValueFourthItem] =  useState(true);
  const [valueFifthItem, setValueFifthItem] =  useState(true);
  const [valueSixthItem, setValueSixthItem] =  useState(true);

  const showHandlerAll= () => {
    setShowYoutube(true);
    setShowVimeo(true);
    setShowSoundcloud(true);
    setShowPopup(true);
    setShowDetail(true);

    setValueFirstItem(true);
    setValueSecondItem(true);
    setValueThirdItem(true);
    setValueFourthItem(true);
    setValueFifthItem(true);
    setValueSixthItem(true);
  }
  const showHandlerYoutube= () => {
    setShowYoutube(true);
    setShowVimeo(false);
    setShowSoundcloud(false);
    setShowPopup(false);
    setShowDetail(false);

    setValueFirstItem(false);
    setValueSecondItem(true);
    setValueThirdItem(true);
    setValueFourthItem(true);
    setValueFifthItem(true);
    setValueSixthItem(true);
  }
  const showHandlerVimeo= () => {
    setShowYoutube(false);
    setShowVimeo(true);
    setShowSoundcloud(false);
    setShowPopup(false);
    setShowDetail(false);

    setValueFirstItem(true);
    setValueSecondItem(false);
    setValueThirdItem(true);
    setValueFourthItem(true);
    setValueFifthItem(true);
    setValueSixthItem(true);
  }
  const showHandlerSoundcloud= () => {
    setShowYoutube(false);
    setShowVimeo(false);
    setShowSoundcloud(true);
    setShowPopup(false);
    setShowDetail(false);

    setValueFirstItem(true);
    setValueSecondItem(true);
    setValueThirdItem(false);
    setValueFourthItem(true);
    setValueFifthItem(true);
    setValueSixthItem(true);
  }
  const showHandlerPopup= () => {
    setShowYoutube(false);
    setShowVimeo(false);
    setShowSoundcloud(false);
    setShowPopup(true);
    setShowDetail(false);

    setValueFirstItem(true);
    setValueSecondItem(true);
    setValueThirdItem(true);
    setValueFourthItem(false);
    setValueFifthItem(false);
    setValueSixthItem(true);
  }
  const showHandlerDetail= () => {
    setShowYoutube(false);
    setShowVimeo(false);
    setShowSoundcloud(false);
    setShowPopup(false);
    setShowDetail(true);

    setValueFirstItem(true);
    setValueSecondItem(true);
    setValueThirdItem(true);
    setValueFourthItem(true);
    setValueFifthItem(true);
    setValueSixthItem(false);
  }

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
              <li><a className='current' onClick={showHandlerAll}>All</a></li>
              <li><a className='current' onClick={showHandlerYoutube}>Youtube</a></li>
              <li><a className='current' onClick={showHandlerVimeo}>Vimeo</a></li>
              <li><a className='current' onClick={showHandlerSoundcloud}>Soundcloud</a></li>
              <li><a className='current' onClick={showHandlerPopup}>Popup</a></li>
              <li><a className='current' onClick={showHandlerDetail}>Detail</a></li>
            </ul>
          </div>
          <div className='portfolio_titles'>
            Magic Art
            <span className='work_cat'>Soundcloud</span>
          </div>
          <div className='portfolio_list fadeInUp'>
            <ul className='gallery_zoom grid' style={{position: 'relative', height: 957.126}}>
              <li className={"youtube grid_item" + (showYoutube ? " show":" hide")}  style={{left: (valueFirstItem ? 0:0), top: (valueFirstItem ? 0:0)}}>
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
              <li className={"vimeo grid_item" + (showVimeo ? " show":" hide")} style={{left: (valueSecondItem ? 448.328 : 0), top: (valueSecondItem ? 0:0)}}>
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
              <li className={'soundcloud grid_item' + (showSoundcloud ? " show":" hide")} style={{left: (valueThirdItem ? 896.656 : 0), top: (valueThirdItem ? 0:0)}}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_3})`}}></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className={'popup grid_item' + (showPopup ? " show":" hide")} style={{left: (valueFourthItem ? 448.328 : 0), top: (valueFourthItem ? 367.688:0)}}>
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
              <li className={'popup grid_item popUp' + (showPopup ? " show":" hide") } style={{left: (valueFifthItem ? 0 : 448.328), top: (valueFifthItem ? 589.438:0)}}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_4})`}}></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className={'detail grid_item popUp' + (showDetail ? " show":" hide")} style={{left: (valueSixthItem ? 896.656 : 0), top: (valueSixthItem ? 589.438:0)}}>
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