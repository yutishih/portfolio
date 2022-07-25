import React, { useContext, Component } from 'react'
import { MouseContext } from '../Context/MouseContext';
import { Container, Row, Col } from 'react-bootstrap'
import AboutSideImg from '../Images/about.jpg'
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
                      <span>18</span>
                    </h3>
                    <span className='name'>
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className='number project'>
                  <div className='wrapper'>
                    <h3>
                      <span>9K</span>
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
                <span>I'm a Designer</span>
                <h3>I Can Design Anything You Want</h3>
              </div>
              <div className='text'>
                <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
              </div>
              <div className='button'>
                <a class='anchor' href="#" onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
                                          onMouseLeave={() => cursorChangeHandler("")}>
                  <span>Hire Me</span>
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