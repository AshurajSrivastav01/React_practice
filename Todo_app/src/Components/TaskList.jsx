import { useState } from 'react';

const TaskList = ({ task, removeTask }) => {
    const [markComplete, setMarkComplete] = useState(false);

    const completeTask = () => {
        setMarkComplete(true);
    };

    return (
        <>
            <div style={{
                    border: "1px solid rgb(255, 255, 255)",
                    margin: "5px 0px",
                    borderRadius: "4px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3px 9px",
                    fontWeight: "500",
                    fontSize: "15px",
                    textDecoration: markComplete ? "line-through" : "",
                    color: markComplete ? "green" : ""
            }}>
                <p>{task}</p>
                {!markComplete && (
                    <div style={{ display: "flex", gap: "10px" }}>
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={completeTask}
                        >
                            ✔
                        </span>

                        <span style={{ cursor: "pointer" }} onClick={()=>removeTask(task)} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </span>
                    </div>
                )}
            </div>
        </>
    );
}

export default TaskList;