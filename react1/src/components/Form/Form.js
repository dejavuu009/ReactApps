import React, {useState} from "react";
import styles from "./Form.module.scss";

import Title from '../Title/Title';


const Form = () => {

const [enteredTitle, setTitle] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value)
  };

  return(
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
    <form autoComplete="off" className={styles.form} >
    <div>
    <label>Name</label>
      <input type='text' onChange={titleChange}>

      </input>
    </div>
    <div>
    <label>link</label>
      <input type='text'>

      </input>
    </div>
    <div>
    <label>img</label>
      <input type='text'>


      </input>
    </div>
    <div>
    <label>description</label>
      <input type='text'>

      </input>
    </div> 
    </form>
  </div>
  )
  };

export default Form;
