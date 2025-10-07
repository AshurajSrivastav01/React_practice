import Styles from "./FoodInputs.module.css";

const FoodInputs = (props) => {
    return <input type="text" className={`${Styles.input}`} placeholder="enter food item name..." onChange={props.handleOnChange} />
}

export default FoodInputs;