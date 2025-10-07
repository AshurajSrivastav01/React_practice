import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css"
import Fooditems from './components/Fooditems'
import Container from './components/Container';
import FoodInputs from './components/FoodInputs';
function App() {
  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];

  let textToShow = "Food Item Enter by User!";

  const handleOnChange = (event) => {
    console.log(event.target.value)
    textToShow = event.target.value;
  };

  return (
    <Container>
      <h1>Food Items:</h1>
      <FoodInputs handleOnChange={handleOnChange}></FoodInputs>
      <p>{textToShow}</p>
      <Fooditems items={foodItems}></Fooditems>
    </Container>
  )
}

export default App;
