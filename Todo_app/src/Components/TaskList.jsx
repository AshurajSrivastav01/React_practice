const TaskList = ({key, task}) => {
    return (
        <>
            <div key={key} style={{
                border: "1px solid #fff",
                margin: "5px 0px",
                borderRadius: "4px",
                textAlign: "left",
                padding: "6px 10px",
                fontWeight: "600"
            }}>{task}</div>
        </>
    );
}

export default TaskList;