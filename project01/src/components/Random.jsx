function Random(){
    let num = Math.random() * 10;
    return <>
        <p>Random number is: {Math.round(num)}</p>
    </>
}

export default Random;