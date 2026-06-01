import { useState } from 'react';
import './App.css';
import { CheckBoxes } from './Components/CheckBoxes';
import { SelectOptions } from './Components/SelectOption';

function App() {
  return (
    <>
      <CheckBoxes />
      <SelectOptions />
    </>
  );
}

export default App;