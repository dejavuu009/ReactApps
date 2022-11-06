import React from "react";
import ListItem from "./ListItem/ListItem";
import './ListWrapper.css';



const ListWrapper = (props) => (
<ul>

    
    
    {props.items.map(items => (
    <ListItem key={items.name} {...items} />
    ))}

</ul>

)

export default ListWrapper;