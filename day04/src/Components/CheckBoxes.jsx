import { useState } from 'react';

export function CheckBoxes() {
    const [skills, setSkills] = useState([]);

    const handleSkills=(event)=>{
        if(event.target.checked){
            setSkills([...skills, event.target.value]);
        }else{
            setSkills(
                [...skills.filter((item)=>item != event.target.value)]
            );
        }
    };

    return (
        <>
            <h2>Select your skills.</h2>
            <div>
                <input onChange={handleSkills} type="checkbox" name="php" value="php" id="php" value="php" />
                <label htmlFor="php">PHP</label>
            </div>
            <div>
                <input onChange={handleSkills} type="checkbox" name="html" value="html" id="html"/>
                <label htmlFor="html">HTML</label>
            </div>
            <div>
                <input onChange={handleSkills} type="checkbox" value="css" name="css" id="css"/>
                <label htmlFor="css">CSS</label>
            </div>
            <div>
                <input onChange={handleSkills} type="checkbox" name="javascript" id="javascript" value="javascript"/>
                <label htmlFor="javascript">Javascript</label>
            </div>
            <br />
            <h2>Selected Skills.</h2>
            <p>{skills}</p>
        </>
    );
};