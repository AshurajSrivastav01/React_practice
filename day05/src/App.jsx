import { useState } from 'react';
import { Table } from './Componants/Table';
function App() {
  const [count, setCount] = useState(0)
  const students = [
    {
      name: "Aman",
      class: "10th",
      age: 15,
      gender: "Male"
    },
    {
      name: "Priya",
      class: "9th",
      age: 14,
      gender: "Female"
    },
    {
      name: "Rahul",
      class: "11th",
      age: 16,
      gender: "Male"
    },
    {
      name: "Neha",
      class: "10th",
      age: 15,
      gender: "Female"
    }
  ];
  return (
    <>
      <h1>Day 05 of the Learning React Js</h1>
      <Table students={students}/>
    </>
  )
}

export default App;