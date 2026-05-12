import { useState } from 'react';

export function Toggle(){
    const [displayName, setDisplayName] = useState(true);

    const toggleName = () => {
        setDisplayName(displayName ? false : true);
    };

    return(
        <>
            <h1>Toggle Name by using 'useState'</h1>
            <h2>User Name: {displayName ? 'Ashuraj Srivastav' : 'No Name' }</h2>
            <button type="button" onClick={toggleName}>Change Name</button>
        </>
    );
}