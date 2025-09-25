import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css"
import Fooditems from './components/Fooditems'
import Container from './components/Container';
function App() {
  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
  return (
    <Container>
      <h1>Food Items:</h1>
      <Fooditems items={foodItems}></Fooditems>
    </Container>
  )
}

export default App
