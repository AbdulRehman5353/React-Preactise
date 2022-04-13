import React from 'react'
import {  useEffect , useState } from "react";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ContentModal(props) {
  const [dataApi, setDataApis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/photos/${props.dataApiIds}`)
    .then(response => response.json())
    .then(res =>{setDataApis(res); setIsLoading(false)} )
   },[props.dataApiIds])

  //  const loadingHandler = (res) => {
  //   setIsLoading(false);
  //   setDataApis(res);
  //  }
   
console.log("data",dataApi)
  return (
    <>
      <Modal show={props.modalShow} onHide={props.modalClose}>
        <Modal.Header closeButton>
        </Modal.Header>

        { isLoading ?  (<div className="loaderModal mt-5 pt-5">
        <div className="spinner-border " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>) : (
        <Modal.Body>
       <div className="card" key={dataApi.id} >
 
   <img src={dataApi.url} className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">{dataApi.title}</h5>
     
     <p className="card-text "  >This is a longer card This content is a little bit longer.</p>
      
      </div>
    </div>
       </Modal.Body> 
       )}
        <Modal.Footer>
 
        </Modal.Footer>
      </Modal>

    </>
  )
}
