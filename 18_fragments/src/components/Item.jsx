import Styles from "./Item.module.css"

const Item = (props) =>{
    return (
        <li className="list-group-item">
            {props.foodItem}
            <button>Click Me</button>
        </li>
    )
}

export default Item;