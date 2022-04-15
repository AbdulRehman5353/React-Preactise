import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Formik, Field, Form } from "formik";


export default function FormModal({contactInfo,setContactInfo}) {
 
  const [ModalContent, setModalContent] = useState(false);
  const [input, setInput] = useState('');

  // const [show, setShow] = useState(false);
  // const openModal = () => {

  //   setShow(true);
  //   setModalContent(true);
  //    }
  // const modalClose = () => {
  //   setShow(false);
  //    }

     
  const contactForm = () => {
    console.log();
    
  }
//  console.log("data", contactInfo)
  return (

    <>
    <Modal show={true}  >
    <Modal.Header  closeButton>
    </Modal.Header>


    <Modal.Body>
<form onSubmit={contactForm} >
<div className="mb-3">
    <label htmlFor="exampleInputEmail1"  className="form-label">Title</label>
    <input type="text"  name="name" className="form-control"   onChange={(e) => setContactInfo({
      ...contactInfo,
      title:e.target.value
    })}
     value={contactInfo.name} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1"  className="form-label">Description</label>
    <input type="text"  name="description" className="form-control"   onChange={(e) => setContactInfo({ ...contactInfo, url :e.target.value})}
     value={contactInfo.description} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <button className='btn btn-primary' >Submit</button>
</form>
   </Modal.Body> 


    <Modal.Footer>

    </Modal.Footer>
  </Modal>
  </>
  )
}
