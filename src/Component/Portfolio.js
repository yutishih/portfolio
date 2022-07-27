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
import useWindowSize from '../Hooks/useWindowSize'


function Portfolio_test() {

  //switch categories on/off
  const [showFirstItem, setShowFirstItem] = useState(true);
  const [showSecondItem, setShowSecondItem] = useState(true);
  const [showThirdItem, setShowThirdItem] = useState(true);
  const [showFourthItem, setShowFourthItem] = useState(true);
  const [showFifthItem, setShowFifthItem] = useState(true);
  const [showSixthItem, setShowSixthItem] = useState(true);

  const [currentFirst, setCurrentFirst] = useState(false);
  const [currentSecond, setCurrentSecond] = useState(false);

  const showAllItems = () => {
    setShowFirstItem(true);
    setShowSecondItem(true);
    setShowThirdItem(true);
    setShowFourthItem(true);
    setShowFifthItem(true);
    setShowSixthItem(true);

    setCurrentFirst(false);
    setCurrentSecond(false);
  }
  const showFirstCategory = () => {
    setShowFirstItem(true);
    setShowSecondItem(false);
    setShowThirdItem(false);
    setShowFourthItem(false);
    setShowFifthItem(false);
    setShowSixthItem(false);

    setCurrentFirst(true);
    setCurrentSecond(false);
  }

  const showSecondCategory = () => {
    setShowFirstItem(false);
    setShowSecondItem(true);
    setShowThirdItem(false);
    setShowFourthItem(false);
    setShowFifthItem(false);
    setShowSixthItem(false);

    setCurrentFirst(true);
    setCurrentSecond(false);
  }

  const showThirdCategory = () => {
    setShowFirstItem(false);
    setShowSecondItem(false);
    setShowThirdItem(true);
    setShowFourthItem(false);
    setShowFifthItem(false);
    setShowSixthItem(false);

    setCurrentFirst(true);
    setCurrentSecond(false);
  }
  const showFourthCategory = () => {
    setShowFirstItem(false);
    setShowSecondItem(false);
    setShowThirdItem(false);
    setShowFourthItem(true);
    setShowFifthItem(true);
    setShowSixthItem(false);

    setCurrentFirst(true);
    setCurrentSecond(true);
  }
  const showFifthCategory = () => {
    setShowFirstItem(false);
    setShowSecondItem(false);
    setShowThirdItem(false);
    setShowFourthItem(false);
    setShowFifthItem(false);
    setShowSixthItem(true);

    setCurrentFirst(true);
    setCurrentSecond(false);
  }





  return (
    <div className='section-component'>
      <div className='portfolio'>
        <Container>
          <div className='title'>
            <span>Portfolio</span>
            <h3>Previous Projects</h3>
            <p>I would like to share some projects I completed in the past few years.</p>
          </div>
          <div className='portfolio_filter'>
            <ul>
              <li><a className='current' onClick={showAllItems}>All</a></li>
              <li><a className='current' onClick={showFirstCategory}>Category 1</a></li>
              <li><a className='current' onClick={showSecondCategory}>Category 2</a></li>
              <li><a className='current' onClick={showThirdCategory}>Category 3</a></li>
              <li><a className='current' onClick={showFourthCategory}>Category 4</a></li>
              <li><a className='current' onClick={showFifthCategory}>Category 5</a></li>
            </ul>
          </div>
          <div className='portfolio_titles'>
            Magic Art
            <span className='work_cat'>Soundcloud</span>
          </div>
          <div className='portfolio_list fadeInUp'>
            <ul className='gallery_zoom grid'>
              <li className={"category-1 grid_item" + (showFirstItem ? " show":" hide") + (currentFirst ? " current-first":" ")}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-category-1' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_1})`}}></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className={"category-2 grid_item" + (showSecondItem ? " show":" hide") + (currentFirst ? " current-first":" ")}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-category-2' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_2})`}}></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className={'category-3 grid_item' + (showThirdItem ? " show":" hide") + (currentFirst ? " current-first":" ")}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-category-3' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_3})`}}></div>
                    </a>
                  </div>
                </div>
              </li>

              <li className={'category-4-1 grid_item' + (showFourthItem ? " show":" hide") + (currentFirst ? " current-first":" ")}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-category-4' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_4})`}}></div>
                    </a>
                  </div>
                </div>
              </li>

              <li className={'category-4-2 grid_item' + (showFifthItem ? " show":" hide") + (currentFirst ? " current-second":" ")}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-category-4' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_5})`}}></div>
                    </a>
                  </div>
                </div>
              </li>


              <li className={'category-5 grid_item' + (showSixthItem ? " show":" hide") + (currentFirst ? " current-first":" ")}>
                    <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-category-5' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_6})`}}></div>
                    </a>
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
  );
}

export default Portfolio_test