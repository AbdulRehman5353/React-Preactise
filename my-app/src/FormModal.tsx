import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Formik, Field, Form } from "formik";

export default function FormModal() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const openModal = () => {
    // setDataApiId(APiId);
    setShow(true);
     }
  const modalClose = () => {
    setShow(false);
     }

  

  return (

    <>
    <button  className='btn m-3 btn-primary mb-5' onClick={() => openModal()} >Add Card</button>
    <Modal show={show}  >
    <Modal.Header onClick={() => modalClose()} closeButton>
    </Modal.Header>

  
    <Modal.Body>
    <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
    <Form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1"  className="form-label">Title</label>
    {/* <input type="text"  name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
    <Field  className="form-control" name="title" type="text" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    {/* <input type="email"  name="email"  className="form-control" id="exampleInputPassword1"/> */}
    <Field   className="form-control" name="description" type="text" />
  </div>
  <div className="mb-3">
  <label htmlFor="formFile" className="form-label"> File</label>
    <input className="form-control" type="file" id="formFile"/>
</div>
<div className="d-flex justify-content-end">
  
<button type="submit" className="btn btn-primary">Submit</button>
</div>
</Form>
</Formik>
   </Modal.Body> 
    <Modal.Footer>

    </Modal.Footer>
  </Modal>
  </>
  )
}
