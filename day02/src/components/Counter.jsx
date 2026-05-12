import { useState } from "react";

export const Counter = () => {

    const [counter, updateCounter] = useState(0);
    const handleCount = () => {
        updateCounter(counter+1);
    }

    return ( 
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleCount}>Update Counter</button>
        </>
    )
}