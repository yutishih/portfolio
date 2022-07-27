import React, { useContext, Component } from 'react'
import { MouseContext } from '../Context/MouseContext';
import { Container, Row, Col } from 'react-bootstrap'
import AboutSideImg from '../Images/about.png'
import Brush_1 from '../Images/about_brush_1.png'
import Brush_2 from '../Images/about_brush_2.png'
 
function About (){

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className='section-component'>
      <div className='about'>
        <Container>
          <Row className='wrapper'>
            <Col sm={12} md={12} lg={6} className='left'>
              <div className='image'>
                <img src={AboutSideImg} />
                <div className='number year'>
                  <div className='wrapper'>
                    <h3>
                      <span>6</span>
                    </h3>
                    <span className='name'>
                      Years of
                      <br />
                      Experience
                    </span>
                  </div>
                </div>
                <div className='number project'>
                  <div className='wrapper'>
                    <h3>
                      <span>10+</span>
                    </h3>
                    <span className='name'>
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} className='right'>
              <div className='title'>
                <span>I'm a Developer</span>
                <h3>I Can Create Any Page You Need</h3>
              </div>
              <div className='text'>
                <p>Hello there! I'm a web developer/designer. With 5+ years experience as a professional developer, I am dedicated to construct modern websites for businesses to create streamline user experience in order to gain exposure and customers online.</p>
              </div>
              <div className='button'>
                <a class='anchor' href="#" onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                                          onMouseLeave={() => cursorChangeHandler("")}>
                  <span>Let's Talk</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='brush_1 fadeInLeft'>
          <img src={Brush_1} />
        </div>
        <div className='brush_2 fadeInRight'>
          <img src={Brush_2} />
        </div>
      </div>
    </div>
  )
}

export default About