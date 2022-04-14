import { useEffect,useState } from "react";
import './App.css';
import ContentModal from "./ContentModal";
import FormModal from "./FormModal.tsx";




function App() {

  const [dataApi, setDataApi] = useState([]);
  const [dataApiId, setDataApiId] = useState();
  const [isLoading, setLoading] = useState(true);
  const [deleteState, setDeleteState] = useState({});

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(response => response.json())
    .then(res =>  loaderHandler(res))



   },[])

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const loaderHandler = (res) => {
     setShow(false)
     setDataApi(res);
        console.log(res);
        setLoading(false);
        
    };
   
   const openModal = (APiId) => {
  setDataApiId(APiId);
  setShow(true);
   }
   const DeleteItem = (APiId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${APiId}`, { method: 'DELETE' })
    .then(() => alert("ddssshoy"));
    setDataApi(dataApi.filter(item=>item.id!==APiId))
   }

 
  const listItems = dataApi.map((myList) =>  

  <div className="col-md-3">
  <div className="card" key={myList.id} > 
   <div className="card-header d-flex justify-content-between">
  <h6>{myList.id}</h6> 
   </div>
   <div className="card-img-area">

    <img src={myList.url} className="card-img-top" alt="..."/>
  <div onClick={() => DeleteItem(myList.id)}><i className="fa fa-times fa-icons" aria-hidden="true"></i></div>
   </div>
    <div className="card-body">
      <h5 className="card-title">{myList.title}</h5>
      
      <p className="card-text "  >This is a longer card This content is a little bit longer.</p>
   <div className="card-footer d-flex justify-content-between">
   <button type="button" className="btn btn-primary" onClick={() => openModal(myList.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
       View Detail
      </button>
   <button type="button" className="btn btn-primary" onClick={() => openModal(myList.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
       Edit Detail
      </button>
   </div>
    </div>

  </div>
</div>

);  
  return (
    <>
    <div className="container mt-5 ">
      
      { isLoading ? 
(<div className="loader mt-5 pt-5">
<div className="spinner-border " role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>)
     : 
   (
    <>
               {/* <div>
<span className="warn warning"></span>
</div> */}
    <FormModal ></FormModal>
    <ContentModal modalShow={show} modalClose={handleClose} dataApiIds={dataApiId}></ContentModal>
    
    <div className="row row-cols-1 row-cols-md-2 g-4">
            {listItems}
 
          </div></>
   )
      }
  </div>
  </>
  );
}

export default App;
