import React, {useState} from "react";
import styles from "./Form.module.scss";

import Title from '../Title/Title';



const Form = () => {

const [enteredTitle, setEnteredTitle] = useState("");
const [enteredLink, setEnteredLink] = useState("");
const [enteredImage, setEnteredImage] = useState("");
const [enteredDescription, setEnteredDescription] = useState("");

const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value)
}
const linkChangeHandler = (event) => {
  setEnteredLink(event.target.value)
}
const imageChangeHandler = (event) => {
  setEnteredImage(event.target.value)
}
const descriptionChangeHandler = (event) => {
  setEnteredDescription(event.target.value)
}



  const titleChange = (e) => {
    e.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      twitterLink: enteredLink,
      image: enteredImage,
      description: enteredDescription,
      
    };
    console.log(expenseData);
    setEnteredTitle("");
    
  };

  return(
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
    <form id="my-form" autoComplete="off" className={styles.form} onSubmit={titleChange} >
    <div className={styles.form}>
    <label>Name</label>
      <input type='text' value={enteredTitle} onChange={titleChangeHandler}  >
      </input>
    </div>
    <div className={styles.form}>
    <label>link</label>
      <input type='text' value={enteredLink} onChange={linkChangeHandler} >
      </input>
    </div>
    <div className={styles.form}>
    <label>img</label>
      <input type='text' value={enteredImage} onChange={imageChangeHandler} >
      </input>
    </div>
    <div className={styles.form}>
    <label>description</label>
      <input type='text'value={enteredDescription} onChange={descriptionChangeHandler} >
      </input>
    </div> 

    </form>
  </div>
  )
  };

export default Form;
