import { useState } from 'react';
import { Table } from './Componants/Table';
import { User } from './Componants/User';

function App() {
  const [count, setCount] = useState(0)
  const students = [
    {
      id: 1,
      name: "Aman",
      class: "10th",
      age: 15,
      gender: "Male"
    },
    {
      id: 2,
      name: "Priya",
      class: "9th",
      age: 14,
      gender: "Female"
    },
    {
      id: 3,
      name: "Rahul",
      class: "11th",
      age: 16,
      gender: "Male"
    },
    {
      id: 4,
      name: "Neha",
      class: "10th",
      age: 15,
      gender: "Female"
    }
  ];
  return (
    <>
      <h1>Day 05 of the Learning React Js</h1>
      <h2>Array Iteration by using Map</h2>
      <Table students={students}/>
      <br/>
      <h2>Resue Component in Loop</h2>
      {
        students.map((data)=>(
          <div key={data.id} style={{ display: "flex", gap: "10px" }}>
            <User data={data} />
          </div>
        ))
      }
    </>
  )
}

export default App;