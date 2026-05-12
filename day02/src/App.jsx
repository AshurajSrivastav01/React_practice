import {useState} from "react";
import { Counter } from './components/Counter';
import { Toggle } from './components/Toggle';

function App() {
  const [fruit, setFruit] = useState("Apple");
  const handle = () => {
    setFruit("Banana");
  }
  return (
    <>
      <div>
        <h1>State in React Js</h1>
        <h1>{fruit}</h1>
        <button onClick={handle}>Change Fruit</button>
        <Counter />
        <br></br>
        <span>------------------------------------------------------</span>
        <Toggle />
      </div>
    </>
  )
}

export default App
