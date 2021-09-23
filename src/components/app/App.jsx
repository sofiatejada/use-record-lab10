import { useState } from "react";
import React from "react";

const useRecord = (init) => {

  const [current, setCurrent] = useState(init);
  const [colorInputs, setPastColors] = useState([init]);

  const redo = () => {
    const currentIndex = colorInputs.indexOf(current);
    setCurrent(colorInputs[currentIndex + 1]);
  }

  const record = (value) => {
    const currentIndex = colorInputs.indexOf(current);
    colorInputs.splice(currentIndex, 0, value);
    setPastColors(colorInputs);
    setCurrent(value)
    console.log(currentIndex);
  }

  const undo = () => {
    const currentIndex = colorInputs.indexOf(current);
    setCurrent(colorInputs[currentIndex - 1]);
  }
  console.log(colorInputs);

  return { current, record, undo, redo };
};

function App() {
  const { current, record, undo, redo } = useRecord('#FF0000');

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}

export default App;
