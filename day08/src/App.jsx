import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  function callOnce(){
    console.log('callOnce function called');
  }

  callOnce();

  return (
    <>
      <h1>useEffect Hook</h1>
      <button onClick={ () => setCounter(counter + 1) }>Counter {counter}</button>
    </>
  )
}

export default App
