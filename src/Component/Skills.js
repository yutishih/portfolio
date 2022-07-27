import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import skills_right from '../Images/skills.jpg'

function Skills() {

  const [scrollHeight, setScrollHeight] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 3600) {
      setScrollHeight(false);
    }else{
      // setScrollHeight(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='section-component'>
      <div className='skills'>
        <Container>
          <Row className='wrapper'>
            <Col className='left'>
              <div className='main_title fadeInUp'>
                <span>As a Developer</span>
                <h3>I Instruct Myself Regularly to Keep Updated</h3>
                <p>Technology moves forward every single second nowadays. As a developer, staying in-the-know could be the most important element to success.</p>
              </div>
              <div sm={12} md={6} lg={6} className='progress_bar fadeInUp'>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Web Design</span>
                    <span className='number'>100%</span>
                  </span>
                  <div className='background'>
                    <div className={'bar' + (scrollHeight ? ' ': ' open transition_1')}>
                      <div className='bar_in' style={{backgroundColor: 'rgb(247, 80, 35)'}}></div>
                    </div>
                  </div>
                </div>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Web Development</span>
                    <span className='number'>100%</span>
                  </span>
                  <div className='background'>
                    <div className={'bar' + (scrollHeight ? ' ': ' open transition_2')}>
                      <div className='bar_in' style={{backgroundColor: 'rgb(28, 190, 89)'}}></div>
                    </div>
                  </div>
                </div>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Marketing Research</span>
                    <span className='number'>100%</span>
                  </span>
                  <div className='background'>
                    <div className={'bar' + (scrollHeight ? ' ': ' open transition_3')}>
                      <div className='bar_in' style={{backgroundColor: 'rgb(128, 103, 240)'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className='right'>
              <img src={skills_right} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Skills