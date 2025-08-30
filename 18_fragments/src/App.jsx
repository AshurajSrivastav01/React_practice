import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
function App() {
  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
  return (
    <>
      <h1>Food Items:</h1>
      {foodItems.length === 0 && <h2>I'm Hungry.</h2> }
      <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
      </ul>
    </>
  )
}

export default App
