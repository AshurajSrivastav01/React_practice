import './App.css'
import AddToDo from './components/AddToDo'
import AppName from "./components/AppName"
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'
function App() {
  return (
    <>
      <div classNameName='todo-container'>
        <AppName></AppName>
        <AddToDo></AddToDo>

        {/* List Area Starts */}
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </>
  )
}

export default App
