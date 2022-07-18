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

  const [showFirstItem, setShowFirstItem] = useState(true);
  const [showSecondItem, setShowSecondItem] = useState(true);
  const [showThirdItem, setShowThirdItem] = useState(true);
  const [showFourthItem, setShowFourthItem] = useState(true);
  const [showFifthItem, setShowFifthItem] = useState(true);
  const [showSixthItem, setShowSixthItem] = useState(true);
  
  //get window size
  const {x, y} = useWindowSize();

  // Over 1200px
  const [firstItem, setFirstItem] = useState({
    left: 0,
    top: 0
  })
  const [secondItem, setSecondItem] = useState({
    left: 35+'%', 
    top: 0
  })
  const [thirdItem, setThirdItem] = useState({
    left: 70+'%', 
    top: 0
  })
  const [fourthItem, setFourthItem] = useState({
    left: 0, 
    top: 60+'%'
  })
  const [fifthItem, setFifthItem] = useState({
    left: 35+'%', 
    top: 38+'%'
  })
  const [sixthItem, setSixthItem] = useState({
    left: 70+'%', 
    top: 60+'%'
  })

  // 600 - 1200px
  const [firstItemMd, setFirstItemMd] = useState({
    left: 0,
    top: 0
  })
  const [secondItemMd, setSecondItemMd] = useState({
    left: 35+'%', 
    top: 0
  })
  const [thirdItemMd, setThirdItemMd] = useState({
    left: 70+'%', 
    top: 0
  })
  const [fourthItemMd, setFourthItemMd] = useState({
    left: 0, 
    top: 60+'%'
  })
  const [fifthItemMd, setFifthItemMd] = useState({
    left: 35+'%', 
    top: 38+'%'
  })
  const [sixthItemMd, setSixthItemMd] = useState({
    left: 70+'%', 
    top: 60+'%'
  })

  // under 768px
  const [firstItemSm, setFirstItemSm] = useState({
    left: 0,
    top: 0
  })
  const [secondItemSm, setSecondItemSm] = useState({
    left: 35+'%', 
    top: 0
  })
  const [thirdItemSm, setThirdItemSm] = useState({
    left: 70+'%', 
    top: 0
  })
  const [fourthItemSm, setFourthItemSm] = useState({
    left: 0, 
    top: 60+'%'
  })
  const [fifthItemSm, setFifthItemSm] = useState({
    left: 35+'%', 
    top: 38+'%'
  })
  const [sixthItemSm, setSixthItemSm] = useState({
    left: 70+'%', 
    top: 60+'%'
  })



  const showAllItems = () => {
    setShowFirstItem(true);
    setShowSecondItem(true);
    setShowThirdItem(true);
    setShowFourthItem(true);
    setShowFifthItem(true);
    setShowSixthItem(true);
  }
  const showFirstCategory = () => {
    setShowFirstItem(true);
    setShowSecondItem(false);
    setShowThirdItem(false);
    setShowFourthItem(false);
    setShowFifthItem(false);
    setShowSixthItem(false);
  }
  const showSecondCategory = () => {
    setShowFirstItem(false);
    setShowSecondItem(true);
    setShowThirdItem(false);
    setShowFourthItem(false);
    setShowFifthItem(false);
    setShowSixthItem(false);
  }
  const showThirdCategory = () => {
    setShowFirstItem(false);
    setShowSecondItem(false);
    setShowThirdItem(true);
    setShowFourthItem(false);
    setShowFifthItem(false);
    setShowSixthItem(false);
  }
  const showFourthCategory = () => {
    setShowFirstItem(false);
    setShowSecondItem(false);
    setShowThirdItem(false);
    setShowFourthItem(true);
    setShowFifthItem(true);
    setShowSixthItem(false);
  }
  const showFifthCategory = () => {
    setShowFirstItem(false);
    setShowSecondItem(false);
    setShowThirdItem(false);
    setShowFourthItem(false);
    setShowFifthItem(false);
    setShowSixthItem(true);
  }





  return (
    <div className='section-component'>
      
      {/* X and Y are ready to use as requirements for resize the screen */}
      <div><p>{x} and {y}</p></div>
      
      <div className='portfolio'>
        <Container>
          <div className='title'>
            <span>Portfolio</span>
            <h3>My Amazing Work</h3>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
          </div>
          <div className='portfolio_filter'>
            <ul>
              <li><a className='current' onClick={showAllItems}>All</a></li>
              <li><a className='current' onClick={showFirstCategory}>Youtube</a></li>
              <li><a className='current' onClick={showSecondCategory}>Vimeo</a></li>
              <li><a className='current' onClick={showThirdCategory}>Soundcloud</a></li>
              <li><a className='current' onClick={showFourthCategory}>Popup</a></li>
              <li><a className='current' onClick={showFifthCategory}>Detail</a></li>
            </ul>
          </div>
          <div className='portfolio_titles'>
            Magic Art
            <span className='work_cat'>Soundcloud</span>
          </div>
          <div className='portfolio_list fadeInUp'>
            <ul className='gallery_zoom grid' style={{position: 'relative', height: 957.126}}>
              <li className={"youtube grid_item" + (showFirstItem ? " show":" hide")}  style={{
                                                                                        left: (x>1200 ? firstItem.left : (x>768 ? firstItemMd.left: firstItemSm.left)), 
                                                                                        top: (x>1200 ? firstItem.top : (x>768 ? firstItemMd.top: firstItemSm.top))
                                                                                      }}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_1})`}}></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className={"vimeo grid_item" + (showSecondItem ? " show":" hide")} style={{
                                                                                      left: (x>1200 ? secondItem.left : (x>768 ? secondItemMd.left: secondItemSm.left)), 
                                                                                      top: (x>1200 ? secondItem.top : (x>768 ? secondItemMd.top: secondItemSm.top))
                                                                                    }}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_2})`}}></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className={'soundcloud grid_item' + (showThirdItem ? " show":" hide")} style={{
                                                                                          left: (x>1200 ? thirdItem.left : (x>768 ? thirdItemMd.left: thirdItemSm.left)), 
                                                                                          top: (x>1200 ? thirdItem.top : (x>768 ? thirdItemMd.top: thirdItemSm.top))
                                                                                        }}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_3})`}}></div>
                    </a>
                  </div>
                </div>
              </li>

              <li className={'popup grid_item popUp' + (showFifthItem ? " show":" hide") } style={{
                                                                                            left: (x>1200 ? fourthItem.left : (x>768 ? fourthItemMd.left: fourthItemSm.left)), 
                                                                                            top: (x>1200 ? fourthItem.top : (x>768 ? fourthItemMd.top: fourthItemSm.top))
                                                                                          }}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty_2} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_4})`}}></div>
                    </a>
                  </div>
                </div>
              </li>

              <li className={'popup grid_item' + (showFourthItem ? " show":" hide")} style={{
                                                                                      left: (x>1200 ? fifthItem.left : (x>768 ? fifthItemMd.left: fifthItemSm.left)), 
                                                                                      top: (x>1200 ? fifthItem.top : (x>768 ? fifthItemMd.top: fifthItemSm.top))
                                                                                    }}>
                <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
                      <img src={Empty} />
                      <div className='main' style={{backgroundImage: `url(${Portfolio_5})`}}></div>
                    </a>
                  </div>
                </div>
              </li>


              <li className={'detail grid_item popUp' + (showSixthItem ? " show":" hide")} style={{
                                                                                            left: (x>1200 ? sixthItem.left : (x>768 ? sixthItemMd.left: sixthItemSm.left)), 
                                                                                            top: (x>1200 ? sixthItem.top : (x>768 ? sixthItemMd.top: sixthItemSm.top))
                                                                                          }}>
                    <div className='inner'>
                  <div className='entry portfolio_animation_wrap'>
                    <a className='popup-youtube' href="#">
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
      {/* <WindowDimension /> */}
    </div>
  )
}

export default Portfolio_test