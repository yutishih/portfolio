import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Logo from '../Images/logo.png';

class Navigation extends Component {

  render() {
    return (
    <div className='navigation'>
      <div className='navi-wrapper'>
        <Container>
          <div className='inner'>
            <div className='logo'>
              <img src={Logo} />
            </div>
            <div className='menu'>
              <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Blog</a></li>
                <li><a>Contact</a></li>
                <li className='download_cv'><a><span>Download CV</span></a></li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
    );
  }
}

export default Navigation