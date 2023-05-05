import './App.css';
import axios from "axios";
import Navbar from "./component/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


axios.defaults.baseURL = "http://localhost:4000/"

function App() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </>
    );
}

export default App;
