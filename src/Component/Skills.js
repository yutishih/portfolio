import React, { useEffect, useRef, useState } from 'react'
import skills_right from '../Images/skills.jpg'

function Skills() {

  return (
    <div className='section-component'>
      <div className='skills'>
        <div className='container'>
          <div className='wrapper'>
            <div className='left'>
              <div className='main_title fadeInUp'>
                <span>Design is Life</span>
                <h3>I develop Skills Regularly to Keep Me Update</h3>
                <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
              </div>
              <div className='progress_bar fadeInUp'>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Illustrator</span>
                    <span className='number'>100%</span>
                  </span>
                  <div className='background'>
                    <div className='bar'>
                      <div className='bar_in' style={{width: 100+ "%", backgroundColor: 'rgb(247, 80, 35)'}}></div>
                    </div>
                  </div>
                </div>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Photoshop</span>
                    <span className='number'>100%</span>
                  </span>
                  <div className='background'>
                    <div className='bar open'>
                      <div className='bar_in' style={{width: 100 + "%", backgroundColor: 'rgb(28, 190, 89)'}}></div>
                    </div>
                  </div>
                </div>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Figma</span>
                    <span className='number'>100%</span>
                  </span>
                  <div className='background'>
                    <div className='bar open'>
                      <div className='bar_in' style={{width: 100 + "%", backgroundColor: 'rgb(128, 103, 240)'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <img src={skills_right} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills