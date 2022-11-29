import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyForm from '../Form/MyForm'

// import { twitterAccounts } from '../../data/twitterAccounts';




const MyModal = () => {
  



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

// const handleSubmitButton = () => {
//   handleClose();
//   console.log('works');
// };

// const addItem = e => {
//   // e.preventDefault();

//   const newItem = {
//     name: e.target[0].value,
//     twitterLink: e.target[1].value,
//     image: e.target[2].value,
//     description: e.target[3].value
//   };

  // this.setState(prevState => ({
  //    ...prevState.items, newItem
  // }));


 





  return(
    <>
    <Button
     variant="primary" size='sm' onClick={handleShow}>
      add new item
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>add new item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <MyForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type='submit' form='my-form' onClick={handleClose} >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )

};
 export default MyModal;