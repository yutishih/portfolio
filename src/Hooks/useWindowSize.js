import { useEffect, useState } from 'react';

export default function useWindowSize() {
  
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  // const [windowSize, setWindowSize] = useState(getWindowSize());
  const [windowSize, setWindowSize] = useState({x: window.innerWidth, y: window.innerHeight});

  useEffect(() => {
    function handleWindowResize() {
      // setWindowSize(getWindowSize());
      setWindowSize({x: window.innerWidth, y: window.innerHeight});
    }
    setWindowSize({x: window.innerWidth, y: window.innerHeight});

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // return (
  //   <div>
  //     <h2>Width: {windowSize.innerWidth}</h2>
  //     <h2>Height: {windowSize.innerHeight}</h2>
  //   </div>
  // );
  return windowSize;
}

