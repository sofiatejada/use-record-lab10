import { useState } from 'react';
import React from 'react';

const useRecord = (init) => {

  const [current, setCurrent] = useState(init);
  const [colorInputs, setPastColors] = useState([init]);

  const redo = () => {
    const currentIndex = colorInputs.indexOf(current);
    const arrayLength = colorInputs.length;

    arrayLength - 1 !== currentIndex ?
      setCurrent(colorInputs[currentIndex + 1]) :
      current;
  };

  const record = (value) => {
    const currentIndex = colorInputs.indexOf(current) + 1;
    colorInputs.splice(currentIndex, 0, value);
    setPastColors(colorInputs);
    setCurrent(value);
  };

  const undo = () => {
    const currentIndex = colorInputs.indexOf(current);

    currentIndex !== 0 ?
      setCurrent(colorInputs[currentIndex - 1]) :
      current;
  };

  return { current, record, undo, redo };
};

function App() {
  const { current, record, undo, redo } = useRecord('#FF0000');

  return (
    <>
      <button aria-label="undo" onClick={undo}>undo</button>
      <button aria-label="redo" onClick={redo}>redo</button>
      <input 
        aria-label="color-wheel"
        type="color" 
        value={current} 
        onChange={({ target }) => record(target.value)} />
      <div aria-label="butthole" style={
        { 
          backgroundColor: current, width: '10rem', height: '10rem' 
        }
      }></div>
    </>
  );
}

export default App;
