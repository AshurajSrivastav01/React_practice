import './App.css';
import { useState } from 'react';
import TaskList from './Components/TaskList';
import SetTask from './Components/SetTask';

function App() {
  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    setTask([...task, newTask]);
  }
  return (
    <>
      <h1>To-Do Application Version 1.0</h1>
      <div style={{
            width: "fit-content",
            border: "1px solid #fff",
            padding: "11px",
            borderRadius: "7px"
      }}>
        <SetTask addTask={addTask}/>
        {
          task.map((t, index)=>(
            <TaskList key={index} task={t}/>
          ))
        }
      </div>
    </>
  );
}

export default App;