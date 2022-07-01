import React, {useContext, Component } from 'react'
import useMousePosition from "../Hooks/useMousePosition";
import { MouseContext } from '../Context/MouseContext';

const MouseCursor = () => {
  
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const {x, y} = useMousePosition();
  return (
    <>
      <div
        style={{  left: `${x}px`, top: `${y}px`}}
        className={ 'mouse-cursor cursor-outer'+ cursorType }
      ></div>
      <div
        style={{  left: `${x}px`, top: `${y}px`}}
        className={'mouse-cursor cursor-inner' + cursorType }
      ></div>
    </>
    
  )
}


export default MouseCursor