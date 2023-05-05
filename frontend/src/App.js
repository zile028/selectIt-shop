import './App.css';
import axios from "axios";
import Navbar from "./component/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {BASE_URL_BE} from "./config/config";

axios.defaults.baseURL = BASE_URL_BE

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
