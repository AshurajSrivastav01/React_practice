import './App.css';
import { useState } from 'react';
import TaskList from './Components/TaskList';
import SetTask from './Components/SetTask';

function App() {
  const [task, setTask] = useState([]);
  return (
    <>
      <h1>To-Do Application Version 1.0</h1>
      <div>
        <SetTask />
        <TaskList />
      </div>
    </>
  );
}

export default App
