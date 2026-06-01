import { useState } from 'react';

export function SelectOptions() {

    const [state, setState] = useState("");

    const handleState = (event) => {
        setState(event.target.value);
    }

    return (
        <>
            <h2>Select your State:</h2>

            <select onChange={handleState} value={state}>
                <option value="">Select State</option>
                <option value="delhi">Delhi</option>
                <option value="up">UP</option>
                <option value="bihar">Bihar</option>
            </select>

            <p>
                <strong>Selected State:</strong> {state}
            </p>
        </>
    );
}