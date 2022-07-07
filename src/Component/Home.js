import React, { useContext, Component } from 'react'
import { MouseContext } from '../Context/MouseContext';
import Avatar from '../Images/avatar.png';
import SVGArrowDown from '../SVGComponents/SVGArrowDown';
import SVGAWS from '../SVGComponents/SVGAWS';
import SVGPhotoshop from '../SVGComponents/SVGPhotoshop';
import SVGReactjs from '../SVGComponents/SVGReactjs';

function Home (){

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className='section-component'>
      <div className='home'>
        <div className='background'></div>
        <div className='container'>
          <div className='content'>
            <div className='details'>
              <div className='hello'>
                <h3 className='orangeText'>Hello, I,m</h3>
              </div>
              <div className='name'>
                <h3>Yuti Shih</h3>
              </div>
              <div className='job'>
                <p>A <span className='greenText'>Web Designer</span> and <span className='purpleText'>Front-End Developer</span></p>
              </div>
              <div className='text'>
                <p>I'm creative designer and developer, and I'm very passionate and dedicated to my work.</p>
              </div>
              <div className='button'>
                <div className='button-wrapper'
                  onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <a className='anchor' href="#">
                    <span>About Me</span>
                  </a>
                </div>
                <div className='social'>
                </div>
              </div>
            </div>
            <div className='avatar'>
              <div className='image'>
                <img src={Avatar} />
                <span className='skills reactjs anim_moveBottom'>
                  <SVGReactjs />
                </span>
                <span className='skills photoshop anim_moveBottom'>
                  <SVGPhotoshop />
                </span>
                <span className='skills aws anim_moveBottom'>
                  <SVGAWS />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='down-icon'>
          <a className='anchor' href="#" onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                                        onMouseLeave={() => cursorChangeHandler("")}>
            <SVGArrowDown />
          </a>
        </div>
      </div>
    </div>
  )
}


export default Home