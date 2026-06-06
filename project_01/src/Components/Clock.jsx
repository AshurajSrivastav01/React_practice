import { useState, useEffect } from 'react';
export function Clock(){
    const [time, setTime] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    },[]);
    let color = 'red';
    return(
        <>
            <h2 style={{ color: color }} >{time}</h2>
        </>
    );
}