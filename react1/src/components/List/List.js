import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";
import {twitterAccounts} from "../../data/twitterAccounts";

const List = () => {
  return( 
    <>
     <ul className={styles.wrapper}>
    {twitterAccounts.map(item => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
  </>
  )
};

export default List;
