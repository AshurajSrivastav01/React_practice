import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  // let fooditem = [];
  let fooditem = ['Dal', 'Roti', 'Sabji', 'Panner', 'Salad', 'Milk'];

  if(fooditem.length === 0){
    return <h2>I'm Hungry!</h2>
  }
  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className='list-group'>
        {fooditem.map(item => <li key={item} className='list-group-item'>{item}</li>)}
      </ul>
    </>
  )
}

export default App
