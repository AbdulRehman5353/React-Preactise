import { useEffect,useState } from "react";
import './App.css';

// const [dataApi, setDataApi] = useState("");

function App() {
  
  const [dataApi, setDataApi] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(res =>  setDataApi(res) )
   },[])

   console.log("data", dataApi)

 
  const listItems = dataApi?.map((myList) =>  

  <div className="col-md-3">
  <div className="card">
    <img src={myList.url} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{myList.splice(2, 0)}</h5>
      <h1 className="card-title">{myList.id}</h1>
      <p className="card-text "  >This is a longer card This content is a little bit longer.</p>
    </div>
  </div>
</div>

);  
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
{listItems}
  </div>
  </div>
  );
}

export default App;
