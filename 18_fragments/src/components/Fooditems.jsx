import Item from "./Item";

const Fooditems = (props) =>{
    return (
        <ul className="list-group">
        {props.items.map((item) => (
            <Item key={item} foodItem={item} buyButton={()=>{
                console.log(`${item} being bought!`);
            }}></Item>
        ))}
        </ul>
    )
}

export default Fooditems;