import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react';
import { Formik, Field, Form } from "formik";


export default function FormModal(props) {
  const {contactInfo,setContactInfo, handleClose, showModalContent} = props
   const [ModalContent, setModalContent] = useState(false);
  const [input, setInput] = useState('');

  var isLoader = true;

  useEffect(() => {
    // Update the document title using the browser API
    alert(isLoader);
    setTimeout(() => { isLoader = false }, 1000);
  });
     
  const contactForm = () => {
    console.log(contactInfo);
     setTimeout(() => { alert("dd") }, 1000);
  }
//  console.log("data", contactInfo)
  return (

    <>
    <Modal show={showModalContent} toggle={()=>handleClose(false)} >
    <Modal.Header  closeButton  onClick={()=>handleClose(!showModalContent)}>
    </Modal.Header>
{isLoader ?  
(<div className="loader1"></div>):
(  <Modal.Body>
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
     </Modal.Body> )
}

  


    <Modal.Footer>

    </Modal.Footer>
  </Modal>
  </>
  )
}
