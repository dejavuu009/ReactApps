import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";

import Title from '../Title/Title';

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <Input
        name="name"
        label="Name"
        maxLength={30}
      />
      <Input
        name="link"
        label="Twitter link"
      />
      <Input
        name="image"
        label="Image"
      />
      <Input
        tag="textarea"
        name="description"
        label="Description"
      />
      <button type="submit">add</button>
    </form>
  </div>
);

export default Form;
