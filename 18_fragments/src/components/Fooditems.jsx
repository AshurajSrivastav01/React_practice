import Item from "./Item";

const Fooditems = (props) =>{
    return (
        <ul className="list-group">
        {props.items.map((item) => (
            <Item key={item} foodItem={item}></Item>
        ))}
        </ul>
    )
}

export default Fooditems;