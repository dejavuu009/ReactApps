import React from "react";

import HeaderNavigation from "./HeaderNavigation";
import styles from './Header.module.scss';
import LogoImage from '../../assets/images/logo.svg';
import MyModal from "../Modal/MyModal";


const Header = ({submitFn}) => (
<header className={styles.wrapper}>
    <img src={LogoImage} alt="logo"/>
    <HeaderNavigation></HeaderNavigation>
    {/* <Button secondary >new item</Button> */}
    <MyModal  />
</header>
);

export default Header;