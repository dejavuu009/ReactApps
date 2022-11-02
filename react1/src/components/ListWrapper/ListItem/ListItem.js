import React from "react";
import './ListItem.css';
import danabramovImage from '/Users/jakub/Desktop/Web Development/ReactApp/ReactApps/react1/src/assets/images/danabramov.jpg';


const ListItem = () => (
<li className="listItem__wrapper">
    <img className="listItem__image" src={danabramovImage}></img>
    <div>
        <h2 className="listItem__name">Dan Abramov</h2>
        <h2 className="listItem__description">exapmple</h2>
        <button className="listItem__button">Visit Twitter page</button>
    </div>
</li>

);

export default ListItem;