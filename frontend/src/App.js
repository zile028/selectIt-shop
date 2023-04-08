import './App.css';
import axios from "axios";
import Navbar from "./component/Navbar/Navbar";
import {Outlet} from "react-router-dom";

axios.defaults.baseURL = "http://localhost:4000/"

function App() {

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default App;
