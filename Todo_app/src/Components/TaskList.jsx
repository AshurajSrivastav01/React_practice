const TaskList = ({keys, task}) => {
    const handleRemoveTask = () => {

    }

    return (
        <>
            <div key={keys} style={{
                    border: "1px solid rgb(255, 255, 255)",
                    margin: "5px 0px",
                    borderRadius: "4px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3px 9px",
                    fontWeight: "500",
                    fontSize: "15px"
            }}>
                <p>{task}</p>
                <span 
                    style={{
                        cursor: "pointer"
                    }} 
                    onClick={handleRemoveTask}
                >
                    X
                </span>
            </div>
        </>
    );
}

export default TaskList;