import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "axios";
import UserServices from "./services/UserServices";

axios.defaults.baseURL="http://localhost:4000/"


function App() {

  useEffect(() => {
    UserServices.getUser({pet:"Dog", color:"white"})
        .then((res)=>{
          console.log(res.data)
        })
        .catch((error)=>{
          console.log(error)
        })

  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
