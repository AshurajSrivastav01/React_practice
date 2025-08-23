import './App.css'

function App() {
  return (
    <>
      <div classNameName='todo-container'>
        <h1 className='text-center my-5'>TO DO List</h1>
        
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

        {/* List Area Starts */}
        <div className="row">
          <div className="col-md-6">
            <p>To Do List UI</p>
          </div>
          <div className="col-md-4">
            <p>08/23/2025</p>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>To Do List Logic Functionlity</p>
          </div>
          <div className="col-md-4">
            <p>08/24/2025</p>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
