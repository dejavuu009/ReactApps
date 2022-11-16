import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../Form/Form';
import { twitterAccounts } from '../../data/twitterAccounts';




const MyModal = () => {
  

  const [data, setData] = useState(twitterAccounts);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

const handleSubmit = () => {
 
  handleClose();
};

const addItem = e => {
  // e.preventDefault();

  const newItem = {
    name: e.target[0].value,
    twitterLink: e.target[1].value,
    image: e.target[2].value,
    description: e.target[3].value
  };

  // this.setState(prevState => ({
  //    ...prevState.items, newItem
  // }));

  
  this.setState((items) => {
   return {items, newItem}
 });



  e.target.reset();
};

  return(
    <>
    <Button
  

     variant="primary" onClick={handleShow}>
      add new item
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>add new item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit} >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )

};
 export default MyModal;