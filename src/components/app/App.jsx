import { useEffect, useState } from "react";
import React from "react";

const useRecord = (init) => {

  const [current, setCurrent] = useState(init);
  const [colorInputs, setPastColors] = useState([init]);
  

  const undo = () => {
      const arrayLength = colorInputs.length;

      setCurrent(colorInputs[arrayLength - 1])
  }

  // const redo = () => {

  // }

  const record = (value) => {
    colorInputs.push(value);
    setPastColors(colorInputs);
    setCurrent(value)
  }
  console.log(colorInputs);
  
  return { current, record, undo };

  

};

function App() {
  const { current, record, undo } = useRecord('#FF0000');
  console.log(current);

  return (
    <>
      <button onClick={console.log('undo handler here')}>undo</button>
      <button onClick={console.log('redo handler here')}>redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}

export default App;
