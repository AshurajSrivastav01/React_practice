function Hello(){
    let number = 1469;
    let fullName = () =>{
        return 'Ashuraj Srivastav';
    }
    return <>
        <p>
            MessageNo: {number} I am your master {fullName()}
        </p>
    </>
}

export default Hello