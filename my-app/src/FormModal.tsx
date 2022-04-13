import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function FormModal() {
  return (
    <Modal show={false} >
    <Modal.Header closeButton>
    </Modal.Header>

  
    <Modal.Body>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Text</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
<div className="d-flex justify-content-end">
  
<button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
   </Modal.Body> 
    <Modal.Footer>

    </Modal.Footer>
  </Modal>
  )
}
