import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Logo from '../Images/logo.png';

function Navigation() {

  const [HeaderColor, setHeaderColor] = useState('navi_wrapper');
  const listenScrollEvent = (event) => {
    if (window.scrollY < 70){
      return setHeaderColor('navi_wrapper')
    }else if(window.scrollY > 70){
      return setHeaderColor('navi_wrapper_white')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
    window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className='section-component'>
      <div className='navigation'>
        <div className={HeaderColor}>
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
    </div>
  );
}
export default Navigation