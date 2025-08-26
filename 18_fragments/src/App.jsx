import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Fooditems from './components/Fooditems'
function App() {
  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
  return (
    <>
      <h1>Food Items:</h1>
      <Fooditems items={foodItems}></Fooditems>
    </>
  )
}

export default App
