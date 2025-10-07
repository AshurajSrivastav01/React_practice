import Styles from "./Item.module.css"

const Item = (props) =>{

    const handleBuyButton = () => {
        console.log(`${props.foodItem} being bought!`);
    };

    return (
        <li className="list-group-item">
            {props.foodItem}
            <button className={`${Styles.button} btn btn-info`} onClick={handleBuyButton}>Click  Me</button>
        </li>
    )
}

export default Item;