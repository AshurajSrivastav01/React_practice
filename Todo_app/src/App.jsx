import './App.css';
import { useState } from 'react';
import TaskList from './Components/TaskList';
import SetTask from './Components/SetTask';

function App() {
  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    setTask([...task, newTask]);
    // alert(newTask);
  }
  return (
    <>
      <h1>To-Do Application Version 1.0</h1>
      <div>
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

export default App
