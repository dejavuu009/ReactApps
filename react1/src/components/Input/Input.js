import React from "react";
import styles from './Input.module.scss';
import PropTypes from 'prop-types';


const Input = ({tag : Tag , name, maxLength, label}) => (
    
    <div className={styles.item}>
    <Tag 
        type="text" 
        name={name} 
        id={name} 
        placeholder=" " 
        maxLength={maxLength}
        
    />
    <label htmlFor={name}>{label}</label>
    <div className={styles.itemBar}></div>
</div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    maxLength: PropTypes.string.isRequired,
};

Input.defaultProps = {
tag: 'Input',
maxLength: 200,
};

export default Input;