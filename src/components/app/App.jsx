const useRecord = (init) => {

  const [current, setCurrent] = useState();



};

function App() {
  const { current } = useRecord('#FF0000');

  return (
    <>
      <button onClick={console.log('undo handler here')}>undo</button>
      <button onClick={console.log('redo handler here')}>redo</button>
      <input type="color" value={current} onChange={({ target }) => console.log('record(target.value)')} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}

export default App;
