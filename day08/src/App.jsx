import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  
  function callOnce(){
    console.log('callOnce function called');
  }

  useEffect(()=>{
    callOnce();
  },[counter]);


  return (
    <>
      <h1>useEffect Hook</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button style={{ width: "fit-content" }} onClick={ () => setCounter(counter + 1) }>Counter {counter}</button>
        <br />
        <button style={{ width: "fit-content" }} onClick={ () => setData(data + 1) }>Data {data}</button>
      </div>
    </>
  )
}

export default App
