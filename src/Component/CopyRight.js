import React, { Component } from 'react'

export class CopyRight extends Component {
  render() {
    return (
      <div className='section-component'>
        <div className='copyright'>
          <div className='container'>
            <div className='inner'>
              <div className='left fadeInLeft'>
                <p>Developed by <span>Yuti Shih</span> © 2022</p>
              </div>
              <div className='right fadeInRight'>
                <ul>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default CopyRight