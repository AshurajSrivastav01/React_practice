import { useState } from 'react';
const SetTask = ()=>{

    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");

    const addTask = (event) => {

        setTask([...task, input]);
    };
    return (
        <div style={{ 
                display: "flex",
                gap: "10px",
                width: "400px",
                justifyContent: "center",
                flexWrap: "wrap" 
            }} 
        >
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} name="task" id="task" placeholder="Enter you task"/>
            <button type="button" onClick={addTask}>Add Task</button>

            <br></br>
            <p>Task: {task}</p>
        </div>
    );
};

export default SetTask;