import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css"
import Fooditems from './components/Fooditems'
import Container from './components/Container';
import FoodInputs from './components/FoodInputs';
import { useState } from 'react';
function App() {
  // 1st Basic Way to Use '' useState' hook
  /* let textStateArr = useState("Food Item Enter by User!");
  let textToShow = textStateArr[0];
  let setTextToShow = textStateArr[1]; */

  // 2nd One line code 'Advance and easy way to do'
  let [textToShow, setTextToShow] = useState("Food Item Enter by User!");
  let [foodItems, setFoodItems] = useState(['Dal', 'Green Vegetable', 'Roti']);

  const handleOnKeyDown = (event) => {
    if(event.key === 'Enter'){
      console.log(event.target.value)
      setTextToShow(event.target.value);
    }
  };

  return (
    <Container>
      <h1>Food Items:</h1>
      <FoodInputs handleOnKeyDown={handleOnKeyDown}></FoodInputs>
      {/* <p>{textToShow}</p> */}
      <Fooditems items={foodItems}></Fooditems>
    </Container>
  )
}

export default App;
