import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function clearFileds(){
    setName('');
    setEmail('');
    setPassword('');
  }
  return (
    <>
      <h1>Day 03 in React Learning.</h1>
      <h3>Topic 01: How to get input</h3>
        <div>
          <form>
            <input type="text" value={name} onChange={(event)=> setName(event.target.value) } placeholder="Enter Name" /><br />
            <input type="text" value={email} onChange={(event)=> setEmail(event.target.value) } placeholder="Enter Email" /><br />
            <input type="password" value={password} onChange={(event)=> setPassword(event.target.value) } placeholder="Enter Password" /> <br />
            <button type="submit">Submit</button> &nbsp <button onClick={clearFileds} type="button">Clear</button>
          </form>
        </div>
        <div className="output">
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
          <h3>Password: {password}</h3>
        </div>
    </>
  )
}

export default App
