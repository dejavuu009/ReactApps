import React, {useState} from "react";
import styles from "./Form.module.scss";
import Form from 'react-bootstrap/Form';
import {twitterAccounts} from '../../data/twitterAccounts'

import Title from '../Title/Title';





const MyForm = () => {

const [enteredTitle, setEnteredTitle] = useState(twitterAccounts);
// const [enteredLink, setEnteredLink] = useState("");
// const [enteredImage, setEnteredImage] = useState("");
// const [enteredDescription, setEnteredDescription] = useState("");

const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value)
};
// const linkChangeHandler = (event) => {
//   setEnteredLink(event.target.value)
// }
// const imageChangeHandler = (event) => {
//   setEnteredImage(event.target.value)
// }
// const descriptionChangeHandler = (event) => {
//   setEnteredDescription(event.target.value)
// }

const addexpenseHandler = expense =>{
  setEnteredTitle(prevExpense => {
    return [expense, ...prevExpense]
  })
}


  const submitHandler = (e) => {
    e.preventDefault();
    
    const expenseData = {
      name: enteredTitle,
      // twitterLink: enteredLink,
      // image: enteredImage,
      // description: enteredDescription,
      
    };
    console.log(expenseData);
    // setEnteredTitle("");
   
      setEnteredTitle(prevState => ({
       
          ...prevState.enteredTitle,  
        

  }));
    
  };

  return(
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
    <Form id="my-form" autoComplete="off" className={styles.form} onSubmit={submitHandler} >

    <Form.Group className={styles.form}>
    <Form.Label>Name</Form.Label>
      <Form.Control type='text' value={enteredTitle} onChange={titleChangeHandler}  />
    </Form.Group>

    {/* <Form.Group className={styles.form}>
    <Form.Label>link</Form.Label>
      <Form.Control type='text' value={enteredLink} onChange={linkChangeHandler}/>
    </Form.Group>

    <Form.Group className={styles.form}>
    <Form.Label>img</Form.Label>
      <Form.Control type='text' value={enteredImage} onChange={imageChangeHandler}/>
    </Form.Group>

    <Form.Group>
    <Form.Label>description</Form.Label>
      <Form.Control type='text'value={enteredDescription} onChange={descriptionChangeHandler}/>
    </Form.Group>  */}

    </Form>
  </div>
  )
  };

export default MyForm;
