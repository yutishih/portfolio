import React, { Component } from 'react'

export class Subscribe extends Component {
  render() {
    return (
      <div className='section-component'>
        <div className='subscribe'>
          <div className='container'>
            <div className='inner'>
              <div className='background'>
                <div className='dots'></div>
                <div className='overlay'></div>
              </div>
              <div className='content'>
                <div className='left fadeInLeft'>
                  <span class="subtitle">Subscribe Now</span>
                  <h3 class="title">Get My Newsletter</h3>
                  <p class="text">Get latest news, updates, tips and trics in your inbox</p>
                </div>
                <div className='left fadeInRight'>
                  <div className='field'>
                    <input type='text' placeholder="Your Email Here"></input>
                    <input type='submit' value="Send Now" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Subscribe