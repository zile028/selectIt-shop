import './App.css';
import axios from "axios";
import Navbar from "./component/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = "http://localhost:4000/"
} else {
    axios.defaults.baseURL = "https://select-it-shop-be.vercel.app/"
}

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
