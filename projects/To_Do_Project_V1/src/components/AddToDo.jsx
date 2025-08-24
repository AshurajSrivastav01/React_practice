function AddToDo(){
    return (
        <div className="row">
            <div className="col-md-6">
                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Task..." />
            </div>
            <div className="col-md-4">
                <input type="date" className="form-control" name="date" id="date" />
            </div>
            <div className="col-md-2">
                <button type="button" className="btn btn-success">Success</button>
            </div>
        </div>
    )
}

export default AddToDo;