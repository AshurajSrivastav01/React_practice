import { useState } from 'react';
import './App.css';
import { CheckBoxes } from './Components/CheckBoxes';
import { SelectOptions } from './Components/SelectOption';
import { RadioButton } from './Components/RadioButton';
function App() {
  return (
    <>
      <CheckBoxes />
      <SelectOptions />
      <RadioButton />
    </>
  );
}

export default App;