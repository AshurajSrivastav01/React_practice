import { useState } from 'react';
const SetTask = ({addTask})=>{

    const [input, setInput] = useState("");

    const handlingAddTask = (event) => {
        addTask(input);
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
            <button type="button" onClick={handlingAddTask}>Add Task</button>
        </div>
    );
};

export default SetTask;