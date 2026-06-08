import './App.css';
import { useState } from 'react';
import TaskList from './Components/TaskList';
import SetTask from './Components/SetTask';

function App() {
  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    if(!task.includes(newTask)){
      setTask([...task, newTask]);
    }else{
      alert("Task Already Exist. You can not add the same task twic!");
    }
  }

  const removeTask = (removetaskValue) => {
    if(task.includes(removetaskValue)){
      // Remove element
      setTask(task.filter(t => t !== removetaskValue));
    }
  }
  return (
    <>
      <h1 style={{ margin: "4rem 0" }}>To-Do Application Version 1.0</h1>
      <div style={{
            width: "fit-content",
            border: "1px solid #fff",
            padding: "11px",
            borderRadius: "7px"
      }}>
        <SetTask addTask={addTask}/>
        {
          task.map((t, index)=>(
            <TaskList key={index} task={t} removeTask={removeTask} />
          ))
        }
      </div>
    </>
  );
}

export default App;