import { useState } from 'react';
const SetTask = ({addTask})=>{

    const [input, setInput] = useState("");

    const handlingAddTask = (event) => {
        addTask(input);
        setInput("");
    };
    return (
        <div style={{ 
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                flexWrap: "wrap" 
            }} 
        >
            <input type="text" 
                value={input} 
                onChange={(e)=>setInput(e.target.value)} 
                name="task" id="task" 
                placeholder="Enter you task"
                style={{
                    fontSize: "17px",
                    padding: "4px 11px"
                }}
            />
            <button type="button" onClick={handlingAddTask}>Add Task</button>
        </div>
    );
};

export default SetTask;