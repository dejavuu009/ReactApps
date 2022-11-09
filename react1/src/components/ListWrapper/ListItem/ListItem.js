
import React from "react";
import './ListItem.css';
import PropTypes from 'prop-types';



const ListItem = ({image, name , description, twitterLink}) => (
<li className="listItem__wrapper">
    <img className="listItem__image" src={image} alt={name}></img>
    <div>
        <h2 className="listItem__name">{name}</h2>
        <h2 className="listItem__description">{description}</h2>
        <a className="listItem__button" target= 'blank' href={twitterLink}>Visit Twitter page</a>
    </div>
</li>
);

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
description: 'one of the React creators'
};

export default ListItem;