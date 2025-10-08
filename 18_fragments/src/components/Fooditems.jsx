import { useState } from "react";
import Item from "./Item";

const Fooditems = (props) =>{
    
    let [activeItem, setActiveItem] = useState([]);
    let newItem;
    let onBuyButton = (item, event) => {
        if(activeItem.includes(item)){
            // if the item is already present in the arrary 'activeItem' then remove
            newItem = activeItem.filter(removeItem => removeItem !== item);
            console.log(newItem);
            setActiveItem(newItem);
            return;
        }
        newItem = [...activeItem, item];
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