import Styles from "./Item.module.css"

const Item = (props) =>{

    // const handleBuyButton = () => {
    //     console.log(`${props.foodItem} being bought!`);
    // };

    return (
        <li className={`list-group-item ${props.bougth ? 'active' : ''}`}>
            {props.foodItem}
            <button className={`${Styles.button} btn ${props.bougth ? 'btn-secondary' : 'btn-info'}`} onClick={props.buyButton}>{props.bougth ? 'Remove' : 'Buy'}</button>
        </li>
    )
}

export default Item;