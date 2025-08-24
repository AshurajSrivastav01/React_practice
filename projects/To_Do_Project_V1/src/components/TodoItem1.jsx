function TodoItem1(){
    let name = "To Do List UI";
    let date = "08/23/2025";
    return(
        <div className="row">
          <div className="col-md-6">
            <p>{name}</p>
          </div>
          <div className="col-md-4">
            <p>{date}</p>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
    )
}

export default TodoItem1;