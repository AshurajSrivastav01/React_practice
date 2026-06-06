const TaskList = ({key, task}) => {
    return (
        <>
            <div key={key}>{task}</div>
        </>
    );
}

export default TaskList;