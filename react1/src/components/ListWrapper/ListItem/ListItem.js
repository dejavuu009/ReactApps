
import React from "react";
import styles from './ListItem.module.scss'
import PropTypes from 'prop-types';
import Button from "../../Button/Button";
import Title from "../../Title/Title";



const ListItem = ({image, name , description, twitterLink}) => {

const ImageTag = image ? 'img' : 'div';

return(
<li className={styles.wrapper}>
    <ImageTag className={styles.image} src={image} alt={name}/>
    <div>
        <Title className={styles.name}>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button href={twitterLink}>Visit Twitter page</Button>
    </div>
</li>
)
};

ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
description: 'one of the React creators',
image: null
};


export default ListItem;