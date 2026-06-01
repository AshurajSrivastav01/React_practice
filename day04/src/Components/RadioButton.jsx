import { useState } from 'react';

export function RadioButton(){
    const [gender, setGender] = useState('');
    const handleGender = (event) => {
        setGender(event.target.value);
    }
    return (
        <>
            <h2>Select Gender:</h2>
            <input type="radio" id="male" value="male" name="gender" checked={gender === 'male'} onChange={handleGender}/>
            <label htmlFor="male">Male</label>

            <input checked={gender === 'female'} onChange={handleGender} type="radio" id="female" value="female" name="gender"/>
            <label htmlFor="female">Female</label>
            <br></br>

            <h3>Selected Gender: {gender}</h3>
        </>
    );
}