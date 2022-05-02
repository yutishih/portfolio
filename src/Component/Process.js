import React, { Component } from 'react'
import Brush_1 from '../Images/brush_1.png'
import Brush_2 from '../Images/brush_2.png' 
import Brush_3 from '../Images/brush_3.png' 
import SVGProcess_1 from '../SVGComponents/SVGProcess_1'
import SVGProcess_2 from '../SVGComponents/SVGProcess_2'
import SVGProcess_3 from '../SVGComponents/SVGProcess_3'

export class Process extends Component {
  render() {
    return (
      <div className='section-component'>
        <div className='process'>
          <div className='container'>
            <div className='list'>
              <ul>
                <li className='fadeInUp'>
                  <div className='list_inner'>
                    <div className='icon'>
                      <span>
                        <img src={Brush_1} />
                        <SVGProcess_1 />
                      </span>
                    </div>
                    <div className='title'>
                      <h3>Pixel Perfect</h3>
                    </div>
                    <div className='text'>
                      <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    </div>
                  </div>
                </li>
                <li className='fadeInUp'>
                  <div className='list_inner'>
                    <div className='icon'>
                      <span>
                        <img src={Brush_2} />
                        <SVGProcess_2 />
                      </span>
                    </div>
                    <div className='title'>
                      <h3>High Quality</h3>
                    </div>
                    <div className='text'>
                      <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    </div>
                  </div>
                </li>
                <li className='fadeInUp'>
                  <div className='list_inner'>
                    <div className='icon'>
                      <span>
                        <img src={Brush_3} />
                        <SVGProcess_3 />
                      </span>
                    </div>
                    <div className='title'>
                      <h3>Awesome Idea</h3>
                    </div>
                    <div className='text'>
                      <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Process