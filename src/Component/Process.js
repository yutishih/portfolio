import React, { Component } from 'react'
import Process_1 from '../Images/process_1.png'
import Process_2 from '../Images/process_2.png'
import Process_3 from '../Images/process_3.png'

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
                        <img src={Process_1} />
                      </span>
                    </div>
                    <div className='title'>
                      <h3>Responsive Web Design</h3>
                    </div>
                    <div className='text'>
                      <p>I create modern webpage designs compatible with all-sizes devices including mobile, tablet, and personal computer.</p>
                    </div>
                  </div>
                </li>
                <li className='fadeInUp'>
                  <div className='list_inner'>
                    <div className='icon'>
                      <span>
                        <img src={Process_2} />
                      </span>
                    </div>
                    <div className='title'>
                      <h3>Customized Web Page</h3>
                    </div>
                    <div className='text'>
                      <p>All web pages designs are customized based on pre-marketing research to fit your desires and business requirements.</p>
                    </div>
                  </div>
                </li>
                <li className='fadeInUp'>
                  <div className='list_inner'>
                    <div className='icon'>
                      <span>
                        <img src={Process_3} />
                      </span>
                    </div>
                    <div className='title'>
                      <h3>Time Is Gold</h3>
                    </div>
                    <div className='text'>
                      <p>Every second stands for cost to your business, your projects would be processed with the best priority and completed ASAP.</p>
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