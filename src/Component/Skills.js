import React, { useEffect, useState } from 'react'
import skills_right from '../Images/skills.jpg'

function Skills() {

  const [barWidth, setBarWidth] = useState(true);

  // scrollPosition is the return value
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position <= 3518){
      setScrollPosition(3518);
    }else if (position >= 3618){
      setScrollPosition(3618);
    }else{
      setScrollPosition(position);
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
        <div className='container'>
          <div className='wrapper'>
            <div className='left'>
              <div className='main_title fadeInUp'>
                <span>Design is Life</span>
                <h3>I develop Skills Regularly to Keep Me Update</h3>
                <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
              </div>
              <div className='progress_bar fadeInUp'>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Illustrator</span>
                    <span className='number'>{(scrollPosition-3518) + "%"}</span>
                  </span>
                  <div className='background'>
                    <div className='bar open'>
                      <div className='bar_in' style={{width: (scrollPosition-3418) + "%", backgroundColor: 'rgb(247, 80, 35)'}}></div>
                    </div>
                  </div>
                </div>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Photoshop</span>
                    <span className='number'>100%</span>
                  </span>
                  <div className='background'>
                    <div className='bar open'>
                      <div className='bar_in' style={{width: 100 + "%", backgroundColor: 'rgb(28, 190, 89)'}}></div>
                    </div>
                  </div>
                </div>
                <div className='progress_inner'>
                  <span>
                    <span className='label opened'>Figma</span>
                    <span className='number'>100%</span>
                  </span>
                  <div className='background'>
                    <div className='bar open'>
                      <div className='bar_in' style={{width: 100 + "%", backgroundColor: 'rgb(128, 103, 240)'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <img src={skills_right} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills