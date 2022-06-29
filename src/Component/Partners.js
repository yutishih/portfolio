import React, { Component } from 'react'
import Brush_9 from '../Images/brush_9.png'
import Partner_1 from '../Images/partner_1.png'
import Partner_2 from '../Images/partner_2.png'

export class Partners extends Component {
  render() {
    return (
      <div className='section-component'>
        <div className='partners'>
          <div className='container'>
            <div className='partners_inner'>
              <ul>
                <li className='fadeIn'>
                  <div className='list_inner'>
                    <img src={Partner_1} />
                    <a className='full_link'></a>
                  </div>
                </li>
                <li className='fadeIn'>
                  <div className='list_inner'>
                    <img src={Partner_2} />
                    <a className='full_link'></a>
                  </div>
                </li>
                <li className='fadeIn'>
                  <div className='list_inner'>
                    <img src={Partner_1} />
                    <a className='full_link'></a>
                  </div>
                </li>
                <li className='fadeIn'>
                  <div className='list_inner'>
                    <img src={Partner_2} />
                    <a className='full_link'></a>
                  </div>
                </li>
                <li className='fadeIn'>
                  <div className='list_inner'>
                    <img src={Partner_1} />
                    <a className='full_link'></a>
                  </div>
                </li>
                <li className='fadeIn'>
                  <div className='list_inner'>
                    <img src={Partner_2} />
                    <a className='full_link'></a>
                  </div>
                </li>
                <li className='fadeIn'>
                  <div className='list_inner'>
                    <img src={Partner_1} />
                    <a className='full_link'></a>
                  </div>
                </li>
                <li className='fadeIn'>
                  <div className='list_inner'>
                    <img src={Partner_2} />
                    <a className='full_link'></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='brush_9 fadeInlLeft'>
            <img src={Brush_9} />
          </div>
        </div>
      </div>
    )
  }
}

export default Partners