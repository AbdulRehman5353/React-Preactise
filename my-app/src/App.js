// import {useState, createContext } from "react";
import './App.css';
import Provider from "./Provider";
import InputContent from "./input";
import InputTitle from "./inputTitle";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function App() {

  return (
    <div className="App">
           <Provider style={styles}>
    <InputContent />
    <InputTitle />
  </Provider>
  </div>
  );
}

export default App;
