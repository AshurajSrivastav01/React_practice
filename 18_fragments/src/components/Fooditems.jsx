import { useState } from "react";
import Item from "./Item";

const Fooditems = (props) =>{
    
    let [activeItem, setActiveItem] = useState([]);

    let onBuyButton = (item, event) => {
        let newItem = [...activeItem, item];
        setActiveItem(newItem);
    };

    return (
        <ul className="list-group">
        {props.items.map((item) => (
            <Item 
                key={item} 
                foodItem={item} 
                bougth={activeItem.includes(item)} 
                buyButton={(event)=> onBuyButton(item, event)}
            ></Item>
        ))}
        </ul>
    )
}

export default Fooditems;