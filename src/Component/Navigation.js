import React, { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap';
import { MouseContext } from '../Context/MouseContext';
import Logo from '../Images/logo.png';

function Navigation() {

  //Navigation scroll down effect
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

  // Cursor Hover Effect
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);


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
                  <li><a onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                        onMouseLeave={() => cursorChangeHandler("")}>Home</a></li>
                  <li><a onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                        onMouseLeave={() => cursorChangeHandler("")}>About</a></li>
                  <li><a onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                        onMouseLeave={() => cursorChangeHandler("")}>Portfolio</a></li>
                  <li><a onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                        onMouseLeave={() => cursorChangeHandler("")}>Blog</a></li>
                  <li><a onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                        onMouseLeave={() => cursorChangeHandler("")}>Contact</a></li>
                  <li className='download_cv'><a onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                        onMouseLeave={() => cursorChangeHandler("")}><span>Download CV</span></a></li>
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