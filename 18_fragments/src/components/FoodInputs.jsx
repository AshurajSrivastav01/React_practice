import Styles from "./FoodInputs.module.css";

const FoodInputs = () =>{

    const handleOnChange = (event) => {
        console.log(event.target.value)
    };

    return <input type="text" className={`${Styles.input}`} placeholder="enter food item name..." onChange={handleOnChange} />
}

export default FoodInputs;