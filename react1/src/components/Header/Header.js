import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import HeaderNavigation from "./HeaderNavigation";


import MyModal from "../Modal/MyModal";



const Header = () => {

return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav >
            <HeaderNavigation></HeaderNavigation>
            <MyModal></MyModal>
      </Nav>
    </Container>
  </Navbar>
)


};

export default Header;